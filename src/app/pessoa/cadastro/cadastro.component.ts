import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IItem } from 'src/app/models/item.interface';
import { IPessoa } from 'src/app/models/pessoa.interface';
import { PessoaService } from 'src/app/services/pessoa.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public itens: IItem[] = [];

  public formData!: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    // inicializaro formulario
    this.initForm();
  }

  private initForm(): void {
    this.formData = this.formBuild.group({
      cpf: '',
      nome: '',
      item: ''
      });
  }

  onSave(): void {
    const {cpf, nome} = this.formData.value;

    // campos obrigatorios
    if (!cpf || !nome) {
      Swal.fire(
        'Campos Obrigatórios',
        'Favor informar cpf e nome',
        'warning'
      );
      return;
    }

    // regra basica de formação cpf
    if (cpf.length < 11) {
      Swal.fire(
        'Campos Obrigatórios',
        'Favor informar cpf com 11 digitos',
        'warning'
      );
      return;
    }

    const pessoa: IPessoa = {
      cpf,
      nome,
      itens: this.itens
    };

    this.pessoaService.store(pessoa).subscribe(
      (rest) => {
        const msg = rest.body?.mensagem;
        Swal.fire( 'Cadastro', msg, 'success');
      },
      (err) => {
        Swal.fire( 'Cadastro Negado', err.error.mensagem, 'warning');
      }
    );
  }

  onAddItem(): void {
    const item = this.formData.value.item;
    // verificar se existe o valor
    if (!item) {
      Swal.fire(
        'Item',
        'Informar o item a ser adicionado',
        'warning'
      );
      return;
    }
    // criar o objeto
    const novoItem: IItem = { descricao: item.toUpperCase()};
    // limpar o campo
    this.formData.patchValue({item: ''});
    // adicionar o item
    this.itens.push(novoItem);
  }

  onClean(): void {
    // reiniciar o formulario
    this.formData.reset();
    // reiniciar a lista de itens
    this.itens = [];
  }

}
