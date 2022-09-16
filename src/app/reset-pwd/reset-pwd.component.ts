import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchAdminService } from '../sch-admin/sch-admin.service';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  constructor(private fb:FormBuilder,private r:Router, private s:SchAdminService, private act:ActivatedRoute) { }
  loader = false
  show = false
  ngOnInit(): void {
   if(this.act.snapshot.paramMap.get('id')){
   
    this.show = true
  }else{
    this.show = false

   }
  }
  rstfrm =  this.fb.group({
    id:[null]
  })
  
  rstfrmNw =  this.fb.group({
    pwd:[null],
    cfrm:[null]
  })
  setNwPwd(){
    if (this.rstfrmNw.get('pwd')?.value != this.rstfrmNw.get('cfrm')?.value){
      alert('password mismatch')
      return;
    }   else{
    this.loader = true

      this.s.setNwPwd(this.rstfrmNw.get('pwd')?.value, this.act.snapshot.paramMap.get('id')).
      subscribe((r:{[key:string]:any;})=>{
    this.loader = false
       
        if(r['code']=0){
          alert('unable to save paasword currently')
        }else{
          this.r.navigateByUrl('login')
          alert('successfully saved password')
        }
      })
    }
  }
  puts(){
    this.loader = true
    console.log(this.rstfrm.value['id'])
    this.s.getRstDet(this.rstfrm.value['id'])
    .subscribe((r:{[key:string]:any;})=>{
      this.loader = false
      if(r['code']==0){
        alert('account not found')
      }else{
        alert('got ur mail')
      }
    })
  }
}
