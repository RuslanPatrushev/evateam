import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NoteService} from '../../../core/services/note.service';
import {NoteForm} from './model';
import {NOTE_FORM} from '../../../core/constants/note-form.const';

@Component({
  selector: 'eva-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteFormComponent {
  noteFormGroup: FormGroup;
  readonly noteForm: NoteForm = NOTE_FORM;

  constructor(private noteService: NoteService) {
    this.noteFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  onAddNote(): void {
    this.noteService.addNote(this.noteFormGroup);
    this.noteFormGroup.reset();
  }

}
