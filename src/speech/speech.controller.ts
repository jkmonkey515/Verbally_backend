import { Controller, Post, Body, Header, BadRequestException } from '@nestjs/common';
import { SpeechService } from './speech.service';

@Controller('speech')
export class SpeechController {
  constructor(private readonly speechService: SpeechService) {}

  @Post('text-to-speech')
  @Header('Content-Type', 'audio/mpeg')
  async convertTextToSpeech(@Body() body: { text: string }): Promise<Buffer> {
    if (!body.text) {
      throw new BadRequestException('Text is required');
    }
    return this.speechService.textToSpeech(body.text);
  }

  @Post('speech-to-text')
  async convertSpeechToText(@Body() body: { audio: string }): Promise<{ text: string }> {
    if (!body.audio) {
      throw new BadRequestException('Audio content is required');
    }
    
    const audioBuffer = Buffer.from(body.audio, 'base64');
    const text = await this.speechService.speechToText(audioBuffer);
    return { text };
  }
}