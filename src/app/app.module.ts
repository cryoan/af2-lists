import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
// Importing pages
import { HomePage } from '../pages/home/home';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyDnOU0uhDhtjE93Dqp_kjU_Ok50s8BzRmw",
    authDomain: "af2-lists-ddab3.firebaseapp.com",
    databaseURL: "https://af2-lists-ddab3.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "245468989477"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
