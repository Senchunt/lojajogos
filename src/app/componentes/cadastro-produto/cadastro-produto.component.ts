import { Component } from '@angular/core';
import { ProdutoService } from '../../servicos/produto.service';
import { Route } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro-produto',
  imports: [CommonModule, BrowserModule, FormsModule],
  templateUrl: './cadastro-produto.component.html',
  standalone: true,
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {
  produto: any = {
    produto: '',
    descricao: '',
    foto: '',
    preco: null
  }

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    if (id) {
      this.produtoService.obterProdutoPorId(Number(id)).subscribe(dados =>{
        this.produto = dados
      })
    }
  }
  salvarProduto(): void{
    if (this.produto.id) {
      // salvar
      this.produtoService.atualizarProduto(this.produto.id, this.produto).subscribe(() =>{
        alert("Produto atualizado com sucesso!")
        this.router.navigate(['/painel-principal'])
      })
    } else {
      // cadastrar
      this.produtoService.adicionarProduto(this.produto).subscribe(() =>{
        alert("Produto cadastrado com sucesso!")
        this.router.navigate(['/painel-principal'])
      })
    }
  }
}
