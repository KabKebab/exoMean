import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formConnect = this.formBuilder.group({
    nom: '',
    pass: ''
    });
    
  constructor(private formBuilder:FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
  }
  validForm(): void{
    this.userService.connection(this.formConnect.value.nom,this.formConnect.value.pass);
  }

}
