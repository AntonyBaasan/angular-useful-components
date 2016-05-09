import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { ToolbarComponent } from './toolbar.component';
import { NameListService } from '../shared/index';
import { AboutComponent } from '../+about/index';
import { EditorComponent } from '../+editor/index';
import { ProjectSearchComponent } from '../+project-search/index';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@Routes([
  {
    path: '/',
    component: ProjectSearchComponent
    // useAsDefault: true//not there yet  (https://angular.io/docs/ts/latest/guide/router.html#!#default)
  },
  // {
  //   path: '/',
  //   component: HomeComponent
  // },
  {
    path: '/about',
    component: AboutComponent
  },
  {
    path: '/editor',
    component: EditorComponent
  }
])
export class AppComponent {}
