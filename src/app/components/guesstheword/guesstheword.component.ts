import { AfterViewInit, Component, ElementRef, inject, OnInit, QueryList, RendererFactory2, signal, ViewChild, ViewChildren,WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guesstheword',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './guesstheword.component.html',
  styleUrl: './guesstheword.component.scss'
})
export class GuessthewordComponent implements OnInit , AfterViewInit {
  private readonly _Renderer2 = inject(RendererFactory2).createRenderer(null,null);

  // Setting Game Options
  numberOfTries:WritableSignal<number[]> = signal(Array(6).fill(null))
  numberOfLetters:WritableSignal<number[]> = signal(Array(6).fill(null))
  currentTry:number = 1
  numberOfHints:number = 2
  words:string[] = ['Animal', 'Answer', 'Change', 'Couple', 'Advice', 'Corner', 'Common', 'Beaker', 'Doctor','Choice', 'Design', 'Budget', 'Career','Driver','Effect', 'Dinner', 'Anyway','Always','Client','Active', 'Course','Assist', 'Centre','Damage', 'Danger', 'August', 'Author', 'Beauty', 'Degree', 'Coming', 'Belief','Detect','Desire','Wallet', 'Ticket', 'Artist', 'Oracle', 'Studio', 'Market', 'Donate', 'Health', 'Energy', 'Future', 'Player', 'Police', 'Bridge', 'Broken', 'Thirty', 'Ticket', 'Thanks', 'Prince', 'Suffer', 'Summer', 'Travel', 'Orange', 'Strong', 'Person', 'Flower', 'Father', 'Sister', "Finger", 'Banana', 'Potato']
  guessWord:WritableSignal<string> = signal('')
  successWord:WritableSignal<boolean> = signal(true)
  msgWin:WritableSignal<string> = signal('')
  msgLose:WritableSignal<string> = signal('')

  // All Divs And Inputs And Buttons
  @ViewChildren('inputs') inputContainer!:QueryList<ElementRef>
  @ViewChildren('input') allInputs!:QueryList<ElementRef>
  @ViewChild('btnCheck') btnCheck!:ElementRef
  @ViewChild('btnHint') btnHint!:ElementRef
  @ViewChild('btnReset') btnReset!:ElementRef

  // Suffle Words When Page Load
  ngOnInit(): void {
    this.shuffleWords()
  }

  // Focus First Input And Disabled All Inputs When Load Page
  ngAfterViewInit(): void {
    this.disabledAllInputs()
  }

  // Remove Disabled Attr In Inputs
  enableInput(input:any){
    this._Renderer2.removeAttribute(input, 'disabled')
  }

  // Add Disabled Attr In Inputs
  disabledInput(input:any){
    this._Renderer2.setAttribute(input, 'disabled', 'true')
  }

  // Add Class In Div Container Inputs
  addClass(item:any, className:string){
    this._Renderer2.addClass(item, className)
  }

  // Remove Class In Div Container Inputs
  removeClass(item:any, className:string){
    this._Renderer2.removeClass(item, className)
  }

  // Focus First Input And Disabled All Inputs
  disabledAllInputs(){
    this.inputContainer.forEach((item, index)=>{
      let childrenInputs = Array.from(item.nativeElement.children)
      childrenInputs.slice(1).forEach((input)=>{
        this.enableInput(input)

        if (index !== 0) {
          this.disabledInput(input)
          this.addClass(input, 'stop-event')
        }
      })

    })
    this.allInputs.get(0)?.nativeElement.focus()
  }

  // Suffle Words And Set Word When Page Load
  shuffleWords(){
    for (let i = 0; i < this.words.length; i++) {
      this.guessWord.set(this.words[Math.floor(Math.random() * this.words.length)].toLowerCase())
    }
  }

  // Manage Game => Remove Disabled In Current Input And Add In Another Inputs
  perpareNextRound(currentTry:number){
    let currentContainer = this.inputContainer.get(currentTry - 1)?.nativeElement
    let nextContainer = this.inputContainer.get(currentTry)?.nativeElement

    let currentInput = Array.from(currentContainer.children).slice(1)
    currentInput.forEach((input)=>{
      this.disabledInput(input)
      this.addClass(input, 'stop-event')
    })

    if(nextContainer){
      let nextInput:any = Array.from(nextContainer.children).slice(1)
      nextInput.forEach((input:any)=>{
        this.enableInput(input)
        this.removeClass(input, 'stop-event')
      })
      nextInput[0].focus()
    } else {
      this.disabledInput(this.btnCheck.nativeElement)
      this.disabledInput(this.btnHint.nativeElement)
      this.msgLose.set(`Your Lose The Word Is (( ${this.guessWord().toUpperCase()} ))`)
      setTimeout(() => {
        this.resetGame()
      }, 3500);
    }
  }

  // Move Right And Left By Keyboard Arrow And BackSpace
  moveRightAndLeft(event:any){
    let inputs = Array.from(this.allInputs)
    let currentIndex = inputs.map(input => input.nativeElement).indexOf(event.target)

    if(inputs.map(input => input.nativeElement)){
      if(event.key === 'ArrowRight'){
        let nextInput = currentIndex + 1
        if (nextInput < inputs.length) inputs[nextInput].nativeElement.focus()
      }

      if(event.key === 'ArrowLeft'){
        let prevInput = currentIndex - 1
        if (prevInput >= 0) inputs[prevInput].nativeElement.focus()
      }

      if(event.key === 'Backspace'){
        if(event.target.value === ''){
          const prevInput = currentIndex - 1
          if (prevInput > 0) {
            inputs[prevInput].nativeElement.focus()
            inputs[prevInput].nativeElement.value = ''
          }
        } else {
          event.target.value = ''
        }
      }

    }
  }

  // Convert Words ToUpperCase And Fouce On Next Input
  convertInputValue(event:any){
    let inputs = Array.from(this.allInputs)
    let currentIndex = inputs.map(input => input.nativeElement).indexOf(event.target)

    event.target.value = event.target.value.toUpperCase()

    if(inputs.map(input => input.nativeElement)){
      let nextInput = inputs[currentIndex + 1].nativeElement
      if(nextInput) nextInput.focus()
    }
  }

  // Game Logic In All Status
  gameLogic(){
    let currentContainerInputs = Array.from(this.inputContainer.get(this.currentTry - 1)?.nativeElement.children).slice(1)
    this.successWord.set(true)

    currentContainerInputs.forEach((input:any, i:number) => {
      let letter = input.value.toLowerCase()
      let actualLetter = this.guessWord()[i]

      if(letter === actualLetter){
        this.addClass(input, 'in-place')
      } else if(this.guessWord().includes(letter) && letter !== ''){
        this.addClass(input, 'not-place')
        this.successWord.set(false)
      } else {
        this.addClass(input, 'not')
        this.successWord.set(false)
      }
    })

    if(this.successWord()){
      this.msgWin.set(`Your Win The Word Is (( ${this.guessWord().toUpperCase()} ))`)
      this.allInputs.forEach((input)=>{
        this.disabledInput(input.nativeElement)
        this.addClass(input.nativeElement, 'stop-event')
      })
      this.disabledInput(this.btnCheck.nativeElement)
      this.disabledInput(this.btnHint.nativeElement)
      setTimeout(() => {
        this.resetGame()
      }, 3500);
    } else {
      this.perpareNextRound(this.currentTry)
      this.currentTry++
    }
  }

  // Manage Hints
  getHint(){
    if(this.numberOfHints >= 0) this.numberOfHints--
    if(this.numberOfHints === 0) this.disabledInput(this.btnHint.nativeElement)

    let enableInput = this.allInputs.filter(input => !input.nativeElement.hasAttribute('disabled'))
    let emptyEnableInput = enableInput.map(input => input.nativeElement).filter(input => input.value === '')

    if(emptyEnableInput.length > 0){
      let randomIndex = Math.floor(Math.random() * emptyEnableInput.length)
      let randomInput = emptyEnableInput[randomIndex]
      let indexToFill = enableInput.map(input => input.nativeElement).indexOf(randomInput)

      if(indexToFill !== -1){
        randomInput.value = this.guessWord()[indexToFill].toUpperCase()
      }
    }
  }

  // Reset Game
  resetGame(){
    let inputs = this.allInputs.map(input => input.nativeElement)
    inputs.forEach((input)=>{
      input.value = ''
      this.removeClass(input, 'in-place')
      this.removeClass(input, 'not-place')
      this.removeClass(input, 'not')
    })

    this.enableInput(this.btnCheck.nativeElement)
    this.enableInput(this.btnHint.nativeElement)

    this.currentTry = 1
    this.numberOfHints = 2
    this.successWord.set(false)
    this.msgWin.set('')
    this.msgLose.set('')

    this.shuffleWords()

    this.disabledAllInputs()

  }

}
