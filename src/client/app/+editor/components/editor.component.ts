import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { NameListService } from '../../shared/index';

@Component({
  selector: 'sd-editor',
  templateUrl: 'app/+editor/components/editor.component.html',
  styleUrls: ['app/+editor/components/editor.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class EditorComponent {
  newName: string;
  constructor(public nameListService: NameListService) {}

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
