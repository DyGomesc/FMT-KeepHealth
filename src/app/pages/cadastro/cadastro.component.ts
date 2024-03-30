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
      }

      const usuarioLocal = localStorage.getItem('usuarios');
      if (usuarioLocal != null) {
        const usuarios = JSON.parse(usuarioLocal);
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
      }else {
        const usuarios = [];
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
      } 
      alert("Cadastrado com Sucesso!")   
    }
  };

  fazerLogin(){
    this.router.navigate(['/login'])
  }
}
