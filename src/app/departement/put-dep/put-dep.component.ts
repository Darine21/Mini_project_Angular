import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-put-dep',
  templateUrl: './put-dep.component.html',
  styleUrls: ['./put-dep.component.css']
})
export class PutDepComponent implements OnInit{
  constructor(private service:SharedService){}

 
  @Input()  dep:any; 
  DepartmentId:String="";
  DepartmentName:String="";

  ngOnInit(): void{
    this.DepartmentId= this.dep.DepID;
    this.DepartmentName= this.dep.DepName;
  }
  adddepartment(){
    var val = {DepID:this.DepartmentId,
                DepName:this.DepartmentName};
    this.service.addDepartement(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepID:this.DepartmentId,
      DepName:this.DepartmentName};
    this.service.UploadDepartement(val).subscribe(res=>{
    alert(res.toString());
    });
  

  }  
  
}
