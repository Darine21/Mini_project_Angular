import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-put-dep',
  templateUrl: './add-put-dep.component.html',
  styleUrls: ['./add-put-dep.component.css']
})
export class AddPutDepComponent implements OnInit{
  constructor(private service:SharedService){}
 

  
  @Input()  emp:any; 
  EmployeeId:String="";
  EmployeeName:String="";
  Department:String="";
  DateOfJoining:String="";
  PhotoFileName:String="";
  PhotoFilePath:String="";

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }


  loadDepartmentList(){
    this.service.getALLDepNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.EmployeeId=this.emp.EmpID;
      this.EmployeeName=this.emp.EmpName;
      this.Department=this.emp.Empdep;
      this.DateOfJoining=this.emp.DateofJoining;
      this.PhotoFileName=this.emp.photoFieldName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }
  addemployee(){
    var val = {EmpID:this.EmployeeId,
                EmpName:this.EmployeeName ,
                Empdep:this.Department,
                DateofJoining:this.DateOfJoining,
                photoFieldName:this.PhotoFileName
              };
    this.service.addEmp(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val= {EmpID:this.EmployeeId,
      EmpName:this.EmployeeName,
      Empdep:this.Department,
      DateofJoining:this.DateOfJoining,
      photoFieldName:this.PhotoFileName
    };
    console.log("ee");
    this.service.UploadEmp(val).subscribe(res=>{
      console.log("a");
    alert(res.toString());
    });
  } 

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedfile',file,file.name);
    console.log("aaaa");
    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      console.log("aaaaa");
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}
