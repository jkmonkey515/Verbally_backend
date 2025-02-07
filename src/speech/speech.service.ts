import { Injectable } from "@nestjs/common";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { SpeechClient, protos as speechProtos } from "@google-cloud/speech";
import * as path from "path";
import { protos } from "@google-cloud/text-to-speech";

@Injectable()
export class SpeechService {
  private textToSpeechClient: TextToSpeechClient;
  private speechClient: SpeechClient;

  constructor() {
    // Initialize Text-to-Speech client with credentials
    this.textToSpeechClient = new TextToSpeechClient({
      credentials: require("../keys/text-to-speech.json"),
    });

    // Initialize Speech-to-Text client with credentials
    this.speechClient = new SpeechClient({
      credentials: require("../keys/speech-to-text.json"),
    });
  }

  async textToSpeech(text: string): Promise<Buffer> {
    const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest =
      {
        input: { text },
        voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
        audioConfig: { audioEncoding: "MP3" },
      };

    const [response] = await this.textToSpeechClient.synthesizeSpeech(request);
    return response.audioContent as Buffer;
  }

  async speechToText(audioBuffer: Buffer): Promise<string> {
    const audio: speechProtos.google.cloud.speech.v1.IRecognitionAudio = {
      content: audioBuffer.toString("base64"),
    };

    const config: speechProtos.google.cloud.speech.v1.IRecognitionConfig = {
      encoding: "LINEAR16" as const,
      sampleRateHertz: 16000,
      languageCode: "en-US",
    };

    const request: speechProtos.google.cloud.speech.v1.IRecognizeRequest = {
      audio,
      config,
    };

    const [response] = await this.speechClient.recognize(request);
    return (
      response.results
        ?.map((result) => result.alternatives?.[0]?.transcript)
        .join(" ") || ""
    );
  }
}
