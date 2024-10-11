import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutPlan, WorkoutPlanService } from 'src/app/service/workout-plan.service';

@Component({
  selector: 'app-dettaglio-scheda',
  templateUrl: './dettaglio-scheda.component.html',
  styleUrls: ['./dettaglio-scheda.component.css']
})
export class DettaglioSchedaComponent {
  scheda: WorkoutPlan | undefined;
  
  constructor(private router: ActivatedRoute, private workoutSrv: WorkoutPlanService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.workoutSrv.getWorkoutPlanById(id).then((data) => {
        this.scheda = data;
        console.log(this.scheda)
      });
    })
  }

  getSessions(scheda: any) {
    return [scheda.session1, scheda.session2, scheda.session3];
  }

  async onWeightChange() {
    try {
      await this.workoutSrv.updateWorkoutPlan(this.scheda as WorkoutPlan);
      console.log('Workout plan updated successfully.');
    } catch (error) {
      console.error('Error updating workout plan:', error);
    }
  }
}
