import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public userService: UsersService, private router: Router) { }
  formMod = this.formBuilder.group({
    nom: this.userService.curUser.nom,
    pass: this.userService.curUser.pass
    });

  ngOnInit(): void {
    if(this.userService.connected == '')
      this.router.navigate(['/login'])
  }

  validForm(): void {
    this.userService.editUser(this.userService.connected,this.formMod.value.nom,this.formMod.value.pass);
  }
}
