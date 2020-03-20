import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class FcmService {

  constructor(private firebase: Firebase,
              private afs: AngularFirestore,
              private platform: Platform) {}

  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.firebase.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }
    console.log("getToken", token);

    localStorage.setItem("device_token" , token);

    this.saveToken(token);
  }

  private saveToken(token) {
    if (!token) return;

    console.log("saveToken", token);
 
    const devicesRef = this.afs.collection('devices');

    console.log(devicesRef);

    const data = {
      token,
      userId: "testUserId"
    };

    return devicesRef.doc(token).set(data);
  }

  onNotifications() {
    return this.firebase.onNotificationOpen();
  }
}
