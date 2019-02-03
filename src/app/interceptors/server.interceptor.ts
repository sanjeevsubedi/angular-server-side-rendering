import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject('baseUrl') protected baseUrl: string) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const serverReq = !this.baseUrl ? req : req.clone({
      url: `${this.baseUrl}${req.url}`
    });

    return next.handle(serverReq);

  }

}
