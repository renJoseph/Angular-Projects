import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public noteData: Note;

  constructor(
    private note: NoteService,
    private aR: ActivatedRoute
  ) {  }

  ngOnInit() {
    let id = this.aR.snapshot.params.id;
    this.note.getNoteById(id).subscribe((data) => {
      this.noteData = data;
      console.log(this.noteData);
    });
  }


  updateNote(){
    this.note.updateNote(this.noteData).subscribe();
  }

}
