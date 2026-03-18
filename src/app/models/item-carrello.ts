export interface intCarrello{
    items: Array<ItemCarrello>;
}

export interface ItemCarrello {
    prodotto: string;
    nome: string;
    prezzo: number;
    quantità: number;
    id: number;
}
