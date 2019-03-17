import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css']
})
export class TabsetComponent implements OnInit {

  constructor() { }

  openBlank(url: string){
    window.open(url, "_blank");
  }

  ngOnInit() {
  }

}
