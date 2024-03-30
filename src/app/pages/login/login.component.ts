import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login = {
    loginEmail: "",
    loginSenha: ""
  }

  constructor(private router: Router) { }

  entrar() {

    // const usuarioLocal = localStorage.getItem('usuarios')

    // const usuarioAtual = usuarios.find((usuario) => usuarios.email === this.login.loginEmail && usuarios.senha === this.login.loginSenha);
    // if (usuarioAtual != undefined) {
    //   alert("Usuário Encontrado...")
    //   localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAtual))
    //   this.router.navigateByUrl('/home')
    // } else {
    //   alert("Usuário não encontrado!")
    // }


    // if (this.login.loginEmail && this.login.loginSenha) {
    //   this.router.navigateByUrl('/home')
    // }
  };

  cadastrar() {
    this.router.navigateByUrl('/cadastro')
  }

}
