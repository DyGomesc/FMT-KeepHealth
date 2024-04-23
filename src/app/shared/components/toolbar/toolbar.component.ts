import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    CommonModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  userLogged: any; 

  constructor(private router: Router){}

  ngOnInit() {
    const localData = sessionStorage.getItem('userLogged');
    if (localData != null) {
      this.userLogged = JSON.parse(localData)
    }
  }

  goProfile(){
    this.router.navigate(['perfil'])
  }

  submitLogout() {
    sessionStorage.clear()
    this.router.navigate(['login'])
    alert('Usuário deslogado com sucesso!') 
  }



}
