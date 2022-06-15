import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Industria } from "./industria.model";


@Injectable()
export class IndustriaServices{
    constructor(
        @InjectModel(Industria)
        private industriaModel: typeof Industria
    ) {}

    async ObterTodos(): Promise<Industria[]> {
        return this.industriaModel.findAll();  
    }

    async ObterUm(id: number): Promise<Industria>{
        return this.industriaModel.findByPk(id)
    } 

    async criar(industria: Industria) {
        this.industriaModel.create(industria)
    }
    
    
    async alterar(industria: Industria): Promise<[number]> {
        return this.industriaModel.update(industria, {
            where: {
                id: industria.id
            }
        });
    }


    async apagar(id: number) {
        const livro: Industria = await this.ObterUm(id);
        livro.destroy();
    }
}
