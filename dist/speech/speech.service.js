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
            credentials: {
                type: "service_account",
                project_id: "plasma-torus-448012-f6",
                private_key_id: "c61430b1e223de99ccb8eb78ee68d939d1f0e524",
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDT8f0T50LouQgT\nntOj0I/74j1f1RQYKtnfmS+l+bKuDtEGQjwyat3X1df4Hkknh5bt50WchVy7rmAS\nhM8mBmrkMG+JgUdxrK42QItLiyHlZwWQYXzKJm4goWEDMmZ14PLSm2mS9YKGevvr\nEw2O/KOrtO7YjFz2Zm8ucStZR5Z7QdZp+ocG6xx6mQKl4VC/5pwShVVpTxFO4bjO\n0RERcBB7d+c1lBlhbA26DWAeAjZogm8Qol58MkfuvbJnSEkJwtSPBM5p1pt+G5aG\n86gWOvJ5K2llObSgWSADRV8B8YqPpNurEjF+jNrH8tI+l7MQ2uugyNAB34KYeFO8\nSu6h9bvrAgMBAAECggEAEBEABko5oDqmihY4JOrif02fKWyVoV9eNL0AB6zuBpPI\n9JiAx7GiL4JeZMim8wAsSMyHUl4psXB+h+jZayCBadriGaJbMBrO+f3akVdyslkk\n6tT5CLnxDzgsinl/mt/6iEyPrDxAMMGR5zgChxxPq+yDTpcVVPhe5T5e8t2iYqVv\nlkORpWkouGxAfPyr8jWfgmJImYLXOVmVr0DBL/7pwHXZXzWrDkgAAJyVS3pdiY0l\nf54PD8ucrbANvxJrqjCKT5YW/q6lMHLf/J46Km9FoOp7WpnN97tKmFnSmibQ52F0\nmI5pFCpA+wMKl+9BRgr4mab43OMDfjTOsBfUK4yNAQKBgQD8MVQY6MQb6raYVDu8\n444fjSckfL0hs0R7qjRnpu3xstbcSHHnFy716rbt62cu0k43mzUxIxHIo2aSnuyh\nWRYzsPCMBS6p7GTTOC2PQ580iUgeFoUbFDvGgxWxdnNWam5/W1GU7VpgVibl0pTm\nVu8sETVlzOCwowhIXk03P+OTUQKBgQDXJRy/RztMVRciho9ExMRnfxeLa8ZAmlX4\nqxUDPs5LVnWpyiSNmne4I5w45LXF1sl+8VOvud177e49GLxj2HHbz6FRZm00z4ve\nIRt+Mv+AF3UBqsfyGXKQJAeJ4zoG5F6OFrVlm1TXVss48eSk4N1jzkITBp/8Wz68\nYIp7bzm0ewKBgEwF4sAPiu6PdrO80LVEM5e3SVFqeOkrzT0qNdn5LElsC/EjtZJg\nHrvrIXHfQJ+Qrht9Ii/JzpaZC1avqc2JuXOjpx/OgB6hMFOr37AMRnXj3GWVjFJ5\navuQkH2Ko4ItW1nxAUrPsirQTbGCJXi6RCcYmOwzMpiMzPZj1wsMq2HBAoGBAIt6\nzABWNeNu5ujDQ+7Zglt20dTZslX/uOzWPXE1Lpk5HF9PZhNHqYX/0DAyVoZEka1y\n10Z9wVGvF10UxE4W7PoMyhDzzqkGRS9lV2WhunNYwcqq5aXXSaaZNSn33o7JT2Pe\n5QtSgNZ6tpXcfNdH0T/7YGrlSKNapHmMPTt5CHgxAoGAUAr/uV3Vv4odvmLwmobR\nxeO9hQLDGvCr4hV/Z0eMgUhUsFGYPg7bHClxceK+UliBoiMvZf11HMU64XXL9KMz\njCNpgTB9T3Nsz9Us66sttHpxfokoi0VA7+1/J2JblmYMPbT4nji5qIyH6awN37lq\njSA5ug5XRqHcW9QGGSKhEAw=\n-----END PRIVATE KEY-----\n",
                client_email: "texttospeech@plasma-torus-448012-f6.iam.gserviceaccount.com",
                client_id: "116216676506162584908",
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/texttospeech%40plasma-torus-448012-f6.iam.gserviceaccount.com",
                universe_domain: "googleapis.com",
            },
        });
        this.speechClient = new speech_1.SpeechClient({
            credentials: {
                type: "service_account",
                project_id: "plasma-torus-448012-f6",
                private_key_id: "590946adc54244e306ce2257afa80b5ef22da0f3",
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxzzin59BHf4WS\nqfYr2ghsD4x8hyeutUwv1lvNwqCPnZCaNIP3lnuhJWdSBnoOZK7DoyM7+Af697JX\n32UczNx/15/nchCT//v6C7mQNjTPAjfOgwFjkP73zPnjIh37uvUG+SPTGnJwQ4eu\nMzmGJendXWozlwa2Y3GFhwAtOCE1mAhI3C9pexqF0to5uY8Kbs3QnMsYo4/RBJn+\nBaoiMnlTRgWzgiwJWw2j2nBTklbd/QNUFblJYchB123vRwSHBH3ENdGuFXq0xnIJ\nmxxeFONmktwhMeZKd3Z+gMD7b9YMz8QtRFvZsoQzfyBlNc4XuvUaHK8pqq+tnQYs\nDM3c5r0zAgMBAAECggEALAsZzBFyOHugcQNTnGoeAvJZCLGLxU1YKVNOGyoWDmzn\nmCLg+2+VgQWcUaeUDUOoPIKI5D5cb7ByRyzpRViDV9Fn5PMOozJZzoaf+NZMf2hb\nvXYa3nhYh7YIwde+GJAnSIpm8tAOv7sifSZoHc//XVtZxpymx3/ba0lU5F6Ob1Em\nUc3kAYP5ylX2E2jEf2J2at7ceyVNlp5zi2i+sCA+nj8ksvHo8v3NheJppWhZLG9h\nK93HEFAsxgb8UYGfzRJu45kLTbNDXNDq+Vq4fgua3jaw0CwaDainstzMgxiDmwLa\nYUD12XiMj3G+gHsiiEvcI2XNvaRuQwjU2EB018+bVQKBgQDyW/AKC5L/r0heRRW5\nUQ7qGeQohvV8bz+Li7PMNbsX+9QdZeWbS+mOnOdgb6NW0C6z0L9TraEj1A7CezOu\nomUVoV26eJjpIl+AIQOs6nJ8iUcXUUeBB1+XHAFzo1IMzMQocnpRbgmuSlHeywGE\ndwBs2iaCzNq3UxwZw/+rfZuPhwKBgQC70TYkIV/VKXJvwnqA504OkiuRb1w7/ZNI\nv/tWDXlEzmCJrLvQph+mgQhn9cDtYsXnUVUCoKEoCngWlASuM3/0VGTgrEOdY+Bq\nZNTQZo0/d1/b8t7vaOn6BxRWT5+1+JvJNU7KLNuPEJrBT55Y+xt+hg8+xE6opzj1\nqXvMOaTX9QKBgEgzY3tan1xUl7ad1i7zGwJa3EHGkvOTINcts06u4yHt/+8SICj3\noIi/7Z4pI/wE4STol1cSbuMBlbQSh/8KmhqrjAS1ULiDaPf+3d1xqtG3A9rKeAbU\nb4HQ8g3FJfhyOC3kjNQdd/zYXzOEPtt7qEDFbJui87WRqNl0LoKkVOeZAoGAC7Wx\ngHMsPGgHIHypkpvZPANVAA5HW94lbqW5j9XrN6T+U9cXJp0U4BavZXvm+WXtHMzv\nVeiZ45szfYTg/dNsKNmSKIfU910gwsFim1Opfsl8ioQL7jVGUTZbyD3SoU/MtrDC\nJszBK5xHacIDB10wi6TkEm++z7kNThOxCjyV0HkCgYEAlZQv0nK2G69ior+sz8HF\nxqlfbGRHa9NUkVQF6WGcjdISbkWronEb4vBIxCDpll4RoAAMlzN8pGblroselyKp\n75WZw34HmvDCDAH4ap/H9C/rn5D5lvw2zxqhUcx5p1IFokzENdk6A5u6CnqErrfT\nLOmohHboaLA4uXMno5NLWeQ=\n-----END PRIVATE KEY-----\n",
                client_email: "speech-to-text@plasma-torus-448012-f6.iam.gserviceaccount.com",
                client_id: "107818146317980431192",
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/speech-to-text%40plasma-torus-448012-f6.iam.gserviceaccount.com",
                universe_domain: "googleapis.com",
            },
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