import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://reqres.in/api';
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    return this.httpClient.get( this.url + '/users/?page=2')
      .pipe(
        map( resp => resp['data'])
      );
  }

  getUser(id: number) {
    return this.httpClient.get(this.url + '/users/' + id);
  }
}
