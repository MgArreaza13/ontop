import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';



@NgModule({
  declarations: [HeaderComponent, SidenavListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SidenavListComponent
  ]
})
export class LayoutModule { }
