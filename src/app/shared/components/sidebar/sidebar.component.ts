import { Component, Input, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common'

export type MenuItem = {
  icon: string;
  label: string;
  route?: string
}

export type logoutItem = {
  icon: string;
  label: string;
  route?: string
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  userlogged: any;

  

  sideNavCollapsed = signal(false)
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val)
  };

  menuItems = signal<MenuItem[]>([
    // PAGES
    {
      icon: 'home',
      label: 'Home',
      route: 'home'
    },
    {
      icon: 'menu_book',
      label: 'Dietas',
      route: 'dietas'
    },
  ]);

  logoutItems = signal<logoutItem[]>([
    {
      icon: 'logout',
      label: 'Sair',
      route: ''
    },
  ])
  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100')


  submitLogout() {
      sessionStorage.clear()
      alert('Usuário deslogado com sucesso!')    
  }


}
