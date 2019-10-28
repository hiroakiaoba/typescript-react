export interface Todo {
  id: number;
  title: string;
  body: string;
  completed: boolean;
}

export type FilterCondition = 'ALL' | 'COMPLETED' | 'NOT_COMPLETED';
