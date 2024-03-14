import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-ag';
  email = 'bustamantevf@gmail.com';
  btnDisabled = true;
  contadorOvejas = 1;
  persona = {
    nombre: ""
  }

  mostrarAlert(){
    alert("Este é um alerta!");
  }

  contarOveja() {
    this.contadorOvejas += 1;
  }

}
