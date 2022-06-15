import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/item.interface';
import { IPessoa } from 'src/app/models/pessoa.interface';
import { PessoaService } from 'src/app/services/pessoa.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  pessoas: IPessoa[] = [];

  constructor(
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    this.obterLigatem();
  }

  obterLigatem() {
    this.pessoaService.index().subscribe(
      (resp) => {
        const listagem = resp.body;
        if (listagem) {
          this.pessoas = listagem;
        }
      }
    );
  }

  itens(itens: IItem[]): string {
    return itens.map(item => item.descricao).join(', ');
  }

  onDelete(pessoa: IPessoa): void {
    this.pessoaService.delete(pessoa).subscribe(
      (rest) => {
        // mensagem
        const msg = rest.body?.mensagem;
        Swal.fire('Exclusão', msg, 'success');
        // atualizar a listagem
        this.obterLigatem();
      },
      (err) => {
        console.error("ERRO EXCLUSAO" + err.error)
        Swal.fire('Exclusão Negada', err.error.mensagem, 'warning');
      }
    );
  }

  onEdit(pessoa: IPessoa): void {

  }

}
