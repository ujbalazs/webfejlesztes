import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor {


   constructor() { }
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const token = localStorage.getItem("token")

      if (token) {
         request = request.clone({
            setHeaders: { 'x-access-token': token.toString() }
         });
      }

      return next.handle(request);
   }
}