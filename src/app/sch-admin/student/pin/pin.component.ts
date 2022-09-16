import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SchAdminService } from '../../sch-admin.service';
import { PaystackOptions } from 'angular4-paystack';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private s: SchAdminService, private fb: FormBuilder) { }

  amt = 3000
  ref = 'jvbj'
loader = false

  options: PaystackOptions = {
    amount: 100000,
    email: 'user@mail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }

  frm = this.fb.group({
    id: [null, Validators.required],
  })
  ngOnInit(): void {
    console.log(this.options.ref + ' onitnt')
  }
  ty: Boolean = false;
  checkId() {
    this.ty = true
    this.s.checkStdntId(this.frm.value['id'])
      .subscribe((r: { [key: string]: any; }) => {
       console.log(r)
        if (r['code'] === 0) {
          alert('unable to find student id')
        } else {
          this.ty = false
          this.document.getElementById('bthn')?.removeAttribute('disabled')
          alert('Account confirmed')
        }
      })
  }
  paymentCancel() {
    alert('you cancelled the payment')
  }
  pin!: string
  paymentDone(ad: {}) {
    this.frm.value['pymtDet'] = ad
    this.loader = true
    this.s.createPinStdnt()
      .subscribe((r: { [key: string]: any; }) => {
        this.loader = false
        this.pin = r['msg']['value']
      })
  }
  paymentInit() {
    console.log('ndk')
  }

}
