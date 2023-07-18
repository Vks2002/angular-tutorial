import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent {

  constructor(private http: HttpClient){
    
  }


  countryName = "";
  universities: any;
  isLoading = false;
  getUniversities = () => {
    this.isLoading = true;
    this.http.get(`http://universities.hipolabs.com/search?country=${this.countryName}`).subscribe((response)=>{
      this.universities = response;
      this.isLoading = false;
    })
  }
}
