import { Component } from '@angular/core';
import { FormsModule, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // Criação do LocalStorage
  usuariosCadastrados: any[] = [];

  // Criação Model object
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required ,Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private router: Router) { };

  // Utilizado a função ngOninit() para chamar o localStorage assim que a página for carregada.
    ngOnInit() {
      const localData = localStorage.getItem('usuariosCadastrados');
      if (localData != null) {
        this.usuariosCadastrados = JSON.parse(localData)
      }
  };

  
  entrar() {
    const userRegistered = this.usuariosCadastrados.find(m => m.email == this.loginForm.value.email && m.senha == this.loginForm.value.senha);

    if (userRegistered != undefined) {
        this.router.navigateByUrl('/home');
        sessionStorage.setItem('userLogged', JSON.stringify(userRegistered));
        alert("Usuário Logado com Sucesso!");
    } else {
        alert("Dados de Login incorretos.");
    }
  }
  
  resetSenha() {
    const email = prompt('Digite o seu email:');

    if (email) {
      const usuarioEncontrado = this.usuariosCadastrados.find((usuario: any) => usuario.email === email);

      if (usuarioEncontrado) {
        usuarioEncontrado.senha = 'a1b2c4d4';
        localStorage.setItem('usuariosCadastrados', JSON.stringify(this.usuariosCadastrados));
        alert('Senha redefinida com sucesso! Nova senha: a1b2c4d4');
      } else {
        alert('Usuário não encontrado com o email informado.');
      }
    } else {
      alert('Email não fornecido. Operação cancelada.');
    }
  }

  // Função cadastrar() redireciona o usuário para a página de cadastro.
  cadastrar() {
    this.router.navigateByUrl('/cadastro')
  };

}
