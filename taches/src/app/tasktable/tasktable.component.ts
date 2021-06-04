import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.css']
})
export class TasktableComponent implements OnInit {

  constructor(public taskService: TasksService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if(this.userService.connected == '')
      this.router.navigate(['/login'])
    else
    this.taskService.allTasks(this.userService.connected);
  }

  switchEdit(state: boolean, idTask: number):void{
    if(this.taskService.tasks[idTask].editing && !state){
      let tache = this.taskService.tasks[idTask];
      this.taskService.editTask(tache.taskId,tache.nom,tache.detail,tache.etat,this.userService.connected)
    }
    this.taskService.tasks[idTask].editing = state;
  }
  changeState(idTask: number, state: number):void{
    let tache = this.taskService.tasks[idTask];
    this.taskService.editTask(tache.taskId,tache.nom,tache.detail,state,this.userService.connected)
  }
  newTask():void{
    this.taskService.newTask(this.userService.connected,'','');
  }
  deleteTask(id: number):void{
    this.taskService.deleteTask(this.taskService.tasks[id].taskId,this.userService.connected);
  }

}
