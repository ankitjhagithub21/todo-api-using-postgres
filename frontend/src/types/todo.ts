export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  author?: {
    id: number;
    name: string | null;
  };
}
