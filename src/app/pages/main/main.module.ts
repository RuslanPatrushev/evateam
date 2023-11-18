import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {NoteFormComponent} from '../../shared/components/note-form/note-form.component';
import {SharedModule} from '../../shared/shared.module';
import {NoteComponent} from '../../shared/components/note/note.component';
import {mainRoutes} from './main-routes';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
          path: mainRoutes.main.path, component: MainComponent,
          children: [
            {
              path: mainRoutes.noteForm.path, component: NoteFormComponent
            },
            {
              path: mainRoutes.note.path, component: NoteComponent,
            },
            {
              path: mainRoutes.default.path, component: NoteComponent,
            },
          ]
        }
      ]
    ),
    SharedModule,
  ],
})

export class MainModule {
}
