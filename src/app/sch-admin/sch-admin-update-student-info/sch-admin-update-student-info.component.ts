import { DOCUMENT,Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-sch-admin-update-student-info',
  templateUrl: './sch-admin-update-student-info.component.html',
  styleUrls: ['./sch-admin-update-student-info.component.css']
})
export class SchAdminUpdateStudentInfoComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private d:Document, private l:Location, private fb: FormBuilder, private s: SchAdminService, private r: Router) { }
  det:any
  addStdntForm = this.fb.group({
    name: ['', Validators.required],
    class: [null, Validators.required],
    subClass: [null, Validators.required],
    DoB: [null, Validators.required],
    sex: [null, Validators.required],
    pCont: [null, Validators.required],
    bGrp: [null],
    weight: [null],
    height: [null],

  })

  
 subClasses !:any
  loader = false
  photo !:File
  ngOnInit(): void {
    this.fh()
  }
  fh(){
    this.loader = true
    this.s.getSubClasses().subscribe(r=>{
      this.loader = false
      this.subClasses = r
      console.log(this.subClasses)
    })
  }

  
  deleteUser(id:string):void{
    let y = confirm('are you sure you want to delete this user')
    if(y){
      this.s.deleteUser(id,'S')
      .subscribe((r: { [key: string]: any; })=>{
        alert(r['msg'])
        this.l.back()
      })
    }else{
      return
    }
  }
  gth?:Boolean
  clickd(event:any) {
    this.gth = true
    this.photo = event.target.files[0];
  }
  htr = false
  submitDet(){
    this.loader = true
    let yu: any = this.d.getElementById('frm')
    this.s.getStdntDet( yu.value).subscribe(r=>{
      this.loader = false
      if(r==null){
        alert('user not found')
      }else{

        this.htr = true
        this.det = r
        this.addStdntForm.get('name')?.setValue(this.det['name'])
        this.addStdntForm.get('class')?.setValue(this.det['class'])
        this.addStdntForm.get('subClass')?.setValue(this.det['subclass'])
        this.addStdntForm.get('pCont')?.setValue(this.det['contact'])
        this.addStdntForm.get('weight')?.setValue(this.det['weight'])
        this.addStdntForm.get('height')?.setValue(this.det['height'])
        this.addStdntForm.get('DoB')?.setValue(this.det['DoB'])
        this.addStdntForm.get('sex')?.setValue(this.det['sex'])
        this.addStdntForm.get('bGrp')?.setValue(this.det['bGrp'])
      }
    })
  }
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
    console.log(this.photo)
    jk.append('formInfo',JSON.stringify(this.addStdntForm.value))
    // console.log(jk.get('formInfo'))
    jk.append('photo',this.photo)
    jk.append('stId',this.det['id'])
    this.s.updtStdt(jk)
    .subscribe((r: { [key: string]: any; })=>{
      this.loader = false
      if(r['code']==0)alert(r['msg'])
      else{
        alert(r['msg'])
      }
    })
  }

}
