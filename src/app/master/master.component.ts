import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit(): void {
    // this.r.navigateByUrl('master/dashboard')
  }

}
