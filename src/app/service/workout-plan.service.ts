// src/app/workout-plan.service.ts
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Esercizio } from '../interface/esercizio';

// export interface Esercizio {
//   name: string;
//   quantity: string;
//   weight: number;
// }

export interface Session {
  nome: string;
  esercizi: Esercizio[];
}

export interface WorkoutPlan {
  id?: number;
  nome: string;
  descrizione: string;
  dataCreazione: string;
  session1: Session | Esercizio[];
  session2: Session | Esercizio[];
  session3: Session | Esercizio[];
  session4: Session | Esercizio[];
}

export class AppDatabase extends Dexie {
  workoutPlans: Dexie.Table<WorkoutPlan, number>;

  constructor() {
    super('WorkoutPlansDatabase');
    this.version(1).stores({
      workoutPlans: '++id', // auto-incrementing primary key
    });
    this.workoutPlans = this.table('workoutPlans');
  }
}

@Injectable({
  providedIn: 'root',
})
export class WorkoutPlanService {
  private db: AppDatabase;

  constructor() {
    this.db = new AppDatabase();
    this.initializeDatabase();
  }

  async initializeDatabase() {
    const workoutPlans: WorkoutPlan[] = [
    ];

    // Salva i workout plans nel database
    await this.db.workoutPlans.bulkPut(workoutPlans);
  }

  async getWorkoutPlans(): Promise<WorkoutPlan[]> {
    return await this.db.workoutPlans.toArray();
  }

  async getWorkoutPlanById(id: number) {
    return await this.db.workoutPlans.get(id)
  }

  async addWorkoutPlan(workoutPlan: WorkoutPlan): Promise<number> {
    return await this.db.workoutPlans.add(workoutPlan);
  }

  async updateWorkoutPlan(workoutPlan: WorkoutPlan): Promise<void> {
    if (workoutPlan.id !== undefined) {
      await this.db.workoutPlans.update(workoutPlan.id, workoutPlan);
    } else {
      throw new Error("ID del piano di allenamento non è definito.");
    }
  }

  async deleteWorkoutPlan(id: number): Promise<void> {
    await this.db.workoutPlans.delete(id);
  }
}
