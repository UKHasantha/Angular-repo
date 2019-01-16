import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemDTO} from '../dtos/item-dto';
import {NgForm} from '@angular/forms';
import {ItemService} from '../service/item-service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  selectedItem: ItemDTO = new ItemDTO();
  manuallySelected: boolean = false;
  @ViewChild('frmItem') frmItem: NgForm;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }
  saveItem(): void {
    this.itemService.saveItem(this.selectedItem).subscribe(
      (result) => {
        if (result) {
          alert('Item successfully Added...');
        } else {
          alert('Item Not Added..');
        }
      }
    );
  }

}
