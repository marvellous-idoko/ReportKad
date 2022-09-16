import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-sch-admin-dboard',
  templateUrl: './sch-admin-dboard.component.html',
  styleUrls: ['./sch-admin-dboard.component.css']
})
export class SchAdminDboardComponent implements OnInit {


  constructor(private router:Router, private s:SchAdminService) { }
sg:string = '';
de:any
  ngOnInit(): void {
  this.sg = JSON.parse(localStorage.getItem('schAdmin')!)['SchoolName']
  this.de = JSON.parse(localStorage.getItem('schAdmin')!)
  }
  goto(r:string){
    this.router.navigateByUrl('School-Admin/'+r)
  }
  portal(value:Boolean){
    this.s.portalUpdt(value)
    .subscribe((r: { [key: string]: any; })=>{
      alert('portal successfully toggled')
      localStorage.clear
      localStorage.setItem('schAdmin',JSON.stringify(r['data']))
  this.de = JSON.parse(localStorage.getItem('schAdmin')!)

    })
  }
}
