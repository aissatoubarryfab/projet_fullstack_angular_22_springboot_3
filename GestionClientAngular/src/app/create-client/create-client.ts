import {Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create-client',
  imports: [
    FormsModule
  ],
  templateUrl: './create-client.html',
  styleUrl: './create-client.css',
})
export class CreateClient implements OnInit{
  client: Client = new Client();
  constructor(private clientService: ClientService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveClient(){
    this.clientService.createClient(this.client).subscribe( data =>{
        console.log(data);
        this.goToClientList();
      },
      error => console.log(error));
  }

  goToClientList(){
    this.router.navigate(['/clients']);
  }

  onSubmit(){
    console.log(this.client);
    this.saveClient();
  }
}
