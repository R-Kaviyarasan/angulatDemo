import { Component,EventEmitter,Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,OnDestroy {
  @Input() simpleInput: any;
  @Input() parentMessage:any;
  outputMessage:string="Child to Parent";
  @Output() messageEvent=new EventEmitter<string>();
  constructor(){ }
  ngOnInit(): void {
    this.parentMessage=String;
    
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    
  }
  sendMessage():void{
    this.messageEvent.emit(this.outputMessage);
  }
  ngOnDestroy(): void {
    this.simpleInput=null;
  }
}


