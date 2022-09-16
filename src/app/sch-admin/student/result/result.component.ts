import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SchAdminService } from '../../sch-admin.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css', '../../teacher/results/results.component.css']
})
export class ResultComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,private fb:FormBuilder, private s: SchAdminService) { }

  ngOnInit(): void {
  }
  
frm = this.fb.group({
  session: [null, Validators.required],
  term: [null, Validators.required],
  pin: [null, Validators.required],
  })
 results:any;
 loader=false
 show=false
  sub() {
    this.loader = true
    this.s.getResult(this.frm.value)
      .subscribe((r: { [key: string]: any; }) => {
       this.loader = false
       this.show= true
        if(r['code']==0){
        alert(r['msg'])
      }else{
        this.results = r
        this.s.printRes = r

       }
      })
  }
}
