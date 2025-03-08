import { Component } from '@angular/core';
import { macroInst, macroInstList } from '../../const'

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {
  instList: macroInst[] = macroInstList;
}
