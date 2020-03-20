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
import { File ,IWriteOptions} from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { DatePipe } from '@angular/common';

declare var jsPDF: any;

@Component({
  selector: 'app-group-detail-page',
  templateUrl: './group-detail-page.page.html',
  styleUrls: ['./group-detail-page.page.scss'],
})
export class GroupDetailPagePage implements OnInit {

 nickname = '';
 submitted = false;
//  private socket;
  base_url : string = "";
  ref_link : string = "";
  teamId : string = "";
  owner : string = "";
  userId : string = "";
  roleId:any;
  ref_code : string = "";
  loggedInUsername : string = "";
  refferal : string = "";
  socket_url : string = "";
  web_url:string="";
  fileName : any;
  teamListArr :any = [];
  origionalListArr :any = [];
  userListArr :any = [];
  teamUserArr :any = [];
  userArr :any = [];
  pdfListArr:any=[];
  private  teamList: any[];
  private  teamFilteredList: any[];  
  update_from: FormGroup;
  myRand: number;
  image_base_url : string = "";
  image_url : string = "";
  userImg:any=[];
  ImageObj: any = [];
  imageBase;
  file_path : string = "assets/images/Logo-colive.png"; 
  loading: any;
  imageData:any;
  nationalityId:any=[];
  countriesArr:any=[];
  showProperty:boolean=true;
   propertId:any;

  constructor(
    private route: ActivatedRoute,public popoverController: PopoverController,
    private clipboard: Clipboard,
    private router: Router, public formBuilder: FormBuilder, 
    private http: HttpClient,
    private socialSharing: SocialSharing,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public viewCtrl: ModalController,
    private file: File,
    private base64: Base64,
    private fileOpener: FileOpener,
    private datePipe:DatePipe
    ) {
          this.image_base_url = environment.image_base_url;  
          this.web_url =environment.website_url;
          this.userId = sessionStorage.getItem("loggedInId");
          this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
          this.ref_code = sessionStorage.getItem("ref_code");
          this.refferal = this.web_url+'app.download?rc='+this.ref_code; 
          this.base_url = environment.base_url;
          this.socket_url = environment.socket_url; 
          this.roleId=sessionStorage.getItem("roleId");
          this.route.queryParams.subscribe(params => { 
              this.teamId = params['teamId'];
              this.owner = params['owner'];
              this.nickname = params['nickname'];  
          });   
          this.ref_link = this.web_url+'app.download?rc='+this.ref_code+ '/'+this.teamId;
  }

  ngOnInit() {
       var imgUrl = 'assets/images/Logo-colive.png';
       var codedPic = this.convertToDataURLviaCanvas(imgUrl, function (base64Img) {
            codedPic = base64Img;
        });
       console.log(this.roleId);
       if(this.roleId == 3){
          this.showProperty=false;
       }
        codedPic.then((msg: string) => {  this.imageData = msg; });

   }

  ionViewWillEnter() {
      this.getTeamsList(); 
      this.getPdfUserList();
      this.getCountries();
      this.getPropertyLink();
  }
  
  joinChat() {  
     this.router.navigate(['/chatroom'],{queryParams:{'teamId':this.teamId,'nickname':this.nickname,'owner':this.userId}});
  }

  get f() { return this.update_from.controls; } 

  async confirmDelete(id,msg) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
               this.removeUserCall(id);
          }
        }  
      ]
    });

    await alert.present();
  }

  removeUserCall(userId_to_remove) {
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

  removeUserApi(userId_to_remove,obj) {
    if(obj == 'remove'){
          this.confirmDelete(userId_to_remove,'You really want to remove user from the  group?');
     }
    if(obj == 'left'){
          this.confirmDelete(userId_to_remove,'You really want to leave from the  group?');
     }
  }

  update(form) {
    //    console.log(form);
      this.submitted = true; 
      if (this.update_from.invalid) {
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
       
        this.customsmessage(response.message);
        },error=>{  
           console.log(error.error); 
        });  
      }
  }    
  
  shareInfo(){
     this.socialSharing.share("Your referal link is:", "Invite", "", this.ref_link);
  } 

  joinGroupShare(){
       this.socialSharing.share("", "Invite", "", this.teamId);
  } 

  copyText(event) {
     this.clipboard.copy(this.ref_link);
     this.customsmessage('link has been successfully copied...');
  }

  copyTextCode(event) {
     this.clipboard.copy(event);
     this.customsmessage('Group code has been successfully copied...');
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
      cssClass: 'custom-class custom-loading1',
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

    this.http.post(this.base_url+'/team/users',input_data, { headers: headers }).subscribe((response: any) => { 
        this.teamListArr = response.teams; 
        this.userArr = response.teams; 
    //    console.log(response.teams);
    this.userArr.forEach(obj =>{
      console.log(obj.login.username);
      });
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

  getPdfUserList(){
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

        this.http.post(this.base_url+'/team/users/pdf',input_data, { headers: headers }).subscribe((response: any) => { 
            this.pdfListArr = response.teams; 
            this.userArr = response.teams; 
             this.loadingController.dismiss();
          },error=>{ })    
  }

  convertToDataURLviaCanvas(url, outputFormat){
    return new Promise( (resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function(){
        let canvas = <HTMLCanvasElement> document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        //callback(dataURL);
        //  this.imageData=dataURL;
        canvas = null;
        resolve(dataURL); 
      };
        img.src = url;
    });
  }

  getCountries(){
        let token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);

        this.http.get(this.base_url + 'countries', {
            headers: headers
        }).subscribe((response: any) => {
            this.countriesArr=response.countries;
        });
  }

  getNationality(nationId){
      let temp=[];
      let nationName=[];
      this.nationalityId=[];
      temp = nationId.split(",");
      this.nationalityId.push(temp);
       console.log(this.nationalityId);
     //  console.log(this.countriesArr);
      this.nationalityId.forEach(element => {
        nationName=[];
        element.forEach(item => { 
          for (let order of this.countriesArr) {
              if(order.id == item){
                  nationName.push(order.name);
              }
          }
        });

      });
      return nationName;
  }

  downloadPDF() {  
   // console.log(this.imageData);
    this.presentLoading();
    var b_img;
    if(this.pdfListArr.length  != 0){
      var doc = new jsPDF();
      var col = ["Fields", "Inputs"];
      var rows = [];
      var rows1 = [];
      var temp=[];
      var a = 11;
      var contentType = 'image/jpeg'

      this.pdfListArr.forEach(element => {
        if(element.userProfile)
          {
              //console.log(element.userProfile);
              temp = ["Name",element.userProfile.firstName];
                rows.push(temp);
              temp = ["Surname",element.userProfile.lastName];
                rows.push(temp);
              temp = ["Email",element.userProfile.email];
                rows.push(temp);
              temp = ["Nationality",this.getNationality(element.userProfile.Nationality)];
                rows.push(temp);
              if(element.userProfile.dob == 'Invalid date' || element.userProfile.dob == 'null' || element.userProfile.dob == ''){
                temp = ["Date of birth"," "];
                rows.push(temp);
              }
              else{
                temp = ["Date of birth",this.datePipe.transform(element.userProfile.dob,'MMMM d, y')];
                rows.push(temp);
              }
              temp = ["Phone Number",element.userProfile.phoneNo];
              rows.push(temp);
              
              if(element.userProfile.address){
                 temp = ["Contact Address",element.userProfile.address];
                  rows.push(temp);
              }
              else
              {
                temp = ["Contact Address",""];
                rows.push(temp);
              }
             
              if(element.userProfile.occuptation_tt == 6){
                temp = ["Occupation","Full-time Internship"];
                rows.push(temp);
              }
              else if(element.userProfile.occuptation_tt == 5){
                 temp = ["Occupation","Part Time Internship"];
                 rows.push(temp);
              }
              else if(element.userProfile.occuptation_tt == 4){
                temp = ["Occupation","Full-time Student"];
                 rows.push(temp);
              }
              else if(element.userProfile.occuptation_tt == 3){
                temp = ["Occupation","Full-time Student"];
                rows.push(temp);
              }
              else if(element.userProfile.occuptation_tt == 2){
                temp = ["Occupation","Part-time Employee"];
                rows.push(temp);
              }
              else if(element.userProfile.occuptation_tt == 1){
                 temp = ["Occupation","Full-time Employee"];
                 rows.push(temp);
              }
              else{
                temp = ["Occupation"," "];
                 rows.push(temp);
              }
              temp = ["Work place / study place",element.userProfile.work_place];
               rows.push(temp); 
              temp = ["Biography",element.userProfile.biography];
               rows.push(temp);
              temp = ["Previous city of residence ",element.userProfile.previous_city];
               rows.push(temp);
          }  
        });   
          var images1;     
          for(var i = 0;i < a;i++){
        //       doc.addImage(images1, 'PNG', 90,10,0,20)
               rows1.push(rows[i]);
               var images =[];
               doc.autoTable(col, rows1,{
                      theme: 'grid',  
                      styles: {rowHeight: 11,overflow: 'linebreak'}, 
                      columnStyles: { 0: {columnWidth: 75},   1: {columnWidth: 110}},
                      margin: { top: 30, left: 20, right: 20, bottom: 0 },
                      createdCell: function(cell, opts) {
                          if(opts.row.index == 11){
                              //   console.log(opts.row);
                                opts.row.styles.rowHeight = 50;
                          }
                      },
                      drawCell: function(cell, opts) {
                          if (opts.column.dataKey === 1 && opts.row.index === 11) {
                              console.log(b_img); 
                              var img = images1;
                              opts.row.styles.fillColor=[239, 154, 154];
                              images.push({
                                elem: img,
                                  x: cell.textPos.x,
                                  y: cell.textPos.y
                              });
                            }
                      },
                      afterPageContent: function() {
                        console.log(images);
                        for (var i = 0; i < images.length; i++) {
                          doc.addImage(images[i].elem, 'PNG', images[i].x, images[i].y,20,20);
                        }
                      }
                  });
                  if(i+1 == a)
                     {
                      doc.addPage();
                      rows1=[];
                      if(a < rows.length){
                        a=a+11;
                      }
                    }
      }
      //  doc.output('save', this.nickname + '.pdf');

        let pdfOutput = doc.output();
            this.presentLoading();
            let buffer = new ArrayBuffer(pdfOutput.length);
            let array = new Uint8Array(buffer);
            for (var i = 0; i < pdfOutput.length; i++) {
                array[i] = pdfOutput.charCodeAt(i);
            }
        // For this, you have to use ionic native file plugin
             const directory = this.file.externalApplicationStorageDirectory ;
         //  alert(directory);
            this.myRand=this.random();
            console.log(this.myRand);
            this.fileName = this.nickname+".pdf";
         /*   this.fileName = this.fileName.split('.');
            let p_name = this.fileName[0];
            let f_name = p_name.replace(p_name, this.nickname);
            this.fileName = f_name+".pdf";/
                         console.log(this.fileName);*/
            console.log(directory+this.fileName);
            this.file.writeFile(directory,this.fileName,buffer,{replace:true})
            .then((success)=> 
                 this.fileOpener.open(directory+this.fileName, 'application/pdf') .then(() => console.log('File is opened'))
             )
            .catch((error)=> console.log("Cannot Create File",error));
        
    }
  } 
    random(): number {
       let rand = Math.floor(Math.random()*20)+1;
       return rand;
    }
  

    getPropertyLink(){
      let token; 
      if(sessionStorage.getItem("auth_token")!=undefined){
      token = sessionStorage.getItem("auth_token"); 
      }
      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      let temp=[];

      let headers = new HttpHeaders();
      headers = headers.set('Authorization', token);
      this.http.get(this.base_url+'team/property/'+this.teamId, { headers: headers }).subscribe((response: any) => {
        if(response['requests'][0] != undefined){
          this.propertId=response['requests'][0]['propertyId'];
        }
      },error=>{ 
        console.log("ERROR");
        console.log(error.error);
      }); 
    }


}
