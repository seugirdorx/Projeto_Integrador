import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { DeleteResult } from "typeorm";
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../service/tema.service";

@Controller ("/temas")
export class TemaController {
    constructor (private readonly temaService: TemaService) {}

    @Get()
    @HttpCode (HttpStatus.OK)
    findAll(): Promise<Tema[]> {
        return this.temaService.findAll()
    }

    @Get ('/:id')
    @HttpCode (HttpStatus.OK)
    findById (@Param('id', ParseIntPipe) id: number): Promise<Tema> {
        return this.temaService.findById(id)
    }

    @Get ('/educacao/:educacao')
    @HttpCode (HttpStatus.OK)
    findByEducacao (@Param('educacao') educacao: string): Promise<Tema[]> {
        return this.temaService.findByEducacao(educacao)
    }

    @Get ('/descricao/:descricao')
    @HttpCode (HttpStatus.OK)
    findBySerie (@Param('serie') serie: string): Promise<Tema[]> {
        return this.temaService.findBySerie(serie)
    }

    @Post ()
    @HttpCode (HttpStatus.CREATED)
    create (@Body() tema: Tema): Promise<Tema> {
        return this.temaService.create(tema)
    }

    @Put ()
    @HttpCode (HttpStatus.OK)
    update (@Body()tema: Tema): Promise<Tema> {
        return this.temaService.update(tema)
    }

    @Delete ('/:id')
    @HttpCode (HttpStatus.NO_CONTENT)
    delete (@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.temaService.delete(id)
    }

}
