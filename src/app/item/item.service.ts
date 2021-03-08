import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemServiceURL = "http://localhost:8080/itens";

  constructor( private http: HttpClient) { }

  getItens(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemServiceURL);
  }
}
