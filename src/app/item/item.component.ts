import { Component } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  templateUrl: './item.component.html'
})

export class ItemComponent {
  itens: Item[];
  title = 'Lista de Itens';
  noItens = 'Sem Itens Disponíveis';
  constructor(private itemService:ItemService) {}

  ngOnInit() {
    this.getItens();
  }
    
  getItens() {
    this.itemService.getItens().subscribe(itens => this.itens = itens);
  }

}