import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";




@Injectable({
  providedIn: 'root'
})
export class Service {
  
  public entity: string;
  public defaultView: boolean = true;
  private apiurl = environment.server.url + "/api";



  constructor(private httpClient: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };



  public findAllItemsEntity(entity: string) {
    return this.httpClient.get<any[]>(`${this.apiurl}/${entity}`).pipe(
      tap((_) => console.log("get items")),
      catchError(this.handleError<any>("get items"))
    );
  }

  
  public _createItemEntity(entity: string, item: object) {
    return this.httpClient
      .post<any[]>(`${this.apiurl}/${entity}`, item, this.httpOptions)
      .pipe(
        tap((item: any[]) => console.log("added item")),
        catchError(this.handleError<any>("create item"))
      );
  }

 
  public deleteItemEntity(entity: string, id: any): Observable<any> {
    return this.httpClient
      .delete<any[]>(`${this.apiurl}/${entity}/${id}`, this.httpOptions)
      .pipe(
        tap((item: any[]) => console.log("item deleted")),
        catchError(this.handleError<any>("delete item"))
      );
  }

  
  public getItemEntity(entity: string, id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiurl}/${entity}/${id}`).pipe(
      tap((item: any) => console.log(`fetched item id=${id}`)),
      catchError(this.handleError<any>("get item"))
    );
  }


  public updateItemEntity(entity: string, id, item): Observable<any> {
    return this.httpClient
      .put<any>(`${this.apiurl}/${entity}/${id}`, item, this.httpOptions)
      .pipe(
        tap((item: any) => console.log(`fetched item id=${id}`)),
        catchError(this.handleError<any>("update item"))
      );
  }



  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // this send the error to remote logging infrastructure
      console.error(error); // log to console instead

      
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result(non blocking...)
      return of(result as T);
    };
  }





















// end

}
