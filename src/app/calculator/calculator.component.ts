import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

//   Calculatrice

title1 = "Calculatrice"; 
number1:number = 0;
number2:number = 0;
number3:number = 0;

add(){
    this.number3= this.number1+ this.number2;
   
};
sub(){
    this.number3= this.number1-this.number2;
};
multiply(){
    this.number3= this.number1*this.number2;
}
divide(){
    this.number3= this.number1/ this.number2;
}
clear(){
  this.number1= 0;
  this.number2= 0;
  this.number3= 0;
}
  constructor() { }

  ngOnInit(): void {
  }

}
