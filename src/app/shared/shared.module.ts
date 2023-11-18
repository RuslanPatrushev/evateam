import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {HeaderComponent} from './components/header/header.component';
import {NoteComponent} from './components/note/note.component';
import {NoteFormComponent} from './components/note-form/note-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    NoteComponent,
    NoteFormComponent
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    NoteComponent,
    NoteFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule {
}
