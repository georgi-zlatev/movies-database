import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-awards-list',
  templateUrl: './awards-list.component.html',
  styleUrls: ['./awards-list.component.css']
})
export class AwardsListComponent implements OnInit{
  constructor(private api: ApiService){}
ngOnInit(): void {
  this.api.getAwards().subscribe((awards) =>{
    console.log(awards);
    
  })
}
}
