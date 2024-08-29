import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgbAlert,
    NgxPaginationModule,
    JsonPipe,
    CommonModule,
    FormsModule,
    PaginationModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //------ngx-pagination------
  p: number = 1;
  pageChanged(newPage: number) {
    this.p = newPage;
  }
  collection: any[] = [
   
    {
      "id": "77858809-ee0d-4fba-b454-aa13d146d750",
      "name": "oksana",
      "surname": "karpyn",
      "email": "oksana@test.it",
      "role": "admin"
    },
    {
      "id": "46c5f011-cb6e-46b6-8e78-a10669ff5f03",
      "name": "lidia",
      "surname": "karpyn",
      "role": "operator",
      "email": "lidia@test.it"
     
    },
    {
      "id": "135ad631-7aec-474e-a3ca-4d5b6df205b5",
      "name": "romana edit",
      "surname": "karpyn",
      "role": "standard",
      "email": "romana@test.it"
     
    },
    {
      "id": "95f2971a-c1c2-4594-8d05-71d651299aa8",
      "name": "oksana",
      "surname": "karpyn",
      "role": "admin",
      "email": "oksana1@test.it"
      
    },
    {
      "id": "4ef2afba-1eb9-458b-8e73-b12d93c5f0cb",
      "name": "marco",
      "surname": "de bon",
      "role": "operator",
      "email": "marco.debon@anitia.it"
    },
    {
      "id": "9fdb8a64-0cf1-40e0-916d-b0e01b865fba",
      "name": "francesa",
      "surname": "pippo",
      "role": "operator",
      "email": "francesca@test.it"
    },
    {
      "id": "76f1f12d-72e4-48a7-9355-8ba6d7925ccd",
      "name": "nicola",
      "surname": "pippo",
      "role": "operator",
      "email": "nicola@test.it"
    },
    {
      "id": "9fdb8a64-0cf1-40e0-916d-b0e01b865fba",
      "name": "francesa",
      "surname": "pippo",
      "role": "operator",
      "email": "francesca@test.it"
    },
    {
      "id": "9fdb8a64-0cf1-40e0-916d-b0e01b865fba",
      "name": "francesa",
      "surname": "pippo",
      "role": "operator",
      "email": "francesca@test.it"
    },
    {
      "id": "9fdb8a64-0cf1-40e0-916d-b0e01b865fba",
      "name": "francesa",
      "surname": "pippo",
      "role": "operator",
      "email": "francesca@test.it"
    },
    {
      "id": "9fdb8a64-0cf1-40e0-916d-b0e01b865fba",
      "name": "francesa",
      "surname": "pippo",
      "role": "operator",
      "email": "francesca@test.it"
    },
    {
      "id": "9fdb8a64-0cf1-40e0-916d-b0e01b865fba",
      "name": "francesa",
      "surname": "pippo",
      "role": "operator",
      "email": "francesca@test.it"
    },
  
  ]
//--------bootstrap pagination---------------------


maxSize = 3;
bigTotalItems = 10;
bigCurrentPage = 1;
itemsPerPage = 3;

  pageChangedBotstrap(event: any): void {
    this.bigCurrentPage = event.page;
  }
  

}
