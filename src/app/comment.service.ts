import { Injectable } from '@angular/core';
import {Comment} from './models';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  getComments(logId:String=''): Observable <Comment[]> {
   const comment_url = Env.api_url+'comments?log='+logId;
   return this.http.get<Comment[]>(comment_url);
  }
}
