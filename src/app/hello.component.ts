import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styles: []
})
export class HelloComponent  {
  data = [
    { first: 'penop', last: 'bill', handle: 'yes'},
    { first: 'kily', last: 'jide', handle: 'no' },
    { first: 'ptiy', last: 'luoi', handle: 'no'},
    { first: 'hica', last: 'fhi', handle: 'yes'}
  ];

  ngOnInit(){
    this.data;
  }

  del(d){
  //  const index = this.data.indexOf(d);
   this.data.splice(this.data.indexOf(d),1);
  }
}
