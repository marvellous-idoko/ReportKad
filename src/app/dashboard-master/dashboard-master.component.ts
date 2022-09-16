import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-master',
  templateUrl: './dashboard-master.component.html',
  styleUrls: ['./dashboard-master.component.css']
})
export class DashboardMasterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   let y = JSON.stringify({"_id":{"$oid":"62960fc3865fbfb58873efe9"},"dateCreated":{"$date":"2022-05-31T12:53:23.162Z"},"email":"infiniteflow.llp@gmail.com","schoolId":"516820","__v":13,"SchoolName":"YOUNG SHALL GROW","activated":true,"address":"SCHOOL","lastSubcribed":{"$date":"2022-06-11T10:49:06.409Z"},"pwd":"123456","schoolMotto":"WASA","subClasses":[[[],"JSS2 A"],"SSS1 A","SSS2 A","SSS3 A","JSS3 F","JSS2 A","JSS2 W","SSS3 Science"],"subscribed":true,"subjects":[null,"opo","biology","Agriculture"],"portal":true})
     localStorage.setItem("schAdmin",y)
  }

  goto(r:string){
    this.router.navigateByUrl("master/"+r)
  }
}
