import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

interface Employee {
  profile: string;
  name: string;
  position: string;
  specialty: string;
  schedule: string;
  performance: string;
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gym'

  employees: Employee[] = [
    {
      profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcNdEFR29DXre9LTLKm6c4tVsc8hODLXlYg&s',
      name: 'Juan Pérez',
      position: 'Gerente',
      specialty: 'Administración',
      schedule: '9:00 - 18:00',
      performance: 'Excelente'
    },
    {
      profile: 'https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg',
      name: 'María López',
      position: 'Analista',
      specialty: 'Finanzas',
      schedule: '10:00 - 19:00',
      performance: 'Bueno'
    },
    {
      profile: 'https://media.istockphoto.com/id/1171169099/es/foto/hombre-con-brazos-cruzados-aislados-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=8qDLKdLMm2i8DHXY6crX6a5omVh2IxqrOxJV2QGzgFg=',
      name: 'Carlos García',
      position: 'Tecnólogo',
      specialty: 'Sistemas',
      schedule: '8:00 - 17:00',
      performance: 'Regular'
    }
  ];

  addEmployee(): void {
    // Aquí puedes implementar la lógica para agregar un nuevo empleado,
    // ya sea abriendo un modal o redirigiendo a otra vista.
    alert('Funcionalidad de agregar aún no implementada.');
  }
}