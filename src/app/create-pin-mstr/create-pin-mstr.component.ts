import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaystackOptions } from 'angular4-paystack';
import { SchAdminService } from '../sch-admin/sch-admin.service';

@Component({
  selector: 'app-create-pin-mstr',
  templateUrl: './create-pin-mstr.component.html',
  styleUrls: ['./create-pin-mstr.component.css']
})
export class CreatePinMstrComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document:Document, private s:SchAdminService,private fb:FormBuilder) { }
  amt=3000
  ref='jvbj'


  options: PaystackOptions = {
    amount: 500,
    email: 'user@mail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }
  
frm = this.fb.group({
  id: [null, Validators.required],
})
  ngOnInit(): void {
  }
  ty:Boolean = false;
  checkId(){
    this.ty = true
    this.s.checkSchId(this.frm.value['id'])
    .subscribe((r: { [key: string]: any; })=>{
      if( r['code']===0){
        
        alert('unable to find school')
      }else{
    this.ty = false

        this.document.getElementById('bthn')?.removeAttribute('disabled')
        alert('Account confirmed')
      }
    })
  }
  paymentCancel(){
    alert('you cancelled the payment')
  }
  pin!:string
  paymentDone(ad:{}){
    this.frm.value['pymtDet'] = ad
    this.s.createPin(this.frm.value)
    .subscribe((r: { [key: string]: any; })=>{
      this.pin = r['msg']['value']
    })
  }
  paymentInit(){
    console.log('ndk')
  }
}

