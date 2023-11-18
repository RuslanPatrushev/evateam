import {Injectable} from '@angular/core';
import {Note} from '../models/note.model';
import {NOTES} from '../constants/notes.const';
import {FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteList$: BehaviorSubject<Array<Note>> = new BehaviorSubject<Array<Note>>([...NOTES]);
  currentNote$: BehaviorSubject<Note | undefined> = new BehaviorSubject<Note>(undefined);

  addNote(noteForm: FormGroup): void {
    this.noteList$.next([...this.noteList$.value, {
      id: Math.max(...this.noteList$.value.map((note) => note.id)) + 1,
      title: noteForm.value.title,
      description: noteForm.value.description.split('\n')
    }]);
  }

  setCurrentNote(id: number): void {
    this.currentNote$.next(this.noteList$.value.find((note) => note.id === id));
  }
}
