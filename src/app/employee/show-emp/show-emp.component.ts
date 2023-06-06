import { Component } from '@angular/core';
import { DepartementComponent } from 'src/app/departement/departement.component';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent {
  constructor(private service : SharedService){}
  EmployeeList : any=[];
  ngOnInit(): void {
    this.refreshEmpList();
       
  }
  ModalTitle:string="";
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

 

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      Dateofjoining:"",
      PhotoFileName:"téléchargement (3).jpeg"

    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;

  }
  editClick(item:any){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  

  deleteClick(item:any){
    if(confirm('Are you sure?')){ 
      this.service.DeleteEmp(item.EmpID).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

 







  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }
}
