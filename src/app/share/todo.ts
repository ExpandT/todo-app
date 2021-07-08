import {Priorities} from "./priorities.enum";

export interface TodoData {
  id: number;
  name: string;
  color: string;
  priority: Priorities;
}
