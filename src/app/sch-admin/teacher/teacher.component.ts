import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  classes!: []
  constructor(private fb: FormBuilder, private s: SchAdminService, private r: Router, private act: ActivatedRoute) { }
     lo = JSON.parse(localStorage.getItem('schAdmin')!)
    loader = false
  ngOnInit(): void {
    this.getClasses()
  }

  getClasses() {
    this.loader= true
    // let lo = JSON.parse(localStorage.getItem('schAdmin')!)
    this.s.getTchrSubClasses()
      .subscribe((r: { [key: string]: any; }) => {
       this.loader = false
        this.classes = r['subClass']
      })
  }
  getStudents(st:any){
   this.r.navigateByUrl('/School-Admin/results/'+st)
  //  this.r.navigateByUrl('/School-Admin/results/123')
    // this.s.getStudents(st)
  }
}
