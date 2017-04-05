import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { KjComponent } from './page/kj.component';
import { ZjComponent } from './page/zj.component';
import { CjComponent } from "./page/cj.component";
import {BgComponent} from "./page/bg.component";
import {JbComponent} from "./page/jb.component";
import { NavbarComponent } from './navbar.component';
import {RightbarComponent} from "./rightbar.component";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    KjComponent,
    ZjComponent,
    CjComponent,
    BgComponent,
    JbComponent,
    NavbarComponent,
    RightbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'page/zj', component: ZjComponent},
      { path: 'page/kj', component: KjComponent},
      { path: 'page/cj', component: CjComponent},
      { path: 'page/bg', component: BgComponent},
      { path: 'page/jb', component: JbComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
