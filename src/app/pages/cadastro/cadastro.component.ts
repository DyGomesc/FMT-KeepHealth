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

  
  cadastroUsuario = new FormGroup({
    nome: new FormControl(''),
    dataNascimento: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl(''),
  })

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
