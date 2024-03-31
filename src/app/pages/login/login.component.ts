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

  usuariosCadastrados: any[] = [];

  loginObj: any = {
    email: "",
    senha: ""
  };

  constructor(private router: Router) { };

  ngOnInit() {
    const localData = localStorage.getItem('usuariosCadastrados');
    if (localData != null) {
      this.usuariosCadastrados = JSON.parse(localData)
    }
  };

  entrar() {
    const usuarioCadastrado = this.usuariosCadastrados.find(m => m.email == this.loginObj.email && m.senha == this.loginObj.senha);
    if (usuarioCadastrado != undefined) {
      this.router.navigateByUrl('/home')
      alert("Usuário Logado com Sucesso!")
    } else {
      alert("Dados de Login incorretos.")
    }
  };

  resetSenha() {
    
  };

  cadastrar() {
    this.router.navigateByUrl('/cadastro')
  };

}
