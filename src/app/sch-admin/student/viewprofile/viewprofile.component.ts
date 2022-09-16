import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchAdminService } from '../../sch-admin.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css','../../teacher/results/results.component.css']
})
export class ViewprofileComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,private s:SchAdminService,private r:Router ) { }
  lo = JSON.parse(localStorage.getItem('schAdmin')!)
  ngOnInit(): void {
  }
  
  activ(w:string){  
    this.document.getElementById(w)!.classList.add('show')
    // if(h){
    //   console.log('si')

    // }
    // h?
    // h?.setAttribute('class','pol')

    // h[0].setAttribute('class','disp')
    // h[1].textContent = 'update'
    // h[0].setAttribute('class','disp')
    // h[1].setAttribute('class','disp')
    // h.item(0)!. setAttribute('class','disp')
    // h.item(1)!. setAttribute('class','disp')
    // h.item(2)!. setAttribute('class','disp')
  } 
  
  edit(name:string){
    var ty = this.document.getElementsByName(name) 
    var tg = <HTMLInputElement> ty[0]
     console.log( tg.value)
     this.s.updateInfo(tg.value,name)
     .subscribe((r: { [key: string]: any; }) => {
     alert(r['msg'])
     localStorage.clear
     localStorage.setItem('schAdmin',JSON.stringify(r['data']))

     this.r.navigateByUrl('School-Admin/student')

    })

    // this.s.editProf()
  }

}
