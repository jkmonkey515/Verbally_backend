import { SpeechService } from './speech.service';
export declare class SpeechController {
    private readonly speechService;
    constructor(speechService: SpeechService);
    convertTextToSpeech(body: {
        text: string;
    }): Promise<Buffer>;
    convertSpeechToText(body: {
        audio: string;
    }): Promise<{
        text: string;
    }>;
}
