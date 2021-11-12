import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  DUMMY_DATA = [
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      date: 'Mar 4, 2021',
      amount: 200,
      status: 'Active',
    },
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      date: 'Mar 4, 2021',
      amount: 200,
      status: 'Active',
    },
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      date: 'Mar 4, 2021',
      amount: 200,
      status: 'Active',
    }
  ];
  dataDummyList = new MatTableDataSource();

  displayedDummyColumnsList: string[] = ['name', 'type', 'date', 'amount', 'status', 'actions'];

  constructor() { }

  ngOnInit(): void {
    this.dataDummyList.data = this.DUMMY_DATA;
  }

}
