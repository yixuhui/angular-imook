import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatIconModule, MatIconRegistry, MatToolbarModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {loadSvgResources} from "../utils/svg";

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  exports: [
    SharedModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() private parentModule: CoreModule,
    private ir: MatIconRegistry,
    private ds: DomSanitizer) {
    if (this.parentModule) {
      throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块。');
    }
    loadSvgResources(this.ir, this.ds);
  }
}
