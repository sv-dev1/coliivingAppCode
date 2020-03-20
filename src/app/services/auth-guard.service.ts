import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Event, NavigationStart, NavigationError } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ItemService } from './item.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
loginData:any;
  constructor(
        private router: Router,
        private route :ActivatedRoute,
        private storage: Storage,
        public itemService: ItemService,
      ) { 

  router.events.subscribe((event: Event) => { 
    if (event instanceof NavigationEnd ) {
    /*  if(sessionStorage.getItem("roleId") == '4' && event.url == '/properties-listing')
        this.router.navigate(['/dashboard']); */
    } 
  });
}
 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    if(sessionStorage.getItem("auth_token") != undefined){
      return true;
    }else{ 
      this.storage.get("login").then((res) =>{
        this.loginData = res;
        let input_data = {
          "username" : this.loginData.username,
          "password" : this.loginData.password,
          "token"    : localStorage.getItem("device_token")
        }
        this.itemService.login(input_data).subscribe(response=>{
          if(response['token']){
            this.storage.set('login', input_data);  
            sessionStorage.setItem("auth_token", response['token']);
            sessionStorage.setItem("loggedInId", response['userId']);
            sessionStorage.setItem("loggedInUsername", response['username']);
            sessionStorage.setItem("roleId", response['roleId']);
            sessionStorage.setItem("ref_code", response['ref_code']);
            sessionStorage.setItem("userQuestinaire", response['userQuestinaire']);
            localStorage.setItem("auth_token", response['token']);
            localStorage.setItem("loggedInId", response['userId']);
            localStorage.setItem("loggedInUsername", response['username']);
            localStorage.setItem("roleId", response['roleId']);
            localStorage.setItem("ref_code", response['ref_code']);
            localStorage.setItem("userQuestinaire", response['userQuestinaire']);
            //this.router.navigate(['/dashboard']);
                  return true;

          }else{
            console.log("We are facing some issue in server end");
                  return false;

          }
        },error=>{        
          console.log(error);
                return false;

        });  
      });
      //this.router.navigate(['/login']);
    }   
  }

}
  