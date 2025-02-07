import { Injectable } from "@nestjs/common";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { SpeechClient, protos as speechProtos } from "@google-cloud/speech";
import { protos } from "@google-cloud/text-to-speech";

@Injectable()
export class SpeechService {
  private textToSpeechClient: TextToSpeechClient;
  private speechClient: SpeechClient;

  constructor() {
    // Initialize Text-to-Speech client with credentials from environment
    this.textToSpeechClient = new TextToSpeechClient({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS_TEXT_TO_SPEECH),
    });
    // this.textToSpeechClient = new TextToSpeechClient({
    //   credentials: require("../keys/text-to-speech.json"),
    // });

    // Initialize Speech-to-Text client with the same credentials
    this.speechClient = new SpeechClient({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS_SPEECH_TO_TEXT),
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
      content: audioBuffer,
    };

    const config: speechProtos.google.cloud.speech.v1.IRecognitionConfig = {
      encoding: "WEBM_OPUS",
      sampleRateHertz: 48000, // Updated to match WEBM OPUS header
      languageCode: "en-US",
      enableAutomaticPunctuation: true,
      model: "default",
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
