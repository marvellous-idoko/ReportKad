import { Component, OnInit } from '@angular/core';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-promote-stdnt',
  templateUrl: './promote-stdnt.component.html',
  styleUrls: ['./promote-stdnt.component.css']
})
export class PromoteStdntComponent implements OnInit {

  constructor(private s:SchAdminService) { }

  ngOnInit(): void {
  }
  stdnts:any
  session = ''
pro(gh:any){
  this.session = gh
  this.s.promote(gh)
  .subscribe((r:{[key:string]:any}) =>{
    if(r['code']==0){
      alert(r['msg'])
    }else{
      this.stdnts = r
    }
  })
}
promoteSingle(id:string){
  this.s.promoteSingleStdnt(id,this.session).
  subscribe((r:{[key:string]:any})=>{
    if(r['code']==0){
      alert(r['msg'])
    }else{
      alert(r['msg'])
    }
  })
}
}
