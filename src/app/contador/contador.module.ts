import { NgModule } from "@angular/core";
import { ContadorComponent } from "./ contador/contador.component";


@NgModule({
    //Aqui van los componentes
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ]

})

export class ContadorModule{
    
}
