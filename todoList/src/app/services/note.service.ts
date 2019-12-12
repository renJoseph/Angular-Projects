import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { Note } from '../models/note.model'

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { 
  }

  saveNote(note: Note){
    this.http.post("http://localhost:8080/notes/save", note, this.httpOptions)
  }

  getNoteById(id){
    return this.http.get<Note>('http://localhost:8080/notes/get/' + id)
  }

  getAllNotes(){
    return this.http.get('http://localhost:8080/notes/get')
  }
  updateNote({id, ...note}: Note){
    return this.http.post<Note>(`http://localhost:8080/notes/update/${id}`, note, this.httpOptions)
  }
  deleteNote(id){
    return this.http.delete('http://localhost:8080/notes/delete/' + id)
  }
}
