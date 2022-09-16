import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sch-admin',
  templateUrl: './sch-admin.component.html',
  styleUrls: ['./sch-admin.component.css']
})
export class SchAdminComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goto(r:string){
    this.router.navigateByUrl(r)
  }

}
