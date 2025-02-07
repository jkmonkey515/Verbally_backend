"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechService = void 0;
const common_1 = require("@nestjs/common");
const text_to_speech_1 = require("@google-cloud/text-to-speech");
const speech_1 = require("@google-cloud/speech");
let SpeechService = class SpeechService {
    constructor() {
        this.textToSpeechClient = new text_to_speech_1.TextToSpeechClient({
            credentials: require("../keys/text-to-speech.json"),
        });
        this.speechClient = new speech_1.SpeechClient({
            credentials: require("../keys/speech-to-text.json"),
        });
    }
    async textToSpeech(text) {
        const request = {
            input: { text },
            voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
            audioConfig: { audioEncoding: "MP3" },
        };
        const [response] = await this.textToSpeechClient.synthesizeSpeech(request);
        return response.audioContent;
    }
    async speechToText(audioBuffer) {
        const audio = {
            content: audioBuffer.toString("base64"),
        };
        const config = {
            encoding: "LINEAR16",
            sampleRateHertz: 16000,
            languageCode: "en-US",
        };
        const request = {
            audio,
            config,
        };
        const [response] = await this.speechClient.recognize(request);
        return (response.results
            ?.map((result) => result.alternatives?.[0]?.transcript)
            .join(" ") || "");
    }
};
exports.SpeechService = SpeechService;
exports.SpeechService = SpeechService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SpeechService);
//# sourceMappingURL=speech.service.js.map