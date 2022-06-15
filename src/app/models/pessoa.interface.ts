import { IItem } from "./item.interface";

export interface IPessoa {
  cpf: string,
  nome: string,
  itens: IItem[],
  mensagem?: string
}
