import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NoteService} from '../../../core/services/note.service';
import {AddButton} from './models';
import {ADD_BUTTON} from '../../../core/constants/sidenav.const';

@Component({
  selector: 'eva-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  readonly addButton: AddButton = ADD_BUTTON;

  constructor(public noteService: NoteService) {
  }
}
