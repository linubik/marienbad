import { Component } from '@angular/core';

@Component({
  selector: 'app-marienbad',
  templateUrl: './marienbad.component.html',
  styleUrls: ['./marienbad.component.css'],
})
export class MarienbadComponent {
  gameBoard = [
    1,
    3,
    5,
    7
  ];

  currentPlayer = 1;

  nextPlayer() {
    this.currentPlayer = 3-this.currentPlayer;
  }

  takeChips(row:number) {
    if (this.gameBoard[row]  > 0) {
      this.gameBoard[row] = Math.max(this.gameBoard[row] - 1, 0);
    }
  }
}
