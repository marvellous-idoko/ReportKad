import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private fb: FormBuilder, private s: SchAdminService, private r: Router) { }
  lo = JSON.parse(localStorage.getItem('schAdmin')!)

  ngOnInit(): void {
  
  }
  
}
