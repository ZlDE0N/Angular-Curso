import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [ //Aqui van los componentes
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Aqui van aaquellos componentes que queremos que sean publicos o que sean visibles fuera del modulo
        ListadoComponent
    ],
    imports: [ //Aqui unicamente van modulos
        CommonModule,
    ]

})

export class HeroesModule{}