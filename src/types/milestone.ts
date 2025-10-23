export interface Milestone {
  id: number;
  title: string;
  date: string;
  marks: number;
  weightage: string;
  description: string;
  status: 'completed' | 'upcoming' | 'ongoing';
  phase: string;
  learningOutcomes: string;
  deliverableFocus: string;
}

export interface MilestonesData {
  milestones: Milestone[];
}
