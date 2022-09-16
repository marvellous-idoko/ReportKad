import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.css']
})
export class CreateAcountComponent implements OnInit {

  constructor(private fb:FormBuilder,  private s:MasterService, private r:Router) { }

  ngOnInit(): void {
  }
  regForm = this.fb.group({
    email: [null, Validators.required],
  })
  createSch(){
    this.s.createSch(this.regForm.get('email')?.value)
    .subscribe((r: { [key: string]: any; })=>{
      if(r['code'] == 0){
        alert('error creating account')
      }else{
        alert('Successfully created account, open email and activate account')
        this.r.navigateByUrl('dashboard')
      }
    })
  }
}
