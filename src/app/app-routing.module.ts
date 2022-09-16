import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAcountComponent } from './create-acount/create-acount.component';
import { DashboardMasterComponent } from './dashboard-master/dashboard-master.component';
import { MasterComponent } from './master/master.component';
import { AddTeacherComponent } from './sch-admin/add-teacher/add-teacher.component';
import { AddStudentComponent } from './sch-admin/add-student/add-student.component';
import { SchAdminActivateAcctComponent } from './sch-admin/sch-admin-activate-acct/sch-admin-activate-acct.component';
import { SchAdminAddStudentComponent } from './sch-admin/sch-admin-add-student/sch-admin-add-student.component';
import { SchAdminAddSubclassComponent } from './sch-admin/sch-admin-add-subclass/sch-admin-add-subclass.component';
import { SchAdminAddSubjectComponent } from './sch-admin/sch-admin-add-subject/sch-admin-add-subject.component';
import { SchAdminDboardComponent } from './sch-admin/sch-admin-dboard/sch-admin-dboard.component';
import { SchAdminUpdateStudentInfoComponent } from './sch-admin/sch-admin-update-student-info/sch-admin-update-student-info.component';
import { SchAdminUpdateTeacherInfoComponent } from './sch-admin/sch-admin-update-teacher-info/sch-admin-update-teacher-info.component';
import { SchAdminComponent } from './sch-admin/sch-admin.component';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './sch-admin/teacher/teacher.component';
import { ResultsComponent } from './sch-admin/teacher/results/results.component';
import { StudentComponent } from './sch-admin/student/student.component';
import { ResultComponent } from './sch-admin/student/result/result.component';
import { ViewprofileComponent } from './sch-admin/student/viewprofile/viewprofile.component';
import { PromoteStdntComponent } from './sch-admin/promote-stdnt/promote-stdnt.component';
import { CreatePinMstrComponent } from './create-pin-mstr/create-pin-mstr.component';
import { PinComponent } from './sch-admin/student/pin/pin.component';
import { PrintResultComponent } from './print-result/print-result.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { GetPinsComponent } from './sch-admin/student/get-pins/get-pins.component';
import { PrintBroadSheetComponent } from './sch-admin/print-broad-sheet/print-broad-sheet.component';
import { ViewListComponent } from './sch-admin/view-list/view-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  {path:'resetPwd',component:ResetPwdComponent},
  {path:'resetPwd/:id',component:ResetPwdComponent},

  {
    path: 'master', component: MasterComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardMasterComponent },
      { path: 'createPin', component: CreatePinMstrComponent },
    // { path: 'resolve-issues', component:  },
      { path: 'newSchool', component: CreateAcountComponent },

    ]
  },
  { path: 'printResult',
  // outlet: 'print',
  component: PrintResultComponent
},
  { path: 'School-Admin', component: SchAdminComponent,children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: SchAdminDboardComponent },
    { path: 'AddTeacher', component: AddTeacherComponent },
    { path: 'AddSubClass', component: SchAdminAddSubclassComponent },
    { path: 'AddSubject', component: SchAdminAddSubjectComponent },
    { path: 'AddStudent', component: AddStudentComponent },
    { path: 'updateStudentInfo', component: SchAdminUpdateStudentInfoComponent },
    { path: 'updateTeacherInfo', component: SchAdminUpdateTeacherInfoComponent },
    { path: 'actAcct/:id', component: SchAdminActivateAcctComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: 'student', component: StudentComponent ,},
    { path: 'viewResult', component: ResultComponent },
    { path: 'promoteStdnt', component: PromoteStdntComponent },
    { path: 'viewProfile', component: ViewprofileComponent },
    { path: 'getPin', component: PinComponent },
    { path: 'getStdntPins', component: GetPinsComponent },
    {path:'results/:id',component:ResultsComponent},
    {path:'viewList/:type',component:ViewListComponent},
    {path:'printBroadSheet',component:PrintBroadSheetComponent},
  ] 
},
{path:'School-Admin/actAcct/:id', component:SchAdminActivateAcctComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
