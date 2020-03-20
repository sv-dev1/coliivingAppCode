import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { NavParams} from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PopoverController } from '@ionic/angular'; 
import { NavController,AlertController,ModalController,LoadingController ,ActionSheetController} from '@ionic/angular';

declare var jsPDF: any;
 
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  //providers: [ViewController],
})
export class PopoverComponent implements OnInit {
key1='';
key2='';
teamId='';
userId='';   update_from: FormGroup;

ref_code=''; 
ref_link=''; 
base_url : string = "";  
owner : string = "";  
group_title : string = "";  
teamListArr:any;
submitted =false ;
userArr:any;
teamUserArr=[];

constructor( 
  private route: ActivatedRoute,public popoverController: PopoverController,
  private clipboard: Clipboard,
  public navParams: NavParams,public formBuilder: FormBuilder, 
  private http: HttpClient,
  private socialSharing: SocialSharing,
  public alertController: AlertController,
  public loadingController: LoadingController,
  public viewCtrl: ModalController
  ) {   
   	this.userId = sessionStorage.getItem("loggedInId"); 
    console.log(this.userId);
    let dataArr = this.navParams;
    this.teamId = dataArr.data.teamId;  
    this.group_title = dataArr.data.group_title;  
    this.base_url = dataArr.data.baseurl;  
    this.owner = dataArr.data.owner;  
    this.ref_code = dataArr.data.ref_code;  
  //  http://coliving.kindlebit.com/app.download?rc=RCe3b66e39-1599-4047-bc5c-8fb97c776aa0%2FT4e127425-65ad-4045-b61d-123d1d38574e
    this.ref_link = 'http://coliving.kindlebit.com/app.download?rc='+this.ref_code+ '/'+this.teamId;
  //  console.log(this.teamId);
  //  console.log(this.base_url);
   // this.getTeamsList(); 

     this.update_from = this.formBuilder.group({
       title : new FormControl('', Validators.required),  
       owner : new FormControl('',Validators.required),  
       teamId : new FormControl('',Validators.required),  
    });
     this.update_from.patchValue({
        title : this.group_title ,
        owner : this.owner, 
        teamId : this.teamId, 
      })

    } 
    ionViewWillEnter() {
        this.getTeamsList(); 
    }
     get f() { return this.update_from.controls; } 
   close() {
     this.popoverController.dismiss();
   // this.viewCtrl.dismiss();
    }
  removeUserApi(userId_to_remove) {
  if(userId_to_remove && this.teamId){
    const sent_data = {
      'userId': userId_to_remove,
      'team_id': this.teamId,
      'user_status': '2',
    };
    console.log(sent_data);
      let token; 
      if(sessionStorage.getItem("auth_token")!=undefined){
         token = sessionStorage.getItem("auth_token"); 
      }
      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      this.http.post(this.base_url+'/team/user/remove',sent_data,httpOptions).subscribe((response:any) => {
          this.customsmessage(response.message);
          this.popoverController.dismiss();
      },error=>{  
          console.log(error.error); 
          console.log(error.error.errors); 
      });  

  }
  else
  {
    let msg = 'user detail is not avaliable!';
    console.log(msg);
  }

  }
  update(form) {
  //    console.log(form);
      this.submitted = true; 
    if (this.update_from.invalid) {
  //    console.log('invalid');
      return;
    }
    else{
      const input_data = 
      { 
      "name" : form.title,
      "userId" : form.owner,     
      "teamId" : form.teamId,     
      }   
   //   this.pleaseWait(); 
      let token; 
      if(sessionStorage.getItem("auth_token")!=undefined){
         token = sessionStorage.getItem("auth_token"); 
      }
      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      this.http.post(this.base_url+'updateTeam',input_data,httpOptions).subscribe((response:any) => {
     //this.loadingController.dismiss().then(a => console.log('dismissed'));
   //   console.log(response); 
      this.customsmessage(response.message);
      },error=>{  
 //     console.log(error.error); 
  //    console.log(error.error.errors); 
      });  
    }
  }    
  ngOnInit() {
      
  }  
  shareInfo(){
  this.socialSharing.share("Your referal link is:", "Invite", "", this.ref_link);
  } 
  joinGroupShare(){
  this.socialSharing.share("Use code below to join the group on join group page.:", "Invite", "", this.teamId);
  } 

copyText(event) {
  this.clipboard.copy(this.ref_link);
  this.customsmessage('link has been successfully copied...');
} 

 downloadPDF() {  
                  if(this.teamListArr.length  != 0){
                var doc = new jsPDF();
            var col = ["Fields", "Inputs"];
              var rows = [];
          var rows1 = [];
          var temp=[];
                  var a = 17;
          
        / The following array of object as response from the API req  /
        //  console.log( this.teamListArr[0].userProfile);
           this.teamListArr.forEach(element => {
            if(element.userProfile)
            {
                    temp = ["UserName",element.userProfile.firstName + " "+element.userProfile.lastName];
                 rows.push(temp);
                 temp = ["Date Of Birth",element.userProfile.dob];
                rows.push(["Date Of Birth",element.userProfile.dob]); 
                  temp = ["Email",element.userProfile.email];
                rows.push(temp);
                 temp = ["Gender",element.userProfile.gender];
                rows.push(temp);
                  temp = ["Nationality",element.userProfile.phoneNo];
                rows.push(temp);
                  temp = ["PhoneNumber",element.userProfile.phoneNo];
                rows.push(temp);
              temp = ["Contact Address",element.userProfile.address+" "+element.userProfile.country+" "+element.userProfile.postalCode];
                 rows.push(temp);
                 temp = ["Occupation",element.userProfile.occuptation_tt];
                 rows.push(temp);
                 temp = ["WorkPlace",element.userProfile.work_place];
                 rows.push(temp); 
                  temp = ["Languages",element.userProfile.occuptation_tt];
                rows.push(temp);
                 temp = ["PriceRange",element.userProfile.work_place];
                 rows.push(temp);
                  temp = ["Rental Description",element.userProfile.occuptation_tt];
                rows.push(temp);
                 temp = ["StayDate",element.userProfile.work_place];
                 rows.push(temp);
                  temp = ["WakeUp Time",element.userProfile.occuptation_tt];
                rows.push(temp);
          
                 temp = ["Biography",element.userProfile.biography];
                rows.push(temp);
              temp = ["Interests",element.userProfile.interestes];
                 rows.push(temp);
                  temp = ["Habits",element.userProfile.habits];
                rows.push(temp);
              }
             });        

          for(var i = 0;i < a;i++){
                         rows1.push(rows[i]);
          //       console.log(rows1);
                  doc.autoTable(col, rows1,{
                   theme: 'grid',  
                   styles: {rowHeight: 11,overflow: 'linebreak'}, 
                    columnStyles: { 0: {columnWidth: 75},   1: {columnWidth: 110}},
                            margin: { top: 20, left: 20, right: 20, bottom: 0 },
               });
                  if(i+1 == a)
                  {
                        doc.addPage();
                        rows1=[];
              //  console.log("-----------");
                      if(a < rows.length){
                    a=a+17;
                      }
                      
                  }

          }
          //doc.save('txt.pdf');
          // window.open('Group.pdf', '_self');
            doc.output('save', 'Group.pdf');

         //   doc.open('txt.pdf');
              }
    } 

  
  
  async presentLoading() { 
    const loading = await this.loadingController.create({
      duration: 2000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  async customsmessage(msg) { 
    const loading = await this.loadingController.create({
      message: msg,
      duration: 3000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }


 getTeamsList() : void {
   // console.log('All teams gets list out under this function'); 
    let sendlist=[];
     sendlist.push(this.teamId);
     const input_data = {'teamId': sendlist}; 

    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
    }
    this.presentLoading();
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);

    this.http.post('https://txweb.kindlebit.com/team/users',input_data, { headers: headers }).subscribe((response: any) => { 
        this.teamListArr = response.teams; 
        this.userArr = response.teams; 
  //    console.log(response.teams);
      for(var i=0;i < this.teamListArr.length;i++){
        if(this.teamListArr[i]['userProfile'] != null){
        this.teamUserArr.push(this.teamListArr[i]['userProfile']);
        this.teamUserArr.push(this.teamListArr[i]['teams']);
        this.teamUserArr.push(this.teamListArr[i]['login']);
       }
      }
    //  console.log(this.teamUserArr);
         this.loadingController.dismiss();
      },error=>{ })    
  }

}


