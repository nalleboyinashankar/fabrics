import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  add(arg0: { severity: string; summary: string; detail: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  GetAspUsers(){
    return this.http.get("https://localhost:44341/api/FabricDesign/GetUsersThroughSP")
  }

  Adduser(userform:any){
    return this.http.post('https://localhost:44341/api/FabricDesign/CreateUser',userform)
  }
  
  GetFactoryList(){
    return this.http.get('https://localhost:44341/api/FabricDesign/GetFactoryList' )
  }

  GetTypecddmt(){
    return this.http.get('https://localhost:44341/api/FabricDesign/GetTypeCdDmt')
  }

  updateuserdata(userform:any){
    return this.http.put('https://localhost:44341/api/FabricDesign/CreateUser',userform)

  }

  deleteuser(id: any) {
    return this.http.delete('https://localhost:44341/api/FabricDesign/Deleteuser?id='+ id)
  }

  //for lookups

  Getlookup(){
    return this.http.get('https://localhost:44341/GetLookup');
  }

  Addlookup(lookupform:any){
    return this.http.post('https://localhost:44341/AddUpdateLookup',lookupform);
  }

  updatelookup(lookupform:any){
    return this.http.put('https://localhost:44341/UpdateLookup',lookupform);

  }

  deletelookup(id:any){
    return this.http.delete('https://localhost:44341/Deletelookup?id=' +id);
  }

  //for country

  GetCountrydata(){
    return this.http.get('https://localhost:44341/GetCountry')
  }

  addupdatecountry(countryform:any){
    return this.http.post('https://localhost:44341/AddUpdateCountry',countryform);
  }

  updatecountry(countryform:any){
    return this.http.put('https://localhost:44341/UpdateCountry',countryform);

  }

  deletecountry(id:any){
    return this.http.delete('https://localhost:44341/DeleteCountry?id=' +id);
  }

  //for states

  
  Getstate() {
    return this.http.get('https://localhost:44341/GetState');
  }

  addupdatestate(stateform: any) {
    return this.http.post('https://localhost:44341/AddUpdateState', stateform);
  }

  updatestate(stateform: any) {
    return this.http.put('https://localhost:44341/UpdateStatedata', stateform);
  }

  deletestate(id: any) {
    return this.http.delete('https://localhost:44341/DeleteState?id=' + id);
  }

  
  //for buyer

  GetBuyer() {
    return this.http.get('https://localhost:44341/GetBuyerList');
  }

  Addupdatebuyer(buyerForm: any) {
    return this.http.post('https://localhost:44341/AddupdateBuyer', buyerForm);
  }

  updatebuyer(buyerForm: any) {
    return this.http.put('https://localhost:44341/updateBuyer', buyerForm);
  }

  deletebuyer(id: any) {
    return this.http.delete('https://localhost:44341/DeleteBuyer?id=' + id);
  }

  //for stylemaster

  GetStylemasterdata(){
    return this.http.get('https://localhost:44341/api/FabricDesign/GetStyleMaster')
  }

  //get lookup with id

  getwithidlookup(id :any){
    return this.http.get('https://localhost:44341/api/FabricDesign/Getwithid?id=' + id)
  }

  getwithidtypecddmt(id :any){
    return this.http.get('https://localhost:44341/api/FabricDesign/GetwithidTypecddmt?id=' +id)
  }



  saveStyle(styleform: any){
    return this.http.post('https://localhost:44341/api/FabricDesign/Addupdatestylemaster',styleform)
  }

  updatestyle(styleform: any) {
    return this.http.put('https://localhost:44341/api/FabricDesign/updatestylemaster', styleform);
  }

 


  // Addupdatestylemaster(styleform:any){
  //   return this.http.post('https://localhost:44341/api/FabricDesign/Addupdatestylemaster',styleform)

  // }
  
  // updatestyle(styleform:any){
  //   return this.http.put('https://localhost:44341/api/FabricDesign/Addupdatestylemaster',styleform)

  // }
//
  getseasonwithid(id:any){
    return this.http.get('https://localhost:44341/api/FabricDesign/Getseasonwithid?id=' +id)

  }

  getgarmentwithidSP(id:any){
    return this.http.get('https://localhost:44341/api/FabricDesign/Getgarmenttypewithid?id=' +id);
  }

  getgarmentprocess(id:any){
    return this.http.get('https://localhost:44341/api/FabricDesign/Garmentprocesswithid?id=' +id)
  }

  getsampletypewithid(id:any){
    return this.http.get('https://localhost:44341/api/FabricDesign/GetSampletypewithid?id=' +id);
  }

  getordertypewitid(id:any){
    return this.http.get('https://localhost:44341/api/FabricDesign/GetOrdertypewithid?id=' +id);
  }

  deletestylemaster(id:any){
    return this.http.delete('https://localhost:44341/api/FabricDesign/DeletStyleMaster?id=' +id);
  }
  
}
