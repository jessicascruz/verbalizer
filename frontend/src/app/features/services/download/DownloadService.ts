import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuarios`);
  }

  adicionarUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios`, usuario);
  }
}
