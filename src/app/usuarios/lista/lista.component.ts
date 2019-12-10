import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Subscription } from 'rxjs';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.subscription = this.usuarioService.getUsers()
      .subscribe( usuarios => {
        this.usuarios = usuarios;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
