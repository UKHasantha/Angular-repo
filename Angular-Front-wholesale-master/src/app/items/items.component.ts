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
  items: Array<ItemDTO> = [];
  selectedItem: ItemDTO = new ItemDTO();
  manuallySelected = false;
  @ViewChild('frmItem') frmItem: NgForm;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.loadAllItems();
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
  loadAllItems(): void {
    this.itemService.getAllItems().subscribe(
      (result) => {
        this.items = result;
        console.log(this.items);
      }
    );
  }
  deleteItems(itemsID: ItemDTO): void {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.itemService.deleteItem(itemsID.code).subscribe(
        (result) => {
          if (result) {
            alert('Items has been Deleted successfully');
          } else {
            alert('Failed to deleted Items');
          }
          this.loadAllItems();
        }
      );
    }
  }

}
