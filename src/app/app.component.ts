import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public name: string = '';
  public title: string = 'my-app';

  private readonly dataStoreKey: string = 'appData';

  public ngOnInit() {
    const data = this.getData();

    this.name = data.name;
  }

  public saveData() {
    let appData: any = {
      name: this.name
    };
    localStorage.setItem(this.dataStoreKey, JSON.stringify(appData));
  }

  private getData() {
    const appData = localStorage.getItem(this.dataStoreKey);

    return JSON.parse(appData);
  }
}
