import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sch-admin-side-nav',
  templateUrl: './sch-admin-side-nav.component.html',
  styleUrls: ['./sch-admin-side-nav.component.css']
})
export class SchAdminSideNavComponent implements OnInit {

  constructor( private r:Router) { }
  lo = JSON.parse(localStorage.getItem('schAdmin')!)

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    this.r.navigateByUrl('login')
  }
}
