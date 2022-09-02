import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get("/test/:bookId/:authorId")
  // paracticeRouteParams(@Param("bookId") bookId:number,
  //                     @Param("authorId") authorId:number): string {
  //                     return `Get Book By Id ${bookId} written by author with Id ${authorId}`;
  // }

  //Multiple queary parameter pass korar  jonno
  @Get("/test/:bookId/:authorId/:userId/:token")
  paracticeRouteParams(@Param() Params): string {
                      return `
                      Get Book By Id ${Params.bookId}
                      written by author with id ${Params.authorId}
                      userID ${Params.userId}
                      token ${Params.token} `
  }
}
