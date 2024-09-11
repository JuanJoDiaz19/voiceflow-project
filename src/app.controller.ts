import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  @Get('/')
  helloWorld(): string {
    return "Hello World";
  }

  @Get('/users/:email')
  userExistsByEmail(@Param('email') email: string ): boolean {
    return this.appService.userExistsByEmail(email);
  }
}
