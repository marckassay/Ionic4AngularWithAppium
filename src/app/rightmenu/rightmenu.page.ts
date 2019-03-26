import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightmenu',
  templateUrl: './rightmenu.page.html',
  styleUrls: ['./rightmenu.page.scss'],
})
export class RightmenuPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[i - 1]
      });
    }
  }

  ngOnInit() {
  }
}
