import { despesasDto } from './despesasDto';
import { senadoresDto } from './senadoresDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dtoCompleto } from './dtoCompleto';
import { environment } from 'src/environments/environment';

//const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class SenadoresService {

  private readonly baseUrl = `${environment.API}`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getListaSenadores() {
    return this.httpClient.get<senadoresDto[]>(`${this.baseUrl}/senadores`);
  }

  getDespesasSenadores(id: string) {
    return this.httpClient.get<dtoCompleto>(`${this.baseUrl}/despesasSenadores/${id}`);
  }

}
