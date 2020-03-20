import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { NavParams} from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PopoverController } from '@ionic/angular'; 
import { NavController,AlertController,ModalController,LoadingController ,ActionSheetController} from '@ionic/angular';  


@Component({
  selector: 'app-group-summary-page',
  templateUrl: './group-summary-page.page.html',
  styleUrls: ['./group-summary-page.page.scss'],
})
export class GroupSummaryPagePage implements OnInit {

 
  base_url : string = "";
  teamId: any = [];
  teamname : string = ""; 
  billsArr :any =[];
  teamUser:any=[];
  userName:any =[];
  totalAmount:any = 0;
  userDetail:any=[];
  userLength:number;
  userAmount:any=[];
  balancedAmount:any=[];
  positiveUser:any=[];
  negativeUser:any=[];
  noOverdue:boolean=false;
  constructor(
      private route: ActivatedRoute,public popoverController: PopoverController,
      private clipboard: Clipboard,
      private router: Router, public formBuilder: FormBuilder, 
      private http: HttpClient, 
      public alertController: AlertController,
      public loadingController: LoadingController,
      public viewCtrl: ModalController )
      {  
          this.base_url = environment.base_url;
          this.route.queryParams.subscribe(params => { 
                 this.teamId.push(params['teamId']); 
                 this.teamname = params['teamname']; 
          }); 
      }

      ngOnInit() {
        this.getUsersList();
      }


    getBillListing() {  
        let token;
        if (sessionStorage.getItem("auth_token") != undefined) {
          token = sessionStorage.getItem("auth_token");
        }
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);
        this.pleaseWait();
        this.http.get(this.base_url + 'team/bills/summary/' + this.teamId, {
          headers: headers
        }).subscribe((response: any) => {
              this.loadingController.dismiss().then(a => console.log('dismissed'));
              this.billsArr=response.bills;
              this.getBalanceRecord(this.billsArr);
              this.billsArr.forEach(obj =>{
                  this.userDetail.push(obj.userDetail);
              })
           //  console.log(this.userDetail);

              let itemRecord=[];
               this.userDetail.forEach(ele =>{
                ele.forEach(item =>{
                  if (!this.userAmount.find(o => o.userId === item.userId)){
                    let obj = {};
                    obj['userId'] = item.userId,
                    obj['amount'] = item.amount,
                    obj['userName'] = item.userProfile.login['username'],
                    obj['paid'] = item.paid,
                    obj['amountToPay']= 0;

                    this.userAmount.push(obj);
                  }else{
                    itemRecord.push(item);
                  }
                });
              });
               this.userAmount.forEach(obj =>{
                itemRecord.forEach(ele=>{
                  if(ele.userId===obj.userId){
                    obj.amount = Number(obj.amount)+Number(ele.amount);
                    obj.paid = (Number(obj.paid)+Number(ele.paid)).toFixed(2);
                  }
                });
              });
           //   console.log(this.userAmount);
               this.userAmount.forEach(obj => {
               
                  if(Number(obj.paid) > Number(obj.amount)){
                       this.positiveUser.push(obj);
                  }
                  if(Number(obj.paid) < Number(obj.amount))
                  {                
                      this.negativeUser.push(obj);
                  }
              });
           //    console.log(this.userAmount);
              this.positiveUser.forEach(obj =>{
                    let amount=Number(obj.paid)-Number(obj.amount);
                    obj.amountToPay=amount;
                    var string = obj.amountToPay.toString();
                    obj.amountToPay=parseFloat(string).toFixed(2);
              });

              this.negativeUser.forEach(obj =>{
                    let amount=Number(obj.paid)-Number(obj.amount);
                    obj.amountToPay=amount;
                    var string = obj.amountToPay.toString();
                    var split = string.replace('-', '');
                    obj.amountToPay=parseFloat(split).toFixed(2);
                });
             //console.log(this.positiveUser);
             //console.log(this.negativeUser);

             
        }, error => {
          console.log("ERROR");
          console.log(error.error);
        });

     }
      async pleaseWait() {
        const loading = await this.loadingController.create({
          duration: 2000,
          cssClass: 'custom-class custom-loading',
          spinner:null
        });
        await loading.present();
        const {
          role,
          data
        } = await loading.onDidDismiss();
      }

    getBalanceRecord(record){
       // console.log(record);
           let userInfo=[];
           let useramt=[];
           let posUser=[];
           let negUser=[];
           let itemRecord=[];

          record.forEach(obj =>{
            userInfo.push(obj.userDetail);
          })
              userInfo.forEach(ele =>{
                ele.forEach(item =>{
                  if (!useramt.find(o => o.userId === item.userId)){
                    let obj = {};
                    obj['userId'] = item.userId,
                    obj['amount'] = item.amount,
                    obj['userName'] = item.userProfile.login['username'],
                    obj['paid'] = item.paid,
                    obj['amountToPay']= 0;
                    useramt.push(obj);
                  }else{
                    itemRecord.push(item);
                  }
                });
              });
              useramt.forEach(obj =>{
                itemRecord.forEach(ele=>{
                  if(ele.userId===obj.userId){
                    obj.amount = Number(obj.amount)+Number(ele.amount);
                    obj.paid = (Number(obj.paid)+Number(ele.paid)).toFixed(2);
                  }
                });
              });

              useramt.forEach(obj => {
               
                  if(Number(obj.paid) > Number(obj.amount)){
                       posUser.push(obj);
                  }
                  if(Number(obj.paid) < Number(obj.amount))
                  {                
                      negUser.push(obj);
                  }
              });
              // console.log(useramt);
              posUser.forEach(obj =>{
                    let amount=Number(obj.paid)-Number(obj.amount);
                    obj.amountToPay=amount;
                    var string = obj.amountToPay.toString();
                    obj.amountToPay=parseFloat(string).toFixed(2);;
              });

              negUser.forEach(obj =>{
                    let amount=Number(obj.paid)-Number(obj.amount);
                    obj.amountToPay=amount;
                    var string = obj.amountToPay.toString();
                    var split = string.replace('-', '');
                    obj.amountToPay=parseFloat(split).toFixed(2);
              });
             console.log(posUser);
             console.log(negUser);
            negUser.forEach((obj,i) =>{
               posUser.forEach((ele,index) =>{
                        var eleamount=ele.amountToPay;
                         var objamount=obj.amountToPay;
                      if(parseFloat(ele.amountToPay) < parseFloat(obj.amountToPay)){
                         // console.log(ele);
                         // console.log(obj);
                         if(parseFloat(ele.amountToPay)!= 0){
                             let post = {};
                             post['from'] = obj.userName,
                             post['to'] = ele.userName,
                             post['willPay']=parseFloat(eleamount).toFixed(2)
                             console.log(post);
                             this.balancedAmount.push(post);
                             let amt=obj.amountToPay-ele.amountToPay;
                             obj.amountToPay=amt.toString();
                             ele.amountToPay=0;
                         }
                         
                      }
                      else
                      {
                         // console.log("else");
                             if(parseFloat(ele.amountToPay)!= 0){
                                 let post = {};
                                   post['from'] = obj.userName,
                                   post['to'] = ele.userName,
                                   post['willPay']=parseFloat(objamount).toFixed(2)
                                   console.log(post);
                                   this.balancedAmount.push(post);
                                    obj.amountToPay=0;
                                   let amount=ele.amountToPay-obj.amountToPay;
                                   ele.amountToPay=amount.toString();
                            
                             }
                           
                      }
                });
            });
            console.log(this.balancedAmount);
    }



    getUsersList(){
       let postArr = {'teamId': this.teamId};
       let token; 
          if(sessionStorage.getItem("auth_token") != undefined){
           token = sessionStorage.getItem("auth_token"); 
          } 
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);
             const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': token })}; 

        this.http.post(this.base_url+'team/users',postArr,httpOptions).subscribe((response: any) =>
          {
           this.teamUser=response.teams;
           this.userLength=this.teamUser.length;
           this.teamUser.forEach(obj =>{
                this.userName.push(obj.login['username']);
            })
          //  console.log(this.userLength);
            this.getBillListing();


        },error=>{ 
            console.log("ERROR");
            console.log(error.error);
        });     
    }
}
