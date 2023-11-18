import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {NoteService} from '../../../core/services/note.service';
import {ActivatedRoute, Params} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {NOTE_UNSET_MESSAGE} from '../../../core/constants/note.const';

@Component({
  selector: 'eva-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent implements OnInit, OnDestroy {
  readonly noteUnsetMessage = NOTE_UNSET_MESSAGE;
  private ngUnsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    public noteService: NoteService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.router.params
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((params: Params): void => {
        const nodeId = +params.id;
        this.noteService.setCurrentNote(nodeId);
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
