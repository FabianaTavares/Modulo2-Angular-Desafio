import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { dtoCompleto } from '../model/complete';
import { senadoresDto } from '../model/senators';

//const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class SenadoresService {
  private readonly baseUrl = `${environment.API}`;

  constructor(private httpClient: HttpClient) {}

  getListaSenadores() {
    return this.httpClient.get<senadoresDto[]>(`${this.baseUrl}/senadores`);
  }

  getDespesasSenadores(id: string) {
    return this.httpClient.get<dtoCompleto>(
      `${this.baseUrl}/despesasSenadores/${id}`
    );
  }
}
