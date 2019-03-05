import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule, MatCardModule,MatTableModule, MatButtonModule,MatGridListModule, MatIconModule,MatListModule,MatInputModule,MatFormFieldModule } from '@angular/material';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { JustInComponent } from './just-in/just-in.component';
import { FeaturedComponent } from './featured/featured.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import { HumanizeDatePipe } from './humanize-date.pipe';
import { SearchComponent } from './search/search.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardsComponent,
    JustInComponent,
    FeaturedComponent,
    HumanizeDatePipe,
    SearchComponent,
    LandingPageComponent,
    ProjectPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
