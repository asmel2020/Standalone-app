import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
@Injectable()
export class AppService {


  @Cron('* * * * * *')
  getHello(){
    console.log('Hello World! current second is 45');
  }

}
