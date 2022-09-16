import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchAdminService {
  printRes : any
  gdsg = 'https://voyage-chaise-91976.herokuapp.com/' 
 
  server = 'http://localhost:3000/schAdmin/';
  auth = 'http://localhost:3000/auth/';
  techr = 'http://localhost:3000/teacher/';
  result = 'http://localhost:3000/result/';

  // server = this.gdsg+ 'schAdmin/';
  // auth = this.gdsg+'auth/';
  // techr = this.gdsg+'teacher/';
  // result = this.gdsg+'result/';

  headers = new HttpHeaders()

  constructor(private Http: HttpClient) {
    this.headers.append('Content-Type', 'applicatiion/json');
  }
nh : { [key: string]: string; } = {
  one:'contact',
  two:'weight',
  three:'height',
  four:'subclass'
}
entObj:any
id :any
tchrId:any 
stId:any
setterN(){
  this.entObj = JSON.parse(localStorage.getItem('schAdmin')!)
  this.id =  JSON.parse( localStorage.getItem("schAdmin")!)['schoolId']
  this.tchrId =  JSON.parse(localStorage.getItem("schAdmin")!)['teacherID']
  this.stId = JSON.parse(localStorage.getItem("schAdmin")!)['id']
}
getList(s:string){
  this.setterN()
  return this.Http.get(this.server+ `getList?schId=${this.id}&type=${s}`,{headers:this.headers})
}
createPin(hty:any){
 return this.Http.post('http://localhost:3000/pin/create',hty,{headers:this.headers})
//  return this.Http.post(this.gdsg+'pin/create',hty,{headers:this.headers})
}
deleteUser(id:string,userType:string){
  return this.Http.delete(this.server + 'deleteUser?id='+id+'&userType='+userType,{headers:this.headers})
}
getBrdSht(data:{[key:string]:string}):any{
  this.setterN()
  return this.Http.get(this.result + 
    `getBrdSht/?schId=${this.id}&session=${data['session']}&class=${data['class']}&term=${data['term']}&subclass=${data['subclass']}&subject=${data['subject']}`,{headers:this.headers})
}
getStdntPins(){
  this.setterN()
  return this.Http.get(this.server + 'stdntPins/'+this.stId,{headers:this.headers})
}
promoteSingleStdnt(id:string,session:string){
 return this.Http.post(this.server+"promoteSingleStdnt",{session:session,id:id,schId:this.id},{headers:this.headers})
}
setNwPwd(pwd:string,id:any){
  this.setterN()
 return this.Http.post('http://localhost:3000/mstr/createNewPwd',{pwd:pwd,id:id},{headers:this.headers})
//  return this.Http.post(this.gdsg+'mstr/createNewPwd',{pwd:pwd,id:id},{headers:this.headers})

}

getStdntAvg(){
  return this.Http.get(this.result+ 'stdntAvg/'+this.stId+'/'+this.entObj['schId']+'/'+this.printRes[0]['term']+'/'+this.printRes[0]['session'],{headers:this.headers})
}
getStdntPos(){
  return this.Http.get(this.result+ 'stdntPosition/'+this.stId+'/'+this.entObj['schId']+'/'
  +this.printRes[0]['term']+'/'+this.entObj['class']+'/'+this.entObj['subclass']+'/'+this.printRes[0]['session'],{headers:this.headers})

}
getClassAvg(){
  console.log(this.printRes[0])
  return this.Http.get(this.result+ 'classAvg/'+this.stId+'/'+this.entObj['schId']+'/'+this.printRes[0]['term']+'/'
  +this.entObj['class']+'/'+this.entObj['subclass']+'/'  +this.printRes[0]['session'],{headers:this.headers})
}

getRstDet(id:string){
  return this.Http.get('http://localhost:3000/mstr/getRstDet/'+id,{headers:this.headers})
  // return this.Http.get(this.gdsg+'mstr/getRstDet/'+id,{headers:this.headers})
}
getTchrDet(id:string){
  return this.Http.get(this.server+'tchrDet/'+id,{headers:this.headers})
}
getStdntDet(id:string){
  return this.Http.get(this.server+'stdntDet/'+id,{headers:this.headers})
}
createPinStdnt(){
  this.setterN()
  let hty = {
    id:this.stId,
    noOfT:3
  }
 return this.Http.post('http://localhost:3000/pin/create',hty,{headers:this.headers})
  //  return this.Http.post(this.gdsg+'pin/create',hty,{headers:this.headers})
  }
checkSchId(id:String){
  this.setterN()
  return this.Http.get('http://localhost:3000/mstr/checkSchId/'+id,{headers:this.headers})
  // return this.Http.get(this.gdsg+'mstr/checkSchId/'+id,{headers:this.headers})
}
checkStdntId(id:String){
  this.setterN()
  return this.Http.get('http://localhost:3000/mstr/checkStdntId/'+this.stId,{headers:this.headers})
  // return this.Http.get(this.gdsg+'mstr/checkStdntId/'+this.stId,{headers:this.headers})
}

  login(det:{}){
    return this.Http.post(this.auth + 'login',det, { headers: this.headers })
  }
  updtStdt(data:FormData){
    this.setterN()
      data.append('id',this.id)
      return this.Http.post(this.server + 'updtStdt',
      data , { headers: this.headers })
    }
  addStdt(data:FormData){
  this.setterN()

    data.append('id',this.id)
    return this.Http.post(this.server + 'addStudent',
    data , { headers: this.headers })
  }
  addSubClass(ase: any) {
  this.setterN()

    return this.Http.post(this.server + 'addSubclass',{subClass:ase,id:this.id} , { headers: this.headers })
  }
  submitRe(data:{}){
    return this.Http.post(this.result + 'submitResult',data , { headers: this.headers })
  }
  checkStdts(jkj:{ [key: string]: string; }) : any{
  this.setterN()

    return this.Http.post(this.techr + 'checkResults',jkj,{headers:this.headers}   )
  }
  getResult(data:{ [key: string]: string; }){
    this.setterN()

    return this.Http.get(this.result+'getRslt?'+
    `id=${this.stId}&session=${data['session']}&term=${data['term']}&pin=${data['pin']}`,
    {headers:this.headers})
  }
  updateInfo(data:string,fr:string){
    this.setterN()

    return this.Http.post(this.server + 'updateInfo',{data:data,id:this.stId,weh:this.nh[fr]}, { headers: this.headers })

  }
  portalUpdt(value:Boolean){
    this.setterN()

    return this.Http.post(this.server + 'portUpdt',{data:value,id:this.id,}, { headers: this.headers })

  }
  promote(value:string){
    this.setterN()
    return this.Http.post(this.server + 'promoteStdnts', {session:value,id:this.id,}, { headers: this.headers })

  }
  getSubClasses(){
  this.setterN()

    return this.Http.get(this.server+'getSubClasses/'+this.id,{headers:this.headers})
  }
  getSubjects(){
    this.setterN()

    return this.Http.get(this.server+'getSubjects/'+this.id,{headers:this.headers})
  }
  actAcct(body:{}){
    return this.Http.post(this.server + 'actAcct', body, { headers: this.headers })
  }
  updateTeacher(ase: any) {
    return this.Http.post(this.server + 'updateTeacher', ase, { headers: this.headers })
  }
  addTeacher(ase: any) {
    return this.Http.post(this.server + 'addTeacher', ase, { headers: this.headers })
  }
  addSubj(data:any){
    this.setterN()

    data['id']=this.id
    return this.Http.post(this.server + 'addSubject', data, { headers: this.headers })
    
  }

  // Teacher  
  getTchrSubject(){
    this.setterN()
    return this.Http.get(this.techr+'getTchrSubject/'+this.tchrId+'/'+this.entObj['schId'],{headers:this.headers})
  }
  getTchrSubClasses(){
    this.setterN()

    return this.Http.get(this.techr+'getTchrSubClasses/'+this.tchrId,{headers:this.headers})
  }
  getStudents(st:any){
    this.setterN()

    return this.Http.get(this.techr+"getStudents/"+st+'/'+this.entObj['schId']+'/'+this.entObj['class'],{headers:this.headers})
  }

}


