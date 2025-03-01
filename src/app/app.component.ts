import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'micsim';

  selectedTab:string = 'tab 1'
  tabs: string[] = ['tab 1','tab 2','tab 3']

  clickTab(tab: string) {
    this.selectedTab = tab
  }
}
