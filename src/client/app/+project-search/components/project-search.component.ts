/**
 * Created by Antony on 2016-05-09.
 */
import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import {GithubService} from '../../shared/services/github.service';

@Component({
  selector: 'project-search',
  providers: [GithubService],
  viewProviders: [],
  templateUrl: 'app/+project-search/components/project-search.component.html',
  styleUrls: ['app/+project-search/components/project-search.component.css'],
  directives: [FORM_DIRECTIVES],
  pipes: []
})
export class ProjectSearchComponent {
  searchText:string
  searchResultRepos: string[]
  searchResultOrg;

  constructor(private _githubService:GithubService) {
  }

  searchOrg(searchText) {
    this.searchResultOrg = null
    this._githubService.getOrg(searchText).subscribe(orgDetails => {
      this.searchResultOrg = orgDetails;
    });

  }
  
  searchReposForOrg(searchText) {
    this.searchResultOrg = null
    this._githubService.getReposForOrg(searchText).subscribe(repos => {
      this.searchResultRepos = repos;
    });
  }


}

