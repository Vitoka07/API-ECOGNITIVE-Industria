
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Industria extends Model<Industria> {

    
    @Column({
        type: DataType.STRING, 
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.STRING(60), 
        allowNull: false,
    })
    razaosocial: string;

    @Column({
        type: DataType.STRING, 
        allowNull: false,
    })
    CNPJ: string;

    @Column({
        type: DataType.STRING, 
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING, 
        allowNull: false,
    })
    CEP: string;


    @Column({
        type: DataType.STRING, 
        allowNull: false,
    })
    senha: string;

   

      
}