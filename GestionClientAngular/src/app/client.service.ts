import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseURL = "http://localhost:8080/api/v1/clients";

  constructor(private httpClient: HttpClient) {}

  getClientsList(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.baseURL);
  }

  createClient(client: Client): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, client);
  }

  getClientById(id: number): Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseURL}/${id}`);
  }

  updateClient(id: number, client: Client): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, client);
  }

  deleteClient(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
