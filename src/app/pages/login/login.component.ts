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
  // Criação do LocalStorage
  usuariosCadastrados: any[] = [];

  // Criação Model object
  loginObj: any = {
    email: "",
    senha: ""
  };

  constructor(private router: Router) { };

  // Utilizado a função ngOninit() para chamar o localStorage assim que a página for carregada.
    ngOnInit() {
    const localData = localStorage.getItem('usuariosCadastrados');
    if (localData != null) {
      this.usuariosCadastrados = JSON.parse(localData)
    }
  };

  // A função Entrar() está atrelada ao botão type=Submit no HTML, 
  // Ela faz uma verificação se o usuário já possui cadastro na base de dados (LocalStorage), fazendo uma busca pelo Email e Senha cadastrados.
  // Se ao digitar as informações e o usuário já estiver cadastrado, será redirecionado para a página /home.
  // Se não digitar os dados corretos, irá receber a mensagem "Dados de login incorretos"
  entrar() {
    const usuarioCadastrado = this.usuariosCadastrados.find(m => m.email == this.loginObj.email && m.senha == this.loginObj.senha);
    if (usuarioCadastrado != undefined) {
      this.router.navigateByUrl('/home')
      alert("Usuário Logado com Sucesso!")
    } else {
      alert("Dados de Login incorretos.")
    }
  };

  // A função ResetSenha(), está atrelada ao link "Esqueceu sua senha?" no HTML,
  // Ao clicar no link irá abrir um Prompt solicitando que o usuário digite o seu email cadastrado.
  // Será feita uma verificação se o email digitado está cadastrado na base de dados (LocalStorage),
  // Se o usuário for localizado sua senha será modificada para o padrão "a1b2c4d4" e receberá um alert informando que a senha foi redefinida.
  // Se o usuário não estiver cadastrado, receberá um alert informando que o usuário não foi localizado com o email informado.
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
