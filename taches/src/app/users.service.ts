import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  connected = '';
  curUser = {nom:'',pass:''};
  usersUrl = 'http://localhost:8080/api/users';
  connectUrl = this.usersUrl + '/connect';
  constructor(private http: HttpClient, private router: Router) { }
  connection(login: string, pass: string){
    this.http.post<any>(this.connectUrl,{nom:login, pass:pass}).subscribe((data)=> {
      if(data.message == "ok"){
        this.connected = data.id;
        this.curUser.nom = login;
        this.curUser.pass = pass;
      }
      else{
        this.connected = '';
        this.curUser.nom = '';
        this.curUser.pass = '';
      }
      this.router.navigate(['/tasks']);
    });
  }

  newUser(nom: string, pass: string){
    this.http.post<any>(this.usersUrl,{nom:nom, pass:pass}).subscribe(()=>{
      this.router.navigate(['/login']);
    })
  }

  editUser(id: string, nom: string, pass: string){
    this.http.put<any>(this.usersUrl+'/'+id,{nom:nom, pass:pass}).subscribe(()=>{
      this.whoIsConnected();
    });
  }

  deleteUser(id: string){
    this.http.delete<any>(this.usersUrl+'/'+id);
  }
  whoIsConnected(){
    this.http.get<any>(this.usersUrl+'/'+this.connected).subscribe((data)=>{
      this.curUser.nom = data.nom;
      this.curUser.pass = data.pass;
      this.router.navigate(['/tasks']);
    });
  }
}
