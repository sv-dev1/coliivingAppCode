import {Component} from '@angular/core';
import {NavController,	AlertController} from '@ionic/angular';
import {Calendar} from '@ionic-native/calendar/ngx';
import {HttpClient,	HttpHeaders,	HttpClientModule} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
	selector: 'page-calender',
	templateUrl: 'calenders.html'
})
export class CalendarsPage {

	date: any;
	tasksListArr: any;
	daysInThisMonth: any;
	daysInLastMonth: any;
	daysInNextMonth: any;
	monthNames: string[];
	currentMonth: any;
	currentYear: any;
	currentDate: any;
	eventList: any;
	selectedEvent: any;
	isSelected: any;
	clicked: any;
	calander: any;
	subtitles: any;
	data: any;
	base_url: string;
	assingTo: any;
	loggedInId: string = '';
	taskLength: any;


	constructor(private alertCtrl: AlertController,
		public navCtrl: NavController,
		private http: HttpClient,
		calander: Calendar) {
		this.calander = calander;
		this.base_url = environment.base_url;

	}
	ngOnInit() {
		this.loggedInId = sessionStorage.getItem("loggedInId");
		let token;
		if (sessionStorage.getItem("auth_token") != undefined) {
			token = sessionStorage.getItem("auth_token");
		}
		let headers = new HttpHeaders();
		headers = headers.set('Authorization', token);

		this.http.get(this.base_url + 'tasks', {
			headers: headers
		}).subscribe((response: any) => {
			this.tasksListArr = response.tasks;
		}, error => {
			console.log("ERROR");
		});

	}
	ionViewWillEnter() {
		this.date = new Date();
		this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		this.getDaysOfMonth();
		this.loadEventThisMonth();
	}


	getDaysOfMonth() {
		this.daysInThisMonth = new Array();
		this.daysInLastMonth = new Array();
		this.daysInNextMonth = new Array();
		this.currentMonth = this.monthNames[this.date.getMonth()];
		this.currentYear = this.date.getFullYear();
		if (this.date.getMonth() === new Date().getMonth()) {
			this.currentDate = new Date().getDate();
		} else {
			this.currentDate = 999;
		}

		var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
		var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
		for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
			this.daysInLastMonth.push(i);
		}

		var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
		for (var j = 0; j < thisNumOfDays; j++) {
			this.daysInThisMonth.push(j + 1);
		}

		var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
		// var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
		for (var k = 0; k < (6 - lastDayThisMonth); k++) {
			this.daysInNextMonth.push(k + 1);
		}
		var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
		if (totalDays < 36) {
			for (var l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth) + 7); l++) {
				this.daysInNextMonth.push(l);
			}
		}
	}

	goToLastMonth() {
		this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
		this.getDaysOfMonth();
	}

	goToNextMonth() {
		this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
		this.getDaysOfMonth();
	}

	loadEventThisMonth() {
		this.tasksListArr = new Array();
		var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
		var endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
		this.calander.listEventsInRange(startDate, endDate).then(
			(msg) => {
				msg.forEach(item => {
					this.tasksListArr.push(item);
				});
			},
			(err) => {
				console.log(err);
			}
		);
	}

	checkEvent(day) {
		var hasEvent = false;
		if (this.date.getMonth() + 1 <= 9 && day <= 9) {
			var thisDate1 = this.date.getFullYear() + "-0" + (this.date.getMonth() + 1) + "-" + "0" + day + " 00:00:00";
		} else if (this.date.getMonth() + 1 <= 9) {
			var thisDate1 = this.date.getFullYear() + "-0" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
		} else if (day <= 9) {
			var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + "0" + day + " 00:00:00";
		} else {
			var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
		}
//
		for (var i = 0; i < this.tasksListArr.length; i++) {
			this.assingTo = this.tasksListArr[i]['task.assignTo'];
			if (this.assingTo) {
				let checkExist = this.assingTo.includes(this.loggedInId);
				if (checkExist == true) {
					var dateCheck = this.tasksListArr[i]['task.due_date'].split('T');
					var firstDate = dateCheck[0];
					if ((firstDate + " 00:00:00" == thisDate1)) {
						
						hasEvent = true;
					}
				}
			}
		}
		return hasEvent;
	}

	selectDate(day) {
		this.isSelected = false;
		this.selectedEvent = new Array();
		if (this.date.getMonth() + 1 <= 9 && day <= 9) {
			var thisDate1 = this.date.getFullYear() + "-0" + (this.date.getMonth() + 1) + "-" + "0" + day + " 00:00:00";
		} else if (this.date.getMonth() + 1 <= 9) {
			var thisDate1 = this.date.getFullYear() + "-0" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
		} else if (day <= 9) {
			var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + "0" + day + " 00:00:00";
		} else {
			var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
		}

		this.tasksListArr.forEach(event => {
			
			let asssignToString = event['task.assignTo'];
			//if (asssignToString != null && asssignToString.indexOf(this.loggedInId) > 0) {
			if(event['task.due_date'] != null && event['task.due_date']){
				var dateCheck = event['task.due_date'].split('T');
				var firstDate = dateCheck[0];
				if ((firstDate + " 00:00:00" == thisDate1)) {
					this.isSelected = true;
					let dddd = dateCheck[0] + ' ' + dateCheck[1];
					this.selectedEvent.push({
						task_name: event['task.task_name'],
						due_date: dddd,
						notes: event['task.notes'],
						status: event['task.status']
					});
				}
			}
			//}
		});
		console.log('this.taskLength', this.selectedEvent);
		this.taskLength = this.selectedEvent.length;
		//console.log('this.taskLength', this.taskLength);
	}

}