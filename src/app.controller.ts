import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  @Get('/')
  helloWorld(): string {
    return "Hello World";
  }

  @Get('/users/:email')
  userExistsByEmail(@Param('email') email: string )  {
    
    if(this.appService.userExistsByEmail(email)) {
      return {exists: 'true'}
    } else { 
      return {exists: 'false'}
    }
  }

  @Get('/users/:email/:id')
  reportAdress(@Param('email') email: string, @Param('id') id: string){
    return { addresses: this.appService.deployAddreses(email, id)};
  }

  @Get('/users/:email/validate/:address')
  validateAddress(@Param('email') email: string, @Param('address') address: string){
    return {exract: this.appService.validateAddress(email,address)};
  }

}
