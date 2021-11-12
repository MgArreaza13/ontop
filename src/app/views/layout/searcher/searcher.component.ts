import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  public search: string;

  constructor() { }

  ngOnInit(): void {
  }

  newHire(): void {
    console.log("call to service new hire")
  }

  filter(): void {
    console.log("call to service filter")
  }
}
