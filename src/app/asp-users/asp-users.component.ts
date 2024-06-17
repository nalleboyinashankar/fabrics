import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asp-users',
  templateUrl: './asp-users.component.html',
  styleUrls: ['./asp-users.component.css']
})
export class AspUsersComponent implements OnInit {
  Users: any;
  searchValue: any;
  showform: boolean = false;
  userform!: FormGroup;
  formBuilder: any;
  data: any;
  addflag:boolean=true 
  dataadded: any;
  descs: any[] = [];
  factories: any[] = []; 
  updatedstored: any;
  constructor(public router: Router, public fb: FormBuilder,private method1: UserserviceService) {}

  ngOnInit(): void {
    this.GetUser();
    this.initializeForm();
    this.GetFactoryList();
    this.Gettypecddmt();
  }

  initializeForm() {
    this.userform = this.fb.group({
      UserName: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      MobileNumber: ['', Validators.required],
      DepartmentId: ['', Validators.required],
      FactoryId: ['', Validators.required],
      ReportingManager: ['', Validators.required],
      IsActive: [true],
      Id: ['']
    });
    
  }

  GetUser() {
    this.method1.GetAspUsers().subscribe((a: any) => {
      this.Users = a;
    });
  }

  GetFactoryList(){
    this.method1.GetFactoryList().subscribe((a:any)=>{
      this.factories = a
      console.log(this.factories);
      
    })
  }

  Gettypecddmt(){
    this.method1.GetTypecddmt().subscribe((c:any)=>{
      this.descs = c
      console.log(this.descs);
      
    })
  }

  addUser() {
    this.showform = true;
    this.userform.reset();
  }


  CreateUser() {
    this.method1.Adduser(this.userform.value).subscribe((b: any) => {
      this.dataadded = b;
    });
    console.log(this.userform.value);
    
  }
  
  
  clear(dt1: Table) {
    this.searchValue = '';
    dt1.clear();
    this.GetUser();
  }
  user: any; // Add this line
  userde: any;


  edituser(user: any) {
    this.showform = true;
    // Populate the form with user data
    let obj ={
      Id: user.Id,
      UserName: user.UserName,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      MobileNumber: user.MobileNumber,
      DepartmentId: user.DepartmentId,
      FactoryId: user.Id,
      ReportingManager: user.ReportingManager,
      IsActive: user.IsActive,
    };

    this.userform.patchValue(obj);
    this.addflag = false;
}


   updateuser() {
    this.method1.updateuserdata(this.userform.value).subscribe((a: any) => {
      this.updatedstored = a;
      console.log(a);     
    })
  }

  deleteuserdata(id: any): void {
      this.method1.deleteuser(id).subscribe((a: any) => {
        console.log(a);
        this.GetUser();
      });
    
  }



   Submit() {
    if (this.addflag == true) {
        this.CreateUser();
        this.showform = false;
        this.userform.reset();
        this.GetUser();
    } else {
        this.updateuser();
        this.showform = false;
        this.userform.reset();
        this.GetUser();
    }
}





}


