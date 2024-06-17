import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  states: any;
  addflag: boolean = true;
  showform: boolean = false;
  stateform!: FormGroup;
  countries: any;
  data: any;
  searchValue: string | undefined;
  updateddata: any;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private method1: UserserviceService
  ) {}

  ngOnInit(): void {
    this.GetStatedata();
    this.GetCountrydata();
    this.initializeForm();
  }

  initializeForm() {
    this.stateform = this.fb.group({
      Id: [''],
      State: ['', Validators.required],
      CountryId: [''],
      IGST: ['', Validators.required],
      SGST: ['', Validators.required],
      CGST: ['', Validators.required],
      Statecode: ['', Validators.required]
    });
  }

  GetStatedata() {
    this.method1.Getstate().subscribe((a: any) => {
      this.states = a;
    });
  }

  GetCountrydata() {
    this.method1.GetCountrydata().subscribe((a: any) => {
      this.countries = a;
    });
  }

  AddStateData() {
    this.method1.addupdatestate(this.stateform.value).subscribe((a: any) => {
      this.data = a;
      this.GetStatedata();
      this.showform = false;
      this.stateform.reset();
    });
  }

  editstate(state: any): void {
    this.stateform.reset();
    console.log(state);
    this.showform = true;
    let obj = {
      Id: state.Id,
      CountryId: state.CountryId,
      State: state.State,
      IGST: state.IGST,
      SGST: state.SGST,
      CGST: state.CGST,
      Statecode: state.Statecode
    };
    this.stateform.patchValue(obj);
    this.addflag = false;
    console.log(this.addflag);
  }

  clear(dt1: Table) {
    this.searchValue = '';
    dt1.clear();
  }

  updatestatedata() {
    this.method1.updatestate(this.stateform.value).subscribe((a: any) => {
       this.updateddata = a
      this.GetStatedata();
      this.showform = false;
      this.stateform.reset();
    });
  }

  deletestatedata(id: number): void {
    this.method1.deletestate(id).subscribe((a: any) => {
      console.log(a);
      this.GetStatedata();
    });
  }

  openadd() {
    this.showform = true;
    this.stateform.reset();
    this.addflag = true;
  }

  Submit() {
    console.log('Form Value:', this.stateform.value);
    if (this.addflag === true) {
      this.AddStateData();
    } else {
      this.updatestatedata();
    }
  }
}
