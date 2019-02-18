import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule, MatCardModule,MatTableModule, MatButtonModule,MatGridListModule, MatIconModule,MatListModule,MatInputModule,MatFormFieldModule } from '@angular/material';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { JustInComponent } from './just-in/just-in.component';
import { FeaturedComponent } from './featured/featured.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import { HumanizeDatePipe } from './humanize-date.pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardsComponent,
    JustInComponent,
    FeaturedComponent,
    HumanizeDatePipe,
    SearchComponent,
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
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
