import {Component, OnInit} from '@angular/core';
import {Client} from '../client';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../client.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-details.html',
  styleUrl: './client-details.css',
})
export class ClientDetails implements OnInit{
  id!: number
  client: Client = new Client();
  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClientById(this.id).subscribe( data => {
      this.client = data;
    });
  }
}
