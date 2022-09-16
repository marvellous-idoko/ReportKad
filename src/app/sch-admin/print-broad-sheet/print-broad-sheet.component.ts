import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SchAdminService } from '../sch-admin.service';
@Component({
  selector: 'app-print-broad-sheet',
  templateUrl: './print-broad-sheet.component.html',
  styleUrls: ['./print-broad-sheet.component.css','../teacher/results/results.component.css']
})
export class PrintBroadSheetComponent implements OnInit {
  constructor(private fb:FormBuilder, private s:SchAdminService) { }
  loader=false
  gyh = false
  subClasses:any;subjects:any;results:any

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

  frm = this.fb.group({
    session: [null, Validators.required],
    term: [null, Validators.required],
    class: [null, Validators.required],
    subject: [null, Validators.required],
    subclass: [null, Validators.required],
    
    })
    getResults(){
      this.loader = true
      if(parseInt(this.frm.value.session.slice(5)) > new Date().getFullYear()){
        alert('This session has not started')
        this.loader = false
      }else{
        this.s.getBrdSht(this.frm.value).
        subscribe((r:any)=>{
          console.log(r)
          this.loader = false
          if(r.length == 0){
            alert('No record found')
          }
          else{
            this.results = r
            this.gyh = true
          }
        })
        // console.log(this.frm.value)
      }
    }
}
