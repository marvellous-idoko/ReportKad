import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchAdminService } from '../../sch-admin.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private s: SchAdminService, private r: Router, private act: ActivatedRoute) { }
  students = []
  subj :any
  techr: any
  g = false
  loader = false
  sessionValue = ''
  termValue = ''
  ngOnInit(): void {
this.getSubjects();this.techr = JSON.parse(localStorage.getItem('schAdmin')!)
  }
  gh: Boolean = false
  getStudents() {
    this.loader = true
    this.s.getStudents(this.act.snapshot.params['id'])
      .subscribe((r: { [key: string]: any; }) => {
        this.loader = false
        this.gh = true
        this.g = false
        if (r['code'] == 1) {
          this.students = r['data']
        }
      })
  }
  getSubjects(){
    this.s.getTchrSubject()
    .subscribe(r=>this.subj = r)
  }
  sumbitRe(stdId: string) {
    this.loader = true
    let frm = <any>this.document.getElementsByClassName(stdId)
    let saed = {
      session: this.sessionValue,
      term: this.termValue,
      tscr: frm!.item(2)?.value,
      escr: frm!.item(3)?.value,
      tot: frm!.item(4)?.value,
      grd: frm!.item(5)?.value,
      subject: this.subj[0],
      schId: this.techr.schId,
      updateBy: this.techr.name,
      class: this.techr.class,
      subclass: this.techr.subClass[0],
      stId: stdId,
    }
    let l = Object.values(saed)
    for (let index = 0; index < l.length; index++) {
       if (l[index] == null) {
        this.loader = false
        alert('result not properly filled')
        return
      }
    }
    // Object.keys(saed)
    this.s.submitRe(saed)
      .subscribe((r: { [key: string]: any; }) => {
    this.loader = false
    if (r['code'] == 1) {
          alert(r['msg'])
          frm.item(6)!.innerHTML = 'submited'
          frm.item(6)!.setAttribute('disabled','true') 
          frm.item(6)!.classList.add('green')
        } else {
          alert(r['msg'])
        }
      })

  }
  getF = this.fb.group({
    term: [null, Validators.required],
    session: [null, Validators.required],
    subject: [null, Validators.required]
  })
  currSubj = ''
  check() {
    if (parseInt(this.getF.value['session'].slice(0,3)) > new Date().getFullYear()) {
      alert('The session has not started' )
      return
  }
    this.loader = true
    this.currSubj = this.getF.value['subject']
  this.sessionValue = this.getF.value['session']
  this.termValue = this.getF.value['term']
    this.getF.value['class'] = this.techr['class']
    // this.getF.value['subject'] = this.techr['subject'][0]
    this.getF.value['subclass'] = this.act.snapshot.params['id']
    this.getF.value['lastUpdatedBy'] = this.techr['name']
    this.getF.value['schId']=this.techr['schId']
    console.log(this.getF.value)
    this.s.checkStdts(this.getF.value).
      subscribe((r: any) => {
        this.getF.reset()
        this.loader = false
        if (r.length === 0) {
          this.getStudents()
        } else {
          var t = confirm('you have aleady published this results, do you want to update it')
          if (t == true) {
            this.g = true
            this.gh = false
            console.log
            this.students = r
          } else if(t == false) {
            this.g = false
            this.gh = false
          }
        }
      })

  }
  
}
