export declare class SpeechService {
    private textToSpeechClient;
    private speechClient;
    constructor();
    textToSpeech(text: string): Promise<Buffer>;
    speechToText(audioBuffer: Buffer): Promise<string>;
}
