import { despesasDto } from './expenses';
export interface dtoCompleto {
  id: number;
  nomeSenador: string;
  despesas?: despesasDto[];
}
