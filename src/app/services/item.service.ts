import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import { Router } from '@angular/router';

import { map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}; 
 
@Injectable({
  providedIn: 'root'
})
export class ItemService { 
  base_url : string = "";
  constructor(private http: HttpClient,private router: Router) {
    this.base_url = environment.base_url;
    console.log("constructor >>>>");
    console.log(this.base_url);
   }
  
  login(input_data){ 
     return this.http.post(this.base_url+'login',input_data); 
  } 

  loginwithfb(input_data){
       return this.http.post(this.base_url+'loginwithfb',input_data); 
  }

  fpassword(input_data){ 
     let token; 
      if(sessionStorage.getItem("auth_token")!=undefined){
        token = sessionStorage.getItem("auth_token"); 
      }  
      const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': token })}; 
      return this.http.post(this.base_url+'forget-password',input_data,httpOptions); 
  }

  register(input_data){ 
     return this.http.post(this.base_url+'register',input_data); 
  } 

  create_bills(input_data){ 
    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
      token = sessionStorage.getItem("auth_token"); 
    }  
       const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': token })}; 
       return this.http.post(this.base_url+'createBills',input_data,httpOptions); 
  }

  add_suggesation(input_data){ 
      let token; 
      if(sessionStorage.getItem("auth_token")!=undefined){
        token = sessionStorage.getItem("auth_token"); 
      }  
         const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': token })}; 
         return this.http.post(this.base_url+'task/suggestion',input_data,httpOptions); 
  }

  setLogout(){
     if(sessionStorage.getItem("auth_token") != undefined)
          {
            sessionStorage.removeItem("auth_token");
            this.router.navigate(['login']);
          }
  }

  create_team(input_data){ 
      let token; 
      console.log(input_data);
      if(sessionStorage.getItem("auth_token")!=undefined){
      	token = sessionStorage.getItem("auth_token"); 
      }  
         const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': token })}; 
        return this.http.post(this.base_url+'createTeam',input_data,httpOptions)
        .map((response:Response)=>{console.log(response);return response})
          .catch((error:Error) => { console.log(error);this.setLogout();
          return Observable.throw(error);
          }); 
  }

  changePassword(input_data){ 
      let token; 
      console.log(input_data);
      if(sessionStorage.getItem("auth_token")!=undefined){
        token = sessionStorage.getItem("auth_token"); 
      }  
         const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': token })}; 
        return this.http.put(this.base_url+'password',input_data,httpOptions)
        .map((response:Response)=>{console.log(response);return response})
          .catch((error:Error) => { console.log(error);
          return Observable.throw(error);
          }); 
  }
 
}
