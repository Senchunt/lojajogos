import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'; 
import { PainelPrincipalComponent } from './componentes/painel-principal/painel-principal.component'; 
import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";
import { MenuComponent } from "./componentes/menu/menu.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CadastroProdutoComponent } from './componentes/cadastro-produto/cadastro-produto.component';


import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

const routes: Routes = [ 
    { path: 'painel-principal', 
        component: PainelPrincipalComponent 
    },
    {
        path: 'cadastro-produto',
        component: CadastroProdutoComponent
    },
    {
        path: 'editar-produto/:id',
        component: CadastroProdutoComponent
    },
    { path: '', 
        redirectTo: '/painel-principal', 
        pathMatch: 'full' 
    }
]; 

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes), 
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: []
})

export class appmodule {}