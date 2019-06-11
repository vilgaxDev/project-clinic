import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './UserPages/forgot-password/forgot-password.component';
import { LoginComponent } from './UserPages/login/login.component';
import { RegisterComponent } from './UserPages/register/register.component';
import { FooterComponent } from './layouts/Components/footer/footer.component';
import { LogoComponent } from './layouts/Components/sidebar/elements/logo/logo.component';
import { SidebarComponent } from './layouts/Components/sidebar/sidebar.component';
import { AnalyticsComponent } from './Dashboards/analytics/analytics.component';
import { ChartjsComponent } from './Charts/chartjs/chartjs.component';
import { LineChartComponent } from './Charts/chartjs/examples/line-chart/line-chart.component';
import { BarChartComponent } from './Charts/chartjs/examples/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './Charts/chartjs/examples/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './Charts/chartjs/examples/radar-chart/radar-chart.component';
import { PieChartComponent } from './Charts/chartjs/examples/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './Charts/chartjs/examples/polar-area-chart/polar-area-chart.component';
import { DynamicChartComponent } from './Charts/chartjs/examples/dynamic-chart/dynamic-chart.component';
import { BubbleChartComponent } from './Charts/chartjs/examples/bubble-chart/bubble-chart.component';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import { ScatterChartComponent } from './Charts/chartjs/examples/scatter-chart/scatter-chart.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


// BOOTSTRAP COMPONENTS

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ChartsModule} from 'ng2-charts';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { PageTitleComponent } from './layouts/Components/page-title/page-title.component';

// HEADER

import { UserBoxComponent } from './layouts/Components/header/elements/user-box/user-box.component';
import { SearchBoxComponent } from './layouts/Components/header/elements/search-box/search-box.component';
import { HeaderComponent } from './layouts/Components/header/header.component';
import { ArchitectUIState, rootReducer } from './ThemeOptions/store';
import { from } from 'rxjs';




@NgModule({
  declarations: [

    // LAYOUT

    AppComponent,
    PageTitleComponent,
   

  // HEADER
  UserBoxComponent,
  SearchBoxComponent,
  HeaderComponent,
 

  // SIDEBAR

  SidebarComponent,
  LogoComponent,

  // FOOTER

  FooterComponent,

  // DEMO PAGES

  // Dashboards

  AnalyticsComponent,

  // User Pages

  ForgotPasswordComponent,
  LoginComponent,
  RegisterComponent,

  // CHARTS

  ChartjsComponent,

  // Chart.js Examples

  LineChartComponent,
  BarChartComponent,
  DoughnutChartComponent,
  RadarChartComponent,
  PieChartComponent,
  PolarAreaChartComponent,
  DynamicChartComponent,
  BubbleChartComponent,
  ScatterChartComponent,

  
    // Angular Bootstrap Components

    PerfectScrollbarModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
],
imports: [
  BrowserModule,
  AppRoutingModule,
  NgReduxModule,
  CommonModule,
  LoadingBarRouterModule,

  // Angular Bootstrap Components

  PerfectScrollbarModule,
  NgbModule,
  AngularFontAwesomeModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

  // Charts

  ChartsModule,
]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
              private devTool: DevToolsExtension) {

    type NewType = ArchitectUIState;

    this.ngRedux.configureStore(
      rootReducer,
      {} as NewType,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
