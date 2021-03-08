export class Item {
    id: number;
    nome: string;
    categoria: string;
    descricao: string
    valor: number;


    constructor(id: number, nome: string, categoria: string, valor: number, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.valor = valor;
        this.descricao = descricao;
    }
}