import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private fb: FormBuilder, private s: SchAdminService, private r: Router) { }
  subClasses !:any
  loader = false
  photo !:File
  ngOnInit(): void {
    this.fh()
  }
  fh(){
    this.loader = true
    this.s.getSubClasses().subscribe((r: { [key: string]: any; })=>{
      this.loader = false
      this.subClasses = r
    })
  }
  gth?:Boolean
  clickd(event:any) {
    this.gth = true
    this.photo = event.target.files[0];
  }
  addStdntForm = this.fb.group({
    name: [null, Validators.required],
    class: [null, Validators.required],
    subClass: [null, Validators.required],
    DoB: [null, Validators.required],
    sex: [null, Validators.required],
    pCont: [null, Validators.required],
    bGrp: [null],
    weight: [null],
    height: [null],

  })

  classes = [
    { className: "JSS1", classVal: "1" },
    { className: "JSS2", classVal: "2" },
    { className: "JSS3", classVal: "3" },
    { className: "SSS1", classVal: "4" },
    { className: "SSS2", classVal: "5" },
    { className: "SSS3", classVal: "6" }
  ]
  submit(){
    this.loader = true

    let jk = new FormData()
    console.log(this.addStdntForm.value)
    jk.append('formInfo',JSON.stringify(this.addStdntForm.value))
    // console.log(jk.get('formInfo'))
    jk.append('photo',this.photo)
    this.s.addStdt(jk)
    .subscribe((r: { [key: string]: any; })=>{
      this.loader = false
      if(r['code']==0)alert(r['msg'])
      else{
        alert(r['msg'])
        this.r.navigateByUrl('School-Admin/dashboard')
      }
    })
  }
}

