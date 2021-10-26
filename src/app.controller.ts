import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createCustomerInformation(@Body() request: any): string {
    console.log('Body: ', request);
    const result = this.appService.createCustomerInformation(request);
    return result;
  }
}
