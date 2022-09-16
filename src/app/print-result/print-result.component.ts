import { Component, OnInit } from '@angular/core';
import { SchAdminService } from '../sch-admin/sch-admin.service';

@Component({
  selector: 'app-print-result',
  templateUrl: './print-result.component.html',
  styleUrls: ['./print-result.component.css','../sch-admin/teacher/results/results.component.css']
})
export class PrintResultComponent implements OnInit {

  constructor( public s:SchAdminService) { }
  stdntAvg:any
  classAvg:any
  position:any
  ngOnInit(): void {  
    this.s.getStdntAvg().subscribe(r=>{
      this.stdntAvg  = r
    })
    this.s.getClassAvg().subscribe(r=>{
      this.classAvg  = r
    })
    
    this.s.getStdntPos().subscribe(r=>{
      this.position  = r
    })
    
  }

  print(){
    window.print()
  }
}
