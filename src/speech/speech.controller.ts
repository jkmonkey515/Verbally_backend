import {
  Controller,
  Post,
  Body,
  Header,
  BadRequestException,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { SpeechService } from "./speech.service";

@Controller("speech")
export class SpeechController {
  constructor(private readonly speechService: SpeechService) {}

  @Post("text-to-speech")
  @Header("Content-Type", "audio/mpeg")
  async convertTextToSpeech(@Body() body: { text: string }): Promise<Buffer> {
    if (!body.text) {
      throw new BadRequestException("Text is required");
    }
    return this.speechService.textToSpeech(body.text);
  }

  @Post("speech-to-text")
  @UseInterceptors(FileInterceptor("audio"))
  async convertSpeechToText(
    @UploadedFile() file: Express.Multer.File
  ): Promise<{ text: string }> {
    if (!file) {
      throw new BadRequestException("Audio file is required");
    }

    const text = await this.speechService.speechToText(file.buffer);
    return { text };
  }
}
