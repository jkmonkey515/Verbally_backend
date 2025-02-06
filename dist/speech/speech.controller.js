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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechController = void 0;
const common_1 = require("@nestjs/common");
const speech_service_1 = require("./speech.service");
let SpeechController = class SpeechController {
    constructor(speechService) {
        this.speechService = speechService;
    }
    async convertTextToSpeech(body) {
        if (!body.text) {
            throw new common_1.BadRequestException('Text is required');
        }
        return this.speechService.textToSpeech(body.text);
    }
    async convertSpeechToText(body) {
        if (!body.audio) {
            throw new common_1.BadRequestException('Audio content is required');
        }
        const audioBuffer = Buffer.from(body.audio, 'base64');
        const text = await this.speechService.speechToText(audioBuffer);
        return { text };
    }
};
exports.SpeechController = SpeechController;
__decorate([
    (0, common_1.Post)('text-to-speech'),
    (0, common_1.Header)('Content-Type', 'audio/mpeg'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpeechController.prototype, "convertTextToSpeech", null);
__decorate([
    (0, common_1.Post)('speech-to-text'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpeechController.prototype, "convertSpeechToText", null);
exports.SpeechController = SpeechController = __decorate([
    (0, common_1.Controller)('speech'),
    __metadata("design:paramtypes", [speech_service_1.SpeechService])
], SpeechController);
//# sourceMappingURL=speech.controller.js.map