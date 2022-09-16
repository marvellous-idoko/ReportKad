import { Component, OnInit } from '@angular/core';
import { SchAdminService } from '../../sch-admin.service';

@Component({
  selector: 'app-get-pins',
  templateUrl: './get-pins.component.html',
  styleUrls: ['./get-pins.component.css']
})
export class GetPinsComponent implements OnInit {

  constructor(private s:SchAdminService) { }
  pins:any
  loader = true
  ngOnInit(): void {
  this.s.getStdntPins().
    subscribe((r:{[key:string]:any})=>{
      this.loader = false
      if(r['length'] == 0){
        alert('you have no pins yet, kindly proceed to purchase pin')
      }else this.pins = r
    })
  }

}
