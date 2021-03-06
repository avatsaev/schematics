import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class <%= classify(name) %>Interceptor implements NestInterceptor {
  intercept(context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    return stream$.pipe(map((data) => data));
  }
}
