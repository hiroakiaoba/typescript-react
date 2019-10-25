export type Status = 'NEW' | 'IN_PROGRESS' | 'COMPLETED';

export interface Todo {
  id: number;
  title: string;
  body: string;
  status: Status;
}
