import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-client',
  imports: [
    FormsModule
  ],
  templateUrl: './update-client.html',
  styleUrl: './update-client.css',
})
export class UpdateClient implements OnInit{

  id: number= 0;
  client: Client = new Client();
  constructor(private clientService: ClientService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClientById(this.id).subscribe(data => {
      this.client = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.clientService.updateClient(this.id, this.client).subscribe( data =>{
        this.goToClientList();
      }
      , error => console.log(error));
  }

  goToClientList(){
    this.router.navigate(['/clients']);
  }
}
