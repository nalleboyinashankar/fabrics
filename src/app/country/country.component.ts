import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: any;
  showform: boolean = false;
  countryform!: FormGroup;
  descs: any;
  data: any;
  addflag: boolean = true;
  searchValue: string | undefined;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private method1: UserserviceService
  ) {}

  ngOnInit(): void {
    this.GetCountrydata();
    this.Gettypecddmtdata();
    this.initializeForm();
  }

  initializeForm() {
    this.countryform = this.fb.group({
      CountryId: [''],
      CountryName: ['', Validators.required],
      CountryCode: ['', Validators.required],
      CurrencyType: ['', Validators.required],
      ConversionRate: ['', Validators.required],
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

  AddCountryData() {
    this.method1.addupdatecountry(this.countryform.value).subscribe((a: any) => {
      this.data = a;
      this.GetCountrydata();
    });
  }

  editcountry(country: any): void {
    this.countryform.reset();
    console.log(country);
    this.showform = true;
    let obj = {
      CountryId: country.CountryId,
      CountryName: country.CountryName,
      CountryCode: country.CountryCode,
      CurrencyType: country.CurrencyType,
      ConversionRate: country.ConversionRate
    };
    this.countryform.patchValue(obj);
    this.addflag = false;
    console.log(this.addflag);
  }

  updatecountry() {
    this.method1.updatecountry(this.countryform.value).subscribe((a: any) => {
      console.log(a);     
      this.GetCountrydata();
    });
  }

  openadd() {
    this.showform = true;
    this.countryform.reset();
    this.addflag = true;
  }

  deletecountrydata(id: number): void {
    this.method1.deletecountry(id).subscribe((a: any) => {
      console.log(a);
      this.GetCountrydata();
    });
}
  Submit() {
    console.log('Form Value:', this.countryform.value);
    if (this.addflag === true) {
      this.AddCountryData();
      this.showform = false;
      this.countryform.reset();
    } else if (this.addflag === false) {
      this.updatecountry();
      this.showform = false;
      this.countryform.reset();
    }
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
}
}
