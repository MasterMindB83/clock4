import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {
  @ViewChild('secHand' , { static: false })
  secHandRef!: ElementRef<HTMLDivElement>;
  @ViewChild('minHand' , { static: false })
  minHandRef!: ElementRef<HTMLDivElement>;
  @ViewChild('hourHand' , { static: false })
  hourHandRef!: ElementRef<HTMLDivElement>;
  @ViewChild('analogClock' , { static: false })
  analogClock!: ElementRef<HTMLDivElement>;

  @Input('width') width=200;

  @Input('background-color') backgroundColor="transparent";
  @Input("discreet-seconds") discreetSeconds=true;
   audio = new Audio();
  @Input('interval') timeinterval=1000;
  @Input('tick-sound') playTickSound =false;

  constructor() { }

  ngOnInit(): void {
    //this.timeinterval=1000;
    
    setTimeout(() => {
      this.analogClock.nativeElement.style.width = this.width + 'px';
      this.analogClock.nativeElement.style.height = this.width + 'px';
      this.analogClock.nativeElement.style.backgroundColor = this.backgroundColor;

        console.log(this.timeinterval);
        this.audio.src = "assets/clock_tick.mp3";
        this.audio.load();
    }, 50);


    setInterval(()=>{

      //alert(this.timeinterval);
      this.updateClock();
    },this.timeinterval);
  }
  updateClock()
  {
    let currDate = new Date();
    let hour=currDate.getHours();
    let minutes =currDate.getMinutes();
    let seconds = currDate.getSeconds();
    let miliseconds = currDate.getMilliseconds();
    if(this.discreetSeconds)
    {
      this.secHandRef.nativeElement.style.transform = 'translate(33%,-342%) rotate('+(seconds*6 )+'deg)';
     //this.audio.play();
     this.playAudio();
    }
    else
    {
      this.secHandRef.nativeElement.style.transform = 'translate(33%,-342%) rotate('+(seconds*6 + miliseconds/1000*6)+'deg)';
    }
    this.minHandRef.nativeElement.style.transform = 'translate(34%,-238%) rotate('+(minutes*6)+'deg)';
    this.hourHandRef.nativeElement.style.transform = 'translate(34%,-136%) rotate('+(hour*30 + minutes*0.5)+'deg)';

 }
 playAudio()
 {
   if(this.playTickSound)
      this.audio.play();
    //console.log(this.audio.src);
 }
}
