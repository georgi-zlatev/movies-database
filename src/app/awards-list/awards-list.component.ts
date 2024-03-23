import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Award } from '../types/awards';

@Component({
  selector: 'app-awards-list',
  templateUrl: './awards-list.component.html',
  styleUrls: ['./awards-list.component.css']
})
export class AwardsListComponent implements OnInit{

  awards: Award[] = []
  isLoading: boolean = true;


  constructor(private api: ApiService){}
ngOnInit(): void {
  this.api.getAwards().subscribe((awards) =>{
      this.awards = awards
      setTimeout(() => {
        this.isLoading = false;
      }, );
    
  })
}
}
