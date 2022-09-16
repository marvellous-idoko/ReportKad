import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})


export class AddTeacherComponent implements OnInit {
  loader = false
  constructor(private fb: FormBuilder, private s: SchAdminService, private r: Router) { }

  subjects: any
  // subClasses=new Subject<any[]>();
  subClasses: any;
  ngOnInit(): void {
    this.loader = true
    this.s.getSubClasses().subscribe(r => {
      this.loader = false
      this.subClasses = r
    })
    this.s.getSubjects().subscribe(r => {
      this.loader = false
      this.subjects = r
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
  } nTeacher: teacher = {}
  submit() {

    this.nTeacher.personaleDet = this.addTechForm.value;
    this.nTeacher.subjects = this.clickedSubjects
    this.nTeacher.subClass = this.clickedSubClass
    this.nTeacher.schId = this.s.id
    this.loader = true
    this.s.addTeacher(this.nTeacher)
      .subscribe((r: { [key: string]: any; }) => {

        this.loader = false
        if (r['code'] == 0) alert('error adding teacher')
        else {
          this.addTechForm.reset
          this.r.navigateByUrl('School-Admin/dashboard')
          this.clickedSubClass = []
          this.clickedSubjects = []
          alert(r['msg'])
        }
      })
  }
  ngOnDestroy() {
    this.clickedSubClass = []
    this.clickedSubjects = []
  }

}



interface teacher {
  personaleDet?: {},
  schId?: string,
  subjects?: string[];
  subClass?: string[];
}