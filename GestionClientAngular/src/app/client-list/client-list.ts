import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css',
})
export class ClientList implements OnInit {

clients: Client[]= [];

  constructor(private clientService: ClientService,
              private router: Router) {}

  ngOnInit(): void {
    console.log('composant chargé')
    this.getClients();
  }

  private getClients(){
    console.log('appel api')
    this.clientService.getClientsList().subscribe(data => {
        console.log('DATA', data);
        this.clients = data;
        console.log('taille', this.clients.length);
      });
  }

  clientDetails(id: number){
    this.router.navigate(['client-details', id]);
  }

  updateClient(id: number){
    this.router.navigate(['update-client', id]);
  }

  deleteClient(id: number){
    this.clientService.deleteClient(id).subscribe(data  => {
      console.log(data);
      this.getClients();
    })
  }
}
