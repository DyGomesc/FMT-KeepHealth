import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // Utilizado a função ngOninit() para chamar o localStorage assim que a página for carregada.
  usuariosCadastrados: any[] = [];
  ngOnInit() {
    const localData = localStorage.getItem('usuariosCadastrados');

    if (localData != null) {
      this.usuariosCadastrados = JSON.parse(localData)
    }
  }


  // Falta criar método para buscar nome do usuário logado.
  nomeUsuario: String = "Usuário Logado"
  
}
