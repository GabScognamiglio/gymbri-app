import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Esercizio } from 'src/app/interface/esercizio';
import { WorkoutPlanService } from 'src/app/service/workout-plan.service';

@Component({
  selector: 'app-crea-scheda',
  templateUrl: './crea-scheda.component.html',
  styleUrls: ['./crea-scheda.component.css']
})
export class CreaSchedaComponent {
  workoutPlan = {
    nome: '',
    descrizione: '',
    dataCreazione: '',
    session1: { nome: '', esercizi: [] as Esercizio[] },
    session2: { nome: '', esercizi: [] as Esercizio[] },
    session3: { nome: '', esercizi: [] as Esercizio[] },
    session4: { nome: '', esercizi: [] as Esercizio[] }
  };

  constructor(private workoutSrv: WorkoutPlanService, private router:Router) { }

  session1Exercises = [{ quantity: '', name: '' }];
  session2Exercises = [{ quantity: '', name: '' }];
  session3Exercises = [{ quantity: '', name: '' }];
  session4Exercises = [{ quantity: '', name: '' }];

  private openedSessions: Set<number> = new Set();

  toggleSession(sessionNumber: number) {
    if (this.openedSessions.has(sessionNumber)) {
      this.openedSessions.delete(sessionNumber);
    } else {
      this.openedSessions.add(sessionNumber);
    }
  }

  isSessionOpen(sessionNumber: number): boolean {
    return this.openedSessions.has(sessionNumber);
  }

  addExercise(sessionNumber: number) {
    switch (sessionNumber) {
      case 1:
        this.session1Exercises.push({ quantity: '', name: '' });
        break;
      case 2:
        this.session2Exercises.push({ quantity: '', name: '' });
        break;
      case 3:
        this.session3Exercises.push({ quantity: '', name: '' });
        break;
      case 4:
        this.session4Exercises.push({ quantity: '', name: '' });
        break;
    }
  }

  removeExercise(sessionNumber: number, index: number) {
    switch (sessionNumber) {
      case 1:
        this.session1Exercises.splice(index, 1);
        break;
      case 2:
        this.session2Exercises.splice(index, 1);
        break;
      case 3:
        this.session3Exercises.splice(index, 1);
        break;
      case 4:
        this.session4Exercises.splice(index, 1);
        break;
    }
  }


  creaScheda(form: NgForm) {
    if (form.valid) {
      this.workoutPlan = {
        nome: form.value.nome,
        descrizione: form.value.descrizione,
        dataCreazione: new Date().toISOString(), // Aggiungi la data di creazione
        session1: {
          nome: form.value.session1Nome,
          esercizi: this.session1Exercises.map(ex => ({
            name: ex.name,
            quantity: ex.quantity
          }))
        },
        session2: {
          nome: form.value.session2Nome,
          esercizi: this.session2Exercises.map(ex => ({
            name: ex.name,
            quantity: ex.quantity
          }))
        },
        session3: {
          nome: form.value.session3Nome,
          esercizi: this.session3Exercises.map(ex => ({
            name: ex.name,
            quantity: ex.quantity
          }))
        },
        session4: {
          nome: form.value.session4Nome,
          esercizi: this.session4Exercises.map(ex => ({
            name: ex.name,
            quantity: ex.quantity
          }))
        }
      };
      this.workoutSrv.addWorkoutPlan(this.workoutPlan)
      console.log(this.workoutPlan);
      form.reset();

      const alertElement = document.getElementById('confirmation-alert');
      if (alertElement) {
        alertElement.classList.remove('hidden');
        alertElement.classList.add('flex');
        setTimeout(() => {
          alertElement.classList.add('hidden');
          alertElement.classList.remove('flex');
          this.router.navigate(['/'])
        }, 2500);
      }

    } else {
      console.log('Il form non è valido.');
    }
  }
}
