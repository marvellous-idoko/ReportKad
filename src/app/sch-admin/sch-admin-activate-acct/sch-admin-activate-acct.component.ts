import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchAdminService } from '../sch-admin.service';

@Component({
  selector: 'app-sch-admin-activate-acct',
  templateUrl: './sch-admin-activate-acct.component.html',
  styleUrls: ['./sch-admin-activate-acct.component.css']
})
export class SchAdminActivateAcctComponent implements OnInit {

  constructor(private act: ActivatedRoute, private s: SchAdminService,
    private r: Router,
    private fb: FormBuilder) { }
  id: string = '';
  ngOnInit(): void { }

  actAcctForm = this.fb.group({
    sName: [null, Validators.required],
    sMotto: [null, Validators.required],
    pwd: [null, Validators.required],
    address: [null, Validators.required],
    ActivationPin: [null, Validators.required],
    cPwd: [null, Validators.required]
  })

  actAcct() {
    if (this.actAcctForm.get('cPwd')?.value != this.actAcctForm.get('pwd')?.value) {
      alert('password mismatch')
    } else {
      this.actAcctForm.value['id'] = this.act.snapshot.paramMap.get('id')
      this.s.actAcct(this.actAcctForm.value)
        .subscribe((r: { [key: string]: any; }) => {
          if (r['code'] == 0) alert(r['msg'])
          else {
            localStorage.setItem('schAdmin',JSON.stringify(r['info']))
            alert(r['msg'])
            this.r.navigateByUrl('/School-Admin/dashboard')
          }
        })
    }
  }
}
