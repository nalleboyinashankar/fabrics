import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-look-up',
  templateUrl: './look-up.component.html',
  styleUrls: ['./look-up.component.css']
})
export class LookUpComponent implements OnInit {
  lookupform!: FormGroup;
  showform: boolean = false;
  lookups: any;
  descs: any;
  addflag: boolean = true;
  data: any;
  searchValue: string | undefined;

  constructor(public router: Router, public fb: FormBuilder, private method1: UserserviceService) {}

  ngOnInit(): void {
    this.GetLookup();
    this.Gettypecddmt();
    this.initializeForm();
    this.Gettypecddmt();
  }

  initializeForm() {
    this.lookupform = this.fb.group({
      Id: [''],
      LookUpId: ['', Validators.required], 
      Name: ['', Validators.required],
      Remarks: ['', Validators.required],
    });
  }
  

  GetLookup() {
    this.method1.Getlookup().subscribe((a: any) => {
      this.lookups = a;
    });
  }

  Gettypecddmt() {
    this.method1.GetTypecddmt().subscribe((c: any) => {
      this.descs = c;
      console.log(this.descs);
    });
  }
  clear(dt1: Table) {
    this.searchValue = '';
    dt1.clear();
  }
  addlookup() {
    this.method1.Addlookup(this.lookupform.value).subscribe((a: any) => {
      this.data = a;
    });
  }

  openadd() {
    this.showform = true; // Corrected line
    this.lookupform.reset();
  }
  editlookup(product: any): void {
    this.lookupform.reset();
    console.log(product);
    this.showform = true;
    let obj = {
      Id: product.Id,
      LookUpId: product.TypeCdId, // Patch TypeCdId to LookUpId
      Type: product.Type, // If you want to patch Type as well
      Name: product.Name,
      Remarks: product.Remarks
    }
    this.lookupform.patchValue(obj);
    this.addflag = false;
    console.log(this.addflag);
}


updatelookup() {
    this.method1.updatelookup(this.lookupform.value).subscribe((a: any) => {
      console.log(a);     
       this.GetLookup();
    })
  }

  deletelookup(id: number): void {
      this.method1.deletelookup(id).subscribe((a: any) => {
        console.log(a);
        this.GetLookup();
      });
  }

  Submit() {
    console.log('Form Value:', this.lookupform.value);
    if (this.addflag === true) {
      this.addlookup();
      this.showform = false;
      this.lookupform.reset();
      this.GetLookup();
    }
    else if (this.addflag === false) {
      this.updatelookup();
      this.showform = false;
      this.lookupform.reset();
    }
  }
  
}
