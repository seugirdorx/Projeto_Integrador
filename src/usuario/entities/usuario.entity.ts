import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(120)
    @Column({length: 120, nullable: false})
    nome: string

    @IsNotEmpty()
    @MaxLength(120)
    @Column({length: 120, nullable: false, unique: true})
    usuario: string

    @IsNotEmpty()
    @MaxLength(30)
    @Column({length: 30, nullable: false, unique: true})
    nickname: string;

    @IsNotEmpty()
    @MaxLength(120)
    @Column({length: 120, nullable: false})
    senha: string;

    @Column({length: 255, nullable: true})
    foto: string;

    @OneToMany(() => Postagem, (Postagem) => Postagem.usuario, {
        onDelete: "CASCADE"
    })
    postagem: Postagem
}