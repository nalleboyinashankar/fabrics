import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  buyers: any;
  lookups: any;
  countries: any;
  descs: any;
  addflag: boolean = true;
  showform: boolean = false;
  buyerform!: FormGroup;
  data: any;
  searchValue: string | undefined;
  updatebuyer: any;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private method1: UserserviceService
  ) { }

  ngOnInit(): void {
    this.GetBuyerdata();
    this.GetLookupdata();
    this.initializeForm();
    this.Gettypecddmtdata();
    this.GetCountrydata();
  }

  initializeForm() {
    this.buyerform = this.fb.group({
      Id: [''],
      BuyerName: ['', Validators.required],
      CountryId: ['', Validators.required],
      BuyingHouseId: ['', Validators.required],
      CommissionTypeId: ['', Validators.required],
      CommissionPercentage: ['', Validators.required],
    });
  }

  GetBuyerdata() {
    this.method1.GetBuyer().subscribe((a: any) => {
      this.buyers = a;
    });
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }

  openadd() {
    this.showform = true;
    this.buyerform.reset();
  }

  GetLookupdata() {
    this.method1.Getlookup().subscribe((a: any) => {
      this.lookups = a;
    });
  }

  GetCountrydata() {
    this.method1.GetCountrydata().subscribe((a: any) => {
      this.countries = a;
    });
  }

  Gettypecddmtdata() {
    this.method1.GetTypecddmt().subscribe((a: any) => {
      this.descs = a;
      console.log(this.descs);
    });
  }

  AddBuyerData() {
    this.method1.Addupdatebuyer(this.buyerform.value).subscribe((a: any) => {
      this.data = a;
      this.GetBuyerdata();
    });
  }

  deletebuyerdata(id: number) {
    this.method1.deletebuyer(id).subscribe((a: any) => {
      console.log(a);
      this.GetBuyerdata();
    });
  }

  editbuyer(buyer: any): void {
    this.buyerform.reset();
    console.log(buyer);
    this.showform = true;
    let obj = {
      Id: buyer.Id,
      BuyerName: buyer.BuyerName,
      CountryId: buyer.CountryId,
      BuyingHouseId: buyer.BuyingHouseId,
      CommissionTypeId: buyer.CommissionTypeId,
      CommissionPercentage: buyer.CommissionPercentage,
    };
    this.buyerform.patchValue(obj);
    this.addflag = false;
    console.log(this.addflag);
  }

  updateBuyerData() {
    this.method1.updatebuyer(this.buyerform.value).subscribe((a: any) => {
      this.updatebuyer = a;
      console.log(a);
      this.GetBuyerdata();
    });
  }

  Submit() {
    if (this.addflag == true) {
      this.AddBuyerData();
      this.showform = false;
      this.buyerform.reset();
    } else {
      this.updateBuyerData();
      this.showform = false;
      this.buyerform.reset();
    }
  }
}
