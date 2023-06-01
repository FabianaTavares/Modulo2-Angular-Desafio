import { senadoresDto } from './senadoresDto';
import { despesasDto } from './despesasDto';
export interface dtoCompleto {
  id: number;
  nomeSenador: string;
  despesas?: despesasDto[];
}
