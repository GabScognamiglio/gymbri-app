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
  }

  eliminaScheda(id: number | any) {
    this.workoutPlanService.deleteWorkoutPlan(id).then(() => {
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