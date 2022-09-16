import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-sch-admin-add-subclass',
  templateUrl: './sch-admin-add-subclass.component.html',
  styleUrls: ['./sch-admin-add-subclass.component.css']
})
export class SchAdminAddSubclassComponent implements OnInit {

  constructor(private fb: FormBuilder, private s: SchAdminService, private r: Router) { }

  ngOnInit(): void {
  }
  loader = false
  addSubClassForm = this.fb.group({
    cName: [null, Validators.required],
    class: [null, Validators.required],
    // subClass: [false, Validators.required],
  })
    classes = [
    { className: "JSS1"  },
    { className: "JSS2" },
    { className: "JSS3"  },
    { className: "SSS1" },
    { className: "SSS2" },
    { className: "SSS3" }
  ]
  addSubClass(){
    this.loader  = true
    this.s.addSubClass( this.addSubClassForm.get('class')!.value + " " + this.addSubClassForm.get('cName')!.value)
    .subscribe((r: { [key: string]: any; })=>{
      if(r['code']==0)alert('error adding sub class')
      else{
    this.loader  = false

        alert('successfully added sub class')
      }
    })
}

}
