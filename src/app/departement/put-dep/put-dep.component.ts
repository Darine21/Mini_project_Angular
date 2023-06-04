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
    this.DepartmentId= this.dep.DepartmentId;
    this.DepartmentName= this.dep.DepartmentName;
  }
  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName};
    this.service.addDepartement(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
    this.service.UploadDepartement(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
