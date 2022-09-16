import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css','../teacher/results/results.component.css']
})
export class ViewListComponent implements OnInit {

  constructor( private act:ActivatedRoute,private s:SchAdminService) { }

  ngOnInit(): void {
    this.getList()
  }
  delete(s:string,type:string){
   let ki = confirm("Are you sure you want to delete user")
    if(!ki) return;
    this.s.deleteUser(s,type)
    .subscribe((r:{[key:string]:any})=>{
      if(r['code']==1)
      {alert('successfully deleted user')
    this.getList()
    }else alert('error occurred while deleting user')
    })
  }
  loader = true
  stdnt = false
  tchr = false
  list :any;
getList(){
  if(this.act.snapshot.params['type'] == 'S'){
    this.s.getList('S').
    subscribe((r:{[key:string]:any})=>{
      this.loader = false
      this.stdnt = true
      this.list = r
    })
  }
  else if(this.act.snapshot.params['type'] == 'T'){
    this.s.getList('T').
    subscribe((r:{[key:string]:any})=>{
      this.loader = false
      this.tchr = true
      this.list = r
    })
  }
}

}
