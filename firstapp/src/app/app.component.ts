import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Hello child component";
  userText : any;
  ngOnInit(){
    
  }
  message='No Message';
    receiveMessage($event:any){
      this.message=$event;
    }

}
