import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-sch-admin-add-subject',
  templateUrl: './sch-admin-add-subject.component.html',
  styleUrls: ['./sch-admin-add-subject.component.css']
})
export class SchAdminAddSubjectComponent implements OnInit {

  constructor(private fb: FormBuilder, private s: SchAdminService, private r: Router) { }

  ngOnInit(): void {
  }

  
  addSubjForm = this.fb.group({
    Subjt: [null, Validators.required]
  })

  submit(){
    this.s.addSubj(this.addSubjForm.value)
    .subscribe((r: { [key: string]: any; })=>{
      if(r['code']==0){
        alert('erroe!')
      }else{
        alert('done')
        this.r.navigateByUrl('/School-Admin/dashboard')
      }
    })
  }

}
