import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { CalendarModule } from 'primeng/calendar';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-style-master',
  templateUrl: './style-master.component.html',
  styleUrls: ['./style-master.component.css']
})
export class StyleMasterComponent implements OnInit {
  styles: any;
  buyers: any;
  addflag: boolean = true;
  showform: boolean = false
  styleform!: FormGroup;
  lookupIddata: any[] = [];
  dataofgarmenttype: any[] = [];
  descs: any;
  file: any;
  date1: Date | undefined;
  dataoftypecddmt: any;
  adddata: any;
  hello: any;
  maxDate?: string;
  searchValue: string | undefined;
  getseasonsdata: any[] = [];
  getgarmentdata: any[] = [];
  getsampletypedata: any[] = [];
  getorderdata: any[] = [];
  getgarmentprocess: any[] = [];
  totalupdateddata: any;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private method1: UserserviceService
  ) { }

  ngOnInit(): void {
    this.GetStylemaster();
    this.GetBuyerdata();
    // this.getLookupDataBasedID(1);
    this.getseason(1);
    // this.getGarmenttypeID(2);
    this.getgarmenttype(2);
    // this.gettypecddmtID(2);
    this.getsampletype(2)
    this.initializeForm();
    // this.getordertyprID(6);
    this.getordertype(6);
    this.getgetgarmentprocessdata(53);


  }
  initializeForm() {
    this.styleform = this.fb.group({
      Id:[''],
      MarchantId:[''],      
      BuyerId: [''],
      BuyerStyleNumber: ['', Validators.required],
      UserName: ['', Validators.required],
      SeasonTypeId: [''],
      GarmentTypeId: [''],
      SampleTypeId: [''],
      TechPackName: ['', Validators.required],
      Description: ['', Validators.required], // Assuming Description can be null
      FileName: ['', Validators.required],
      TechPackSampleReceivedDate: ['', Validators.required],
      SampleSubmissionDate: ['', Validators.required],
      OrderTypeId: [''], // Assuming OrderTypeId is part of your form
      ExpectedOrderQty: ['', Validators.required], // Assuming ExpectedOrderQty is part of your form
      ExpectedOrderDate: ['', Validators.required],
      SeasonTypeName: ['', Validators.required],
      GarmentProcessId: [''],
      TypeCdId:['']
    });
  }


  GetStylemaster() {
    this.method1.GetStylemasterdata().subscribe((a: any) => {
      this.styles = a;
    });
  }

  openadd() {
    this.showform = true;
    this.styleform.reset();
  }

  GetBuyerdata() {
    this.method1.GetBuyer().subscribe((a: any) => {
      this.buyers = a;
    });
  }



  // getLookupDataBasedID(id: any): void {
  //   this.method1.getwithidlookup(id).subscribe((data: any) => {
  //     this.lookupIddata = data;
  //     console.log(this.lookupIddata);
      
  //   });
  // }

  // getGarmenttypeID(id: number): void {
  //   this.method1.getwithidlookup(id).subscribe((data: any) => {
  //     this.dataofgarmenttype = data;
  //   });
  // }


  getseason(id:number):void{
    this.method1.getseasonwithid(id).subscribe((data:any)=>{
      this.getseasonsdata = data;
      console.log(this.getseasonsdata);
      
    })
  }
  
  getgarmenttype(id:number):void{
    this.method1.getgarmentwithidSP(id).subscribe((d:any)=>{
      this.getgarmentdata = d;
    })
  }

  getgetgarmentprocessdata(id:number):void{
    this.method1.getgarmentprocess(id).subscribe((d:any)=>{
      this.getgarmentprocess = d;
    })
  }

  getsampletype(id:number){
    this.method1.getsampletypewithid(id).subscribe((d:any)=>{
      this.getsampletypedata = d;
    })
  }

  getordertype(id:number){
    this.method1.getordertypewitid(id).subscribe((d:any)=>{
      this.getorderdata = d;
    })
  }

  // gettypecddmtID(id: number): void {
  //   this.method1.getwithidtypecddmt(id).subscribe((data: any) => {
  //     this.dataoftypecddmt = data; // Assign the response data to lookupIddata
  //   });
  // }

  // getordertyprID(id: number): void {
  //   this.method1.getwithidtypecddmt(id).subscribe((data: any) => {
  //     this.hello = data; // Assign the response data to lookupIddata
  //   });
  // }





  // addstyledate() {
  //   this.method1.Addupdatestylemaster(this.styleform.value).subscribe((data: any) => {
  //     this.adddata = data;
  //   });
  // }

  editstyle(style: any): void {
    this.styleform.reset();
    console.log(style);
    this.showform = true;

    let obj = {
        Id: style.Id,
        MarchantId:style.MarchantId,
        BuyerStyleNumber: style.BuyerStyleNumber,
        UserName: style.UserName,
        BuyerId: style.BuyerId,
        SeasonTypeId: style.SeasonTypeId, // Correct property for SeasonTypeId
        GarmentTypeId: style.GarmentTypeId,
        GarmentProcessId:style.GarmentProcessId,
        TechPackName: style.TechPackName,
        FileName: '', // Leave as an empty string for file inputs
        Description: style.Description,
        TechPackSampleReceivedDate: this.formatDate(style.TechPackSampleReceivedDate),
        SampleSubmissionDate: this.formatDate(style.SampleSubmissionDate),
        OrderTypeId: style.OrderTypeId,
        ExpectedOrderQty: style.ExpectedOrderQty,
        ExpectedOrderDate: this.formatDate(style.ExpectedOrderDate),
        SampleTypeId: style.SampleTypeId,
        TypeCdId:style.TypeCdId
       // Ensure this matches the form control name
    };

    this.styleform.patchValue(obj);
    this.addflag = false;
}

// updatestyledata(){
//   this.method1.updatestyle(this.styleform.value).subscribe((a: any) => {
//     this.totalupdateddata = a
//     console.log(a);     
//     this.GetStylemaster();
//   });
// }


  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;

  }




  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file);
  }
  

  
  deletestyledata(id: any): void {
    this.method1.deletestylemaster(id).subscribe(
      (response) => {
        console.log("Style deleted successfully:", response);
        // Update UI to reflect deletion (e.g., remove style from list)
      },
      (error) => {
        console.error("Error deleting style:", error);
        // Handle deletion error (e.g., show error message to user)
      }
    );
  }
  
  Submit() {
    if (!this.styleform.value.Id) {
      // Add new style
      this.method1.saveStyle(this.styleform.value).subscribe((response: any) => {
        this.adddata = response;
        console.log(response);
        this.GetStylemaster();
        this.showform = false;
        this.styleform.reset();
      });
    } else {
      // Update style
      this.method1.updatestyle(this.styleform.value).subscribe((response: any) => {
        this.totalupdateddata = response;
        console.log(response);
        this.GetStylemaster();
        this.showform = false;
        this.styleform.reset();
      });
    }
  }
  
  

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
}

}
