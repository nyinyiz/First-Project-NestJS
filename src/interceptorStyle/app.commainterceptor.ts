import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    UnprocessableEntityException,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class CommaInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const request = context.switchToHttp().getRequest();
      return next.handle().pipe(
        map((data) => {
          /* adding comma every 3 digits */
          data = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return data;
        }),
      );
    }
  }

  @Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        return {
          success: true,
          responseCode: 200,
          data: data,
        };
      }),
    );
  }
}