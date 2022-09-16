import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchAdminService } from '../sch-admin/sch-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private s: SchAdminService, private r: Router) { }
  loader = false
  ngOnInit(): void {
    this.checkLoggedIn()
  }
  LoginForm = this.fb.group({
    id: [null, Validators.required],
    pwd: [null, Validators.required],
    // subClass: [false, Validators.required],
  })
  login() {
    this.loader = true
    this.s.login(this.LoginForm.value)
      .subscribe((r: { [key: string]: any; }) => {
        this.loader = false
        if (r['code'] == 0) alert(r['msg'])
        else {
          alert('successfully signed in')
          localStorage.clear()
          localStorage.setItem('schAdmin', JSON.stringify(r['msg']))
          if (r['msg']['SchoolName']) {
            this.r.navigateByUrl('School-Admin')
          } else if (r['msg']['teacherID']) {
            this.r.navigateByUrl('School-Admin/teacher')

          } else if (r['msg']['name']) {
            this.r.navigateByUrl('School-Admin/student')

          }
        }
      })
  }

  checkLoggedIn() {
    if (JSON.parse(localStorage.getItem("schAdmin")!)){


      if (JSON.parse(localStorage.getItem("schAdmin")!)['schoolId']) {

        this.r.navigateByUrl('School-Admin')

      } else if (JSON.parse(localStorage.getItem("schAdmin")!)['teacherID']) {
        this.r.navigateByUrl('School-Admin/teacher')

      } else if (JSON.parse(localStorage.getItem("schAdmin")!)['id']) {
        this.r.navigateByUrl('School-Admin/student')

      } else {

      }
    } else {

    }
    // this.tchrId =  JSON.parse(localStorage.getItem("schAdmin")!)['teacherID']
    // this.stId = JSON.parse(localStorage.getItem("schAdmin")!)['id']
  }
}
