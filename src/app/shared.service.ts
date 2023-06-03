import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/";
readonly PhotoUrl= "http://127.0.0.1:8000/photo/";
  constructor(private http:HttpClient) { }
  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/departement/');}
  
  addDepartement(val:any){
    return this.http.post<any[]>(this.APIUrl +'/departement/', val);
  }
  UploadDepartement(val:any){
    return this.http.put<any[]>(this.APIUrl +'/departement/', val);
  }
  DeletDepartement(val:any){
    return this.http.delete<any[]>(this.APIUrl +'/departement/'+val);
  }

  



  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/employee/');}
  
  addEmp(val1:any){
    return this.http.post<any[]>(this.APIUrl +'/employee/', val1);
  }
  UploadEmp(val1:any){
    return this.http.put<any[]>(this.APIUrl +'/employee/', val1);
  }
  DeletEmp(val1:any){
    return this.http.delete<any[]>(this.APIUrl +'/employee/'+val1);
  }

  UploadPhoto(val1:any){
    return this.http.post(this.APIUrl +'/Savefile', val1);
  }
  getALLDepNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/departement/');
  }
}
