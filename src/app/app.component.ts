import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ CodeComponent } from './code/code.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'micsim';

  selectedTab:string = 'Code'
  tabs: string[] = ['Code','tab 2','tab 3']

  clickTab(tab: string) {
    this.selectedTab = tab
  }
}
