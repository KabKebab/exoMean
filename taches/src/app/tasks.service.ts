import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  urlTasks = 'http://localhost:8080/api/tasks';
  public tasks:any[] = [];

  constructor(private http: HttpClient) { }

  allTasks(userId: string): any{
    this.tasks = [];
    this.http.get<any>(this.urlTasks+'/'+userId).subscribe((data)=>{
      for(let task of data) {
        this.tasks.push({nom:task.nom, detail:task.detail, etat:task.etat, editing:false, taskId:task._id})
      };
    })
  }
  oneTask(taskId: string){
    this.http.get<any>(this.urlTasks+'/getOne/'+taskId).subscribe((data)=>{
      this.tasks = [{nom:data[0].nom, detail:data[0].detail, etat:data[0].etat, editing:false, taskId:data[0]._id}]
    })
  }
  newTask(userId: string, nom: string, detail: string){
    this.http.post(this.urlTasks,{nom:nom,detail:detail,etat:1,user:userId}).subscribe(()=>{
      this.allTasks(userId);
    })
  }
  editTask(taskId: string, nom: string, detail: string, etat: number, userId: string){
    this.http.put(this.urlTasks+'/'+taskId,{nom:nom,detail:detail,etat:etat}).subscribe(()=>{
      this.allTasks(userId);
    })
  }
  deleteTask(taskId: string, userId: string){
    this.http.delete(this.urlTasks+'/'+taskId).subscribe(()=>{
      this.allTasks(userId);
    })
  }
}
