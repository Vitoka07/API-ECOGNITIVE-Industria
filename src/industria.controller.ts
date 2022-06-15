import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Industria } from "./industria.model";
import { IndustriaServices } from "./industria.services";


@Controller('industria')
export class IndustriaController{
    constructor(private industriaServices: IndustriaServices){

    }

    @Get()
    async ObterTodos(): Promise<Industria[]> {
        return this.industriaServices.ObterTodos();  
    }

    @Get(':id')
    async ObterUm(@Param() params): Promise<Industria> {
        return this.industriaServices.ObterUm(params.id);
    }

    @Post('criar')
    criar(@Body() industria: Industria) {
       this.industriaServices.criar(industria)
        
    }

    @Put('alterar')
    async alterar(@Body() industria: Industria): Promise<[number]> {
        return this.industriaServices.alterar(industria);
    }

    @Delete(':id')
    async apagar(@Param()params) {
        this.industriaServices.apagar(params.id)
    }
}