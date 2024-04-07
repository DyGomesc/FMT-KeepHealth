import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  // Criação de títulos dinâmicos
  titleForm: string = "Cadastre-se"
  titleMain: string = "Sua jornada saudável começa aqui!"

  constructor(private router: Router){}

  // Criação Model FormGroup
  cadastroUsuario = new FormGroup({
    nome: new FormControl(''),
    dataNascimento: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl(''),
  })

  // Função cadastrar() utilizando o ReactiveForms, esta função está atrelada ao botão type=Submit e captura os dados inseridos no HTML.
  // Primeiramente ela faz uma verificação se a Senha e ConfirmarSenha estão iguais.
  // Se as senhas estiverem iguais irá salvar os dados capturados em um objeto na base de dados (LocalStorage),
  // após será exibido um alert informando que o usuário foi cadastrado com sucesso e será redirecionado para a página /login
  // Se as senhas não forem iguais, será exibido um alert informando que as senhas não conferem

  cadastrar(){   
    if (this.cadastroUsuario.value.senha === this.cadastroUsuario.value.confirmarSenha) {
      const usuario = {
        nome: this.cadastroUsuario.value.nome,
        email: this.cadastroUsuario.value.email,
        dataNascimento: this.cadastroUsuario.value.dataNascimento,
        senha: this.cadastroUsuario.value.senha,
        auth: "",
      }

      const usuarioLocal = localStorage.getItem('usuariosCadastrados');
      if (usuarioLocal != null) {
        const usuariosCadastrados = JSON.parse(usuarioLocal);
        usuariosCadastrados.push(usuario);
        localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosCadastrados))
      }else {
        const usuariosCadastrados = [];
        usuariosCadastrados.push(usuario);
        localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosCadastrados))
      } 
      alert("Cadastrado com Sucesso!")
      this.router.navigateByUrl('/login')        
    } else{
      alert("As Senhas não conferem!")
    }
  };

  // Função fazerLogin() redireciona o usuário para a página de login.
  fazerLogin(){
    this.router.navigateByUrl('/login')
  }
}
