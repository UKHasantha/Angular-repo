import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemDTO} from '../dtos/item-dto';
import {ItemService} from '../service/item-service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
  items: Array<ItemDTO> = [];
  tempItems: ItemDTO = null;
  selectedItems: ItemDTO = new ItemDTO();
  manuallySelected = false;
  @ViewChild('frmViewItem') frmViewItem: NgForm;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.loadAllItems();
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
  selectedsItems(item: ItemDTO): void {
    this.clear();
    this.selectedItems = item;
    this.tempItems = Object.assign({}, item);
    this.manuallySelected = true;
  }
  clear(): void {
    const index = this.items.indexOf(this.selectedItems);

    if (index !== -1) {
      this.items[index] = this.tempItems;
      this.tempItems = null;
    }
    this.selectedItems = new ItemDTO();
    this.manuallySelected = false;
  }
}
