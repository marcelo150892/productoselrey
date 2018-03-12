import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAZkhC6qL43qfuIoLV2_wHwhA_4yK8d0pk",
      authDomain: "comprasapp-bc635.firebaseapp.com",
      databaseURL: "https://comprasapp-bc635.firebaseio.com",
      projectId: "comprasapp-bc635",
      storageBucket: "comprasapp-bc635.appspot.com",
      messagingSenderId: "507907766553"
    });
  }
}
