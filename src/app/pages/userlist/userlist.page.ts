import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { NavController,AlertController,ModalController,LoadingController ,ActionSheetController} from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';   
import { Socket } from 'ng-socket-io';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

 

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  nickname = '';
//  private socket;
  base_url : string = "";
  userId : string = "";
  ref_code : string = "";
  loggedInUsername : string = "";
  refferal : string = "";
  socket_url : string = "";
  teamListArr :any = [];
  origionalListArr :any = [];
  userListArr :any = [];
  dataArr :any = [];
  private  teamList: any[];
  private  teamFilteredList: any[];  
 


  constructor(
    private router: Router,
    private http: HttpClient,
    public formBuilder: FormBuilder, 
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public navCtrl: NavController,
    private socket: Socket, 
      private socialSharing: SocialSharing,

    ) { 
  this.userId = sessionStorage.getItem("loggedInId");
  this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
  this.ref_code = sessionStorage.getItem("ref_code");
  this.refferal = 'http://coliving.kindlebit.com/app.download?rc='+this.ref_code;


  this.base_url = environment.base_url;
  this.socket_url = environment.socket_url; 
  this.getTeamsList(); 
  }

  shareInfo(){
  this.socialSharing.share("Your referal link is:", "Invite", "", this.refferal);
  } 

  ngOnInit() {  
  }
  ionViewWillEnter() {
    this.getTeamsList(); 
  }
 
  joinChat(event) {  
    console.log(event);
    this.nickname = event.name; 
     this.router.navigate(['/group-detail-page'],{queryParams:{'teamId':event.teamId,'nickname':this.nickname,'owner':event.userId}});
  }
  
  
  async presentLoading() { 
    const loading = await this.loadingController.create({
      duration: 2000,
      cssClass: 'custom-class custom-loading scale-down-center',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  getTeamsList() : void {
//    console.log('All teams gets list out under this function');

    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
    }
    this.presentLoading();
    //const httpOptions = { headers: new HttpHeaders({'authorization': token })};

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);

    this.http.get(this.base_url+'getTeam', { headers: headers }).subscribe((response: any) => {
        this.teamListArr = response.teams; 
        this.origionalListArr = response.teams; 
 //       console.log(this.teamListArr);
     },error=>{ 
 //       console.log("ERROR");
        console.log(error.error);
        if(error.error == 'Unauthorized')
        {
          localStorage.clear();
          this.router.navigate(['/login']);
        }
     });     
  }

  addToMember(pvarId){
    //console.log(pvarId);    
    //this.router.navigate('add-member-to-team?teamId='+pvarId);
    //this.router.navigate(['add-member-to-team'],pvarId);
  }
  filter(ev:any){
    let val = ev.target.value;  
    if(val){ 
    this.teamFilteredList = this.teamListArr.filter((team: any) => 
                   team.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    this.teamList = this.teamFilteredList;

     this.teamListArr = this.teamFilteredList;
      }else{
        console.log("working in else"); 
        this.teamListArr = this.origionalListArr; 
      }
    }



}
