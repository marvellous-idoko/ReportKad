import { DOCUMENT,Location } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-sch-admin-update-teacher-info',
  templateUrl: './sch-admin-update-teacher-info.component.html',
  styleUrls: ['./sch-admin-update-teacher-info.component.css']
})
export class SchAdminUpdateTeacherInfoComponent implements OnInit {
  loader = false
  constructor(@Inject(DOCUMENT) private d:Document,private l:Location, private fb: FormBuilder, private s: SchAdminService, private r: Router) { }
  subjects: any
  htr = false; subClasses: any;
  ngOnInit(): void {
    this.loader = true
    this.s.getSubClasses().subscribe(r => {
      this.subClasses = r
      this.s.getSubjects().subscribe(r => {
        this.loader = false
        this.subjects = r
      })
    })
  }
  deleteUser(id:string):void{
    let y = confirm('are you sure you want to delete this user')
    if(y){
      this.s.deleteUser(id,'T')
      .subscribe((r: { [key: string]: any; })=>{
        alert(r['msg'])
        this.l.back()
      })
    }else{
      return
    }
  }
det:any 
  submitDet(){
    this.loader = true
    let yu: any = this.d.getElementById('frm')
    this.s.getTchrDet( yu.value).subscribe(r=>{
      this.loader = false
      if(r==null){
        alert('user not found')
      }else{
        this.htr = true
        this.det = r
      }

    })
  }
  addTechForm = this.fb.group({
    name: [null, Validators.required],
    class: [null, Validators.required],
    // subClass: [false, Validators.required],
  })
  classes = [
    { className: "JSS1", classVal: "1" },
    { className: "JSS2", classVal: "2" },
    { className: "JSS3", classVal: "3" },
    { className: "SSS1", classVal: "4" },
    { className: "SSS2", classVal: "5" },
    { className: "SSS3", classVal: "6" }
  ]
  clickedSubjects: string[] = []
  clickedSubClass: string[] = []
  addSubClass(subClass: string) {
    if (this.clickedSubClass.includes(subClass)) {
      let y = this.clickedSubClass.indexOf(subClass)
      this.clickedSubClass.splice(y, 1)

    }else{
      this.clickedSubClass.push(subClass)
    }
  }
  addSubjects(subject: string) {
    if (this.clickedSubjects.includes(subject)) {
      let yr = this.clickedSubjects.indexOf(subject)
      this.clickedSubjects.splice(yr, 1)
    }else{
      this.clickedSubjects.push(subject)
    }
  }
 
  nTeacher: teacher = {}
  submit() {
     let  clasx:any = this.d.getElementById('clasx');
     let  name:any = this.d.getElementById('name')
    this.nTeacher.personaleDet = {name:name.value,class:clasx.value}
    this.nTeacher.subjects = this.clickedSubjects
    if(this.clickedSubjects.length == 0){
      this.nTeacher.subjects = this.det['subject']
    }else{
      this.nTeacher.subjects = this.clickedSubjects
    }
    if(this.clickedSubClass.length == 0){
      this.nTeacher.subClass = this.det['subClass']
    }else{
      this.nTeacher.subClass = this.clickedSubClass
    }
    this.nTeacher.schId = this.s.id
    this.nTeacher.teacherId = this.det.teacherID
    this.loader = true
    this.s.updateTeacher(this.nTeacher)
      .subscribe((r: { [key: string]: any; }) => {
        this.loader = false
        if (r['code'] == 0) alert('error adding teacher')
        else {
          this.addTechForm.reset
          this.r.navigateByUrl('School-Admin')
          alert(r['msg'])
        }
      })
  }


}

interface teacher {
  personaleDet?: {},
  schId?: string,
  subjects?: string[];
  subClass?: string[];
  teacherId?:string;
}

