import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProdutoService } from '../../servicos/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-painel-principal',
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css',],
  standalone: true,
  imports: [CommonModule]
})

export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [];

constructor(private produtoService: ProdutoService, private router: Router) {}

ngOnInit(): void { 
  this.listarProdutos()
}

listarProdutos() { 
  this.produtoService.obterProdutos().subscribe((dados) => { 
    this.produtos = dados
  })
} 

excluirProduto(id: number) {
  if (confirm("Deseja realmente excluir este produto?")) { 
    this.produtoService.deletarProduto(id).subscribe(() => {
      alert("Produto excluído com sucesso!");
      this.listarProdutos()
    })
  }
} 

editarProduto(id: number) { 
  this.router.navigate(['/editar-produto', id])
}
}