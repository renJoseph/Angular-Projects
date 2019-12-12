import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public noteID;

  allNotesData;
  constructor(
    private notes: NoteService,
    private router: Router
    ) { }

  ngOnInit() {
    this.notes.getAllNotes().subscribe((data: any) => {
      this.allNotesData = data;
    });
  }

  getNoteId(){

  }

  viewNote(noteID){
    this.router.navigate(["view", noteID]);
  }

  deleteNote(){
    // this.notes.deleteNote()
  }

}
