import { Component } from '@angular/core';
import { WorkoutPlanService, WorkoutPlan } from 'src/app/service/workout-plan.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  workoutPlans: WorkoutPlan[] = [];


  constructor(private workoutPlanService: WorkoutPlanService) { }

  ngOnInit(): void {
    this.loadWorkoutPlans();
  }

  async loadWorkoutPlans() {
    this.workoutPlans = await this.workoutPlanService.getWorkoutPlans();
    (console.log(this.workoutPlans));
    console.log("caricando le schede...")
  }

  eliminaScheda(id: number | any) {
    this.workoutPlanService.deleteWorkoutPlan(id).then(() => {
      // Mostra l'elemento di conferma
      const alertElement = document.getElementById('confirmation-alert');
      if (alertElement) {
        alertElement.classList.remove('hidden');
        alertElement.classList.add('flex');
        setTimeout(() => {
          alertElement.classList.add('hidden');
          alertElement.classList.remove('flex');
        }, 2500);
      }
      this.loadWorkoutPlans();
    });
  }

}



//  workoutPlans = [
//     {
//       id:1,
//       nome: 'OTTOBRE',
//       descrizione: '3x12 3x10 3x8 3x6',
//       dataCreazione: new Date('2024-10-05'),
//       session1: {
//         nome: 'Petto e Bicipiti',
//         esercizi: [
//           { name: 'Panca Piana', quantity: '3x8', weight: 80 },
//           { name: 'Squat', quantity: '4x10', weight: 100 },
//           { name: 'Stacco da terra', quantity: '3x6', weight: 120 },
//           { name: 'Military Press', quantity: '3x8', weight: 50 },
//           { name: 'Lat Machine', quantity: '4x10', weight: 60 },
//           { name: 'Bicipiti con bilanciere', quantity: '3x8', weight: 30 },
//           { name: 'Crunch', quantity: '4x15', weight: 0 }
//         ]
//       },
//       session2: {
//         nome: 'Gambe e spalle',
//         esercizi: [
//           { name: 'Pressa', quantity: '4x12', weight: 200 },
//           { name: 'Affondi', quantity: '3x10', weight: 50 },
//           { name: 'Leg Curl', quantity: '4x12', weight: 70 },
//           { name: 'Chest Press', quantity: '3x8', weight: 60 },
//           { name: 'Alzate laterali', quantity: '4x12', weight: 15 },
//           { name: 'Tricipiti al cavo', quantity: '3x12', weight: 40 },
//           { name: 'Plank', quantity: '3x1 min', weight: 0 }
//         ]
//       },
//       session3: {
//         nome: 'Dorso e tricipiti',
//         esercizi: [
//           { name: 'Rematore', quantity: '3x10', weight: 60 },
//           { name: 'Squat bulgaro', quantity: '4x8', weight: 50 },
//           { name: 'Panca Inclinata', quantity: '3x8', weight: 70 },
//           { name: 'Curl con manubri', quantity: '3x10', weight: 15 },
//           { name: 'Stacchi rumeni', quantity: '3x8', weight: 90 },
//           { name: 'Dips', quantity: '3x10', weight: 0 },
//           { name: 'Russian Twist', quantity: '3x15', weight: 0 }
//         ]
//       },
//       session4: {
//         nome: 'FOcus Upperbody',
//         esercizi: [
//           { name: 'Lat Machine inversa', quantity: '4x8', weight: 60 },
//           { name: 'Panca declinata', quantity: '3x10', weight: 75 },
//           { name: 'Calf raises', quantity: '4x15', weight: 40 },
//           { name: 'Alzate frontali', quantity: '3x12', weight: 20 },
//           { name: 'French Press', quantity: '3x8', weight: 30 },
//           { name: 'Leg Extension', quantity: '4x12', weight: 80 },
//           { name: 'Sit-up', quantity: '3x20', weight: 0 }
//         ]
//       }
//     },
//     {
//       id:2,
//       nome: 'Scheda Ipertrofia',
//       descrizione: 'Piano di allenamento per aumentare la massa muscolare',
//       dataCreazione: new Date('2024-09-28'),
//       session1: [
//         { name: 'Panca Piana', quantity: '4x10', weight: 70 },
//         { name: 'Squat', quantity: '4x12', weight: 90 },
//         { name: 'Stacco da terra', quantity: '3x8', weight: 110 },
//         { name: 'Arnold Press', quantity: '4x10', weight: 40 },
//         { name: 'Lat Pulldown', quantity: '4x12', weight: 55 },
//         { name: 'Hammer Curl', quantity: '3x10', weight: 25 },
//         { name: 'Crunch', quantity: '4x20', weight: 0 }
//       ],
//       session2: [
//         { name: 'Leg Press', quantity: '4x12', weight: 180 },
//         { name: 'Step Up', quantity: '3x10', weight: 30 },
//         { name: 'Leg Curl', quantity: '4x10', weight: 65 },
//         { name: 'Pectoral Machine', quantity: '3x12', weight: 55 },
//         { name: 'Alzate laterali', quantity: '3x15', weight: 10 },
//         { name: 'Pushdown', quantity: '4x10', weight: 35 },
//         { name: 'Plank', quantity: '3x45 sec', weight: 0 }
//       ],
//       session3: [
//         { name: 'T-Bar Row', quantity: '4x10', weight: 55 },
//         { name: 'Split Squat', quantity: '4x8', weight: 40 },
//         { name: 'Chest Fly', quantity: '4x12', weight: 50 },
//         { name: 'Concentration Curl', quantity: '3x12', weight: 12 },
//         { name: 'Romanian Deadlift', quantity: '3x10', weight: 85 },
//         { name: 'Dip su parallele', quantity: '3x12', weight: 0 },
//         { name: 'Sit-up con peso', quantity: '4x15', weight: 5 }
//       ],
//       session4: [
//         { name: 'Pull-up', quantity: '3x8', weight: 0 },
//         { name: 'Incline Bench Press', quantity: '4x10', weight: 65 },
//         { name: 'Calf raises su pedana', quantity: '4x20', weight: 35 },
//         { name: 'Front Raises', quantity: '3x12', weight: 15 },
//         { name: 'Skull Crushers', quantity: '3x10', weight: 25 },
//         { name: 'Leg Extension', quantity: '4x10', weight: 75 },
//         { name: 'Russian Twist con peso', quantity: '3x20', weight: 5 }
//       ]
//     },
//     {
//       id:3,
//       nome: 'Scheda Resistenza',
//       descrizione: 'Piano di allenamento per migliorare la resistenza',
//       dataCreazione: new Date('2024-09-15'),
//       session1: [
//         { name: 'Panca Piana', quantity: '4x12', weight: 65 },
//         { name: 'Squat', quantity: '4x15', weight: 80 },
//         { name: 'Stacco da terra', quantity: '4x12', weight: 100 },
//         { name: 'Military Press', quantity: '4x12', weight: 35 },
//         { name: 'Lat Machine', quantity: '4x15', weight: 50 },
//         { name: 'Bicipiti con manubri', quantity: '4x12', weight: 20 },
//         { name: 'Crunch', quantity: '4x25', weight: 0 }
//       ],
//       session2: [
//         { name: 'Pressa', quantity: '4x15', weight: 160 },
//         { name: 'Affondi', quantity: '4x12', weight: 30 },
//         { name: 'Leg Curl', quantity: '4x15', weight: 60 },
//         { name: 'Chest Press', quantity: '4x12', weight: 55 },
//         { name: 'Alzate laterali', quantity: '4x15', weight: 10 },
//         { name: 'Tricipiti con manubri', quantity: '4x12', weight: 15 },
//         { name: 'Plank', quantity: '4x1 min', weight: 0 }
//       ],
//       session3: [
//         { name: 'Rematore', quantity: '4x12', weight: 50 },
//         { name: 'Squat bulgaro', quantity: '4x10', weight: 40 },
//         { name: 'Panca Inclinata', quantity: '4x12', weight: 60 },
//         { name: 'Curl concentrato', quantity: '4x12', weight: 10 },
//         { name: 'Stacchi rumeni', quantity: '4x10', weight: 80 },
//         { name: 'Dips', quantity: '4x15', weight: 0 },
//         { name: 'Russian Twist', quantity: '4x20', weight: 0 }
//       ],
//       session4: [
//         { name: 'Lat Machine inversa', quantity: '4x10', weight: 50 },
//         { name: 'Panca declinata', quantity: '4x12', weight: 65 },
//         { name: 'Calf raises', quantity: '4x20', weight: 30 },
//         { name: 'Alzate frontali', quantity: '4x12', weight: 15 },
//         { name: 'French Press', quantity: '4x12', weight: 20 },
//         { name: 'Leg Extension', quantity: '4x12', weight: 70 },
//         { name: 'Sit-up', quantity: '4x25', weight: 0 }
//       ]
//     }
//   ];