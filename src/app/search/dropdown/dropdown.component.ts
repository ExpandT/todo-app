import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {tap} from "rxjs/operators";
import {TodoData} from "../../share/todo";


@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements OnInit {

  @ViewChild('container') container?: ElementRef<HTMLDivElement>;

  @Input() dataFromLocalStorage!: TodoData[];

  input: FormControl = new FormControl('');

  todoListData: TodoData[] = [];
  filterData: any = [];

  isVisible: boolean = false;

  tabIndexValue: number = -1;

  get isBlockVisible(): boolean {
    return this.isVisible && this.filterData.length;
  }

    ngOnInit(){
      this.input.valueChanges
        .pipe(
          tap((val: string) => {
            this.isVisible = true;
            this.onFilterData(val)
            this.todoListData = this.dataFromLocalStorage;
          }),
        ).subscribe();
    }

  setInputValue(value: string): void {
    this.input.setValue(value);
  }

  onFilterData(value: string) {
    this.filterData = this.todoListData.filter((todo: TodoData) => {
      return todo.name.replace(/\s/g, '').toLowerCase().indexOf(value.replace(/\s/g, '').toLowerCase()) === 0;
    })
  }

  hideNames(): void {
    this.isVisible = false;
  }

  increaseTabIndex(ev: Event) {
    ev.preventDefault();

    if (this.container === undefined) {
      return;
    }

    const links = this.container?.nativeElement.children ?? [];

    if (links.length <= this.tabIndexValue + 1) {
      this.tabIndexValue = -1;
    }

    this.tabIndexValue++;

    (this.container?.nativeElement.children[this.tabIndexValue] as HTMLElement).focus();
  }

  decreaseTabIndex(ev: Event) {
    ev.preventDefault();

    if (this.container === undefined) {
      return;
    }

    const links = this.container?.nativeElement.children ?? [];

    if (links.length > 0 && this.tabIndexValue - 1 < 0) {
      this.tabIndexValue = links.length;
    }

    --this.tabIndexValue;

    (this.container?.nativeElement.children[this.tabIndexValue] as HTMLElement).focus();
  }
}
