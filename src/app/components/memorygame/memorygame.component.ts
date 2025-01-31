import { Component, ElementRef, inject, OnInit, RendererFactory2, signal, ViewChild, WritableSignal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-memorygame',
  standalone: true,
  imports: [NgClass,RouterLink],
  templateUrl: './memorygame.component.html',
  styleUrl: './memorygame.component.scss'
})
export class MemorygameComponent implements OnInit {
  private readonly _Renderer2 = inject(RendererFactory2).createRenderer(null,null)

  cards:WritableSignal<{value:string, revealed:boolean}[]> = signal([])
  firstCard:WritableSignal<number | null >= signal(null)
  secondCard:WritableSignal<number | null >= signal(null)
  lockBoard:WritableSignal<boolean> = signal(false)
  attempts:WritableSignal<number> = signal(0)
  level:WritableSignal<number> = signal(1)

  ngOnInit(): void {
    this.initGame()
  }

  values:string[] = []
  initGame(){
    if(this.level() === 1){
      this.values.push("./assets/images/memorygameImage/8.jpg","./assets/images/memorygameImage/8.jpg","./assets/images/memorygameImage/2.jpg","./assets/images/memorygameImage/2.jpg")
      console.log(this.values);

    } else if(this.level() === 2){
      this.values.push("./assets/images/memorygameImage/1.webp","./assets/images/memorygameImage/1.webp","./assets/images/memorygameImage/9.webp","./assets/images/memorygameImage/9.webp")
      console.log(this.values);

    } else if(this.level() === 3){
      this.values.push("./assets/images/memorygameImage/3.jpeg","./assets/images/memorygameImage/3.jpeg","./assets/images/memorygameImage/4.webp","./assets/images/memorygameImage/4.webp")
      console.log(this.values);

    } else if(this.level() === 4){
      this.values.push("./assets/images/memorygameImage/5.webp","./assets/images/memorygameImage/5.webp", "./assets/images/memorygameImage/6.jpg","./assets/images/memorygameImage/6.jpg")
      console.log(this.values);

    } else if(this.level() === 5){
      this.values.push("./assets/images/memorygameImage/7.jpg","./assets/images/memorygameImage/7.jpg","./assets/images/memorygameImage/10.jpg","./assets/images/memorygameImage/10.jpg")
      console.log(this.values);
    }
    this.cards.set(this.shuffleCards(this.values).map((value:any) => ({value, revealed:false})))
  }

  // Simple Shuffle And The most common method
  // shuffleCards(arr:any){
  //   return arr.sort(() => Math.random() - .5)
  // }

  // Fisher-Yates Shuffle
  shuffleCards(arr: any) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
    return arr
  }

  revealedCards(index:number){
    if(this.lockBoard() || this.cards()[index].revealed || this.firstCard() === index){
      return;
    }

    this.cards()[index].revealed = true

    if(this.firstCard() === null){
      this.firstCard.set(index)
    } else{
      this.secondCard.set(index)
      this.checkCards()
      this.checkLevelComplate()
    }
  }

  checkCards(){
    this.lockBoard.set(true)
    this.attempts.set(this.attempts() + 1)

    setTimeout(()=>{
      if(this.cards()[this.firstCard()!].value === this.cards()[this.secondCard()!].value){
        this.firstCard.set(null)
        this.secondCard.set(null)
      } else {
        this.cards()[this.firstCard()!].revealed = false
        this.cards()[this.secondCard()!].revealed = false
        this.firstCard.set(null)
        this.secondCard.set(null)
      }
      this.lockBoard.set(false)
    },1000)
  }

  @ViewChild('cardContainer') el!:ElementRef
  checkLevelComplate(){
    const allRevealed = this.cards().every(card => card.revealed)

    if(allRevealed){
      if(this.level() <= 5){
        setTimeout(()=>{
          alert('WOOOOOW Well Done')
          alert(`Let's Gooo Next Level`)
          this.level.set(this.level() + 1)
          this.attempts.set(0)
          if(this.level() === 1){
            this._Renderer2.setStyle(this.el.nativeElement, 'grid-template-columns', 'repeat(2,100px)')
          } else {
            this._Renderer2.setStyle(this.el.nativeElement, 'grid-template-columns', 'repeat(4,100px)')
          }
          this.initGame()
        },800)
      } else if(this.level() > 5){
        alert('Congratulations, Wait For Anthor Levels Soon')
      }
    }
  }

}
