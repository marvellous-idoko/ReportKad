import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterComponent } from './master/master.component';
import { SideNavMasterComponent } from './side-nav-master/side-nav-master.component';
import { NavMastersterComponent } from './nav-masterster/nav-masterster.component';
import { DashboardMasterComponent } from './dashboard-master/dashboard-master.component';
import {MatButtonModule} from '@angular/material/button';
import { MatRadioModule} from '@angular/material/radio'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { CreateAcountComponent } from './create-acount/create-acount.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SchAdminComponent } from './sch-admin/sch-admin.component';
import { SchAdminSideNavComponent } from './sch-admin/sch-admin-side-nav/sch-admin-side-nav.component';
import { SchAdminMainComponent } from './sch-admin/sch-admin-main/sch-admin-main.component';
import { SchAdminDboardComponent } from './sch-admin/sch-admin-dboard/sch-admin-dboard.component';
import { AddTeacherComponent } from './sch-admin/add-teacher/add-teacher.component';
import { AddStudentComponent } from './sch-admin/add-student/add-student.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { SchAdminAddSubclassComponent } from './sch-admin/sch-admin-add-subclass/sch-admin-add-subclass.component';
import { SchAdminActivateAcctComponent } from './sch-admin/sch-admin-activate-acct/sch-admin-activate-acct.component';
import { SchAdminAddSubjectComponent } from './sch-admin/sch-admin-add-subject/sch-admin-add-subject.component';
import { SchAdminUpdateTeacherInfoComponent } from './sch-admin/sch-admin-update-teacher-info/sch-admin-update-teacher-info.component';
import { SchAdminUpdateStudentInfoComponent } from './sch-admin/sch-admin-update-student-info/sch-admin-update-student-info.component';
import { SchAdminAddStudentComponent } from './sch-admin/sch-admin-add-student/sch-admin-add-student.component';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './sch-admin/teacher/teacher.component';
import { StudentComponent } from './sch-admin/student/student.component';
import { ResultsComponent } from './sch-admin/teacher/results/results.component';
import { ResultComponent } from './sch-admin/student/result/result.component';
import { ViewprofileComponent } from './sch-admin/student/viewprofile/viewprofile.component';
import { PromoteStdntComponent } from './sch-admin/promote-stdnt/promote-stdnt.component';
import { CreatePinMstrComponent } from './create-pin-mstr/create-pin-mstr.component';

import { Angular4PaystackModule } from 'angular4-paystack';
import { PinComponent } from './sch-admin/student/pin/pin.component';
import { UpdateTeacherInfoComponent } from './sch-admin/update-teacher-info/update-teacher-info.component';
import { UpdateStudentInfoComponent } from './sch-admin/update-student-info/update-student-info.component';
import { PrintResultComponent } from './print-result/print-result.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { GetPinsComponent } from './sch-admin/student/get-pins/get-pins.component';
import { PrintBroadSheetComponent } from './sch-admin/print-broad-sheet/print-broad-sheet.component';
import { ViewListComponent } from './sch-admin/view-list/view-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    SideNavMasterComponent,
    NavMastersterComponent,
    DashboardMasterComponent,
    CreateAcountComponent,
    SchAdminComponent,
    SchAdminSideNavComponent,
    SchAdminMainComponent,
    SchAdminDboardComponent,
    AddTeacherComponent,
    AddStudentComponent,
    SchAdminAddSubclassComponent,
    SchAdminActivateAcctComponent,
    SchAdminAddSubjectComponent,
    SchAdminUpdateTeacherInfoComponent,
    SchAdminUpdateStudentInfoComponent,
    SchAdminAddStudentComponent,
    LoginComponent,
    TeacherComponent,
    StudentComponent,
    ResultsComponent,
    ResultComponent,
    ViewprofileComponent,
    PromoteStdntComponent,
    CreatePinMstrComponent,
    PinComponent,
    UpdateTeacherInfoComponent,
    UpdateStudentInfoComponent,
    PrintResultComponent,
    ResetPwdComponent,
    GetPinsComponent,
    PrintBroadSheetComponent,
    ViewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    // MatRadioModule,
    MatSelectModule,
    // Angular4PaystackModule.forRoot('pk_test_c5bc80647b60c1bf05f3f6fdac32a99f82b598ce'),
    Angular4PaystackModule.forRoot('pk_live_10dfaf3fd6d08ffef3247b28306e269ed3e220ce'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
