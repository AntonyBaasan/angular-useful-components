import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { ToolbarComponent } from './toolbar.component';
import { NameListService } from '../shared/index';
import { HomeComponent } from '../+home/index';
import { AboutComponent } from '../+about/index';
import { EditorComponent } from '../+editor/index';
import { ProjectSearchComponent } from '../+project-search/index';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {
    name: 'Projects',
    path: '/',
    component: ProjectSearchComponent,
    useAsDefault: true//not there yet  (https://angular.io/docs/ts/latest/guide/router.html#!#default)
  },
  // {
  //   path: '/',
  //   component: HomeComponent
  // },
  {
    name: 'About',
    path: '/about',
    component: AboutComponent
  },
  {
    name: 'Editor',
    path: '/editor',
    component: EditorComponent
  }
])
export class AppComponent {}
