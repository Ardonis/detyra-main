class Calculator{
    constructor(valueUpTextElement, currentValueTextElement){
        this.valueUpTextElement = valueUpTextElement
        this.currentValueTextElement = currentValueTextElement
        this.clear()
    }
}
clear() { 
    this.currentValue = ''
    this.valueUp = ''
    this.operation = undefined
}
delete() {

}
appendNumber(number) {

}
chooseOperator(operator) {
 
}
computer() {

}
updateDisplay() {
  this.currentValueTextElement.innerText = this.currentValue
}



const numberButtons = document.querySelectorAll('[data-number]')
const opertionButtons= document.querySelectorAll('[data-operation]')
const equalsButton= document.querySelector('[data-equals]')
const deleteButton= document.querySelector('[data-delete]')
const allClearButton= document.querySelector('[data-all-clear]')
const valueUpTextElement = document.querySelector('[data-value-up]')
const correntValueTextElement= document.querySelector('[data-current-value]')

const calculator = new Calculator(valueUpTextElement, currentValueTextElement)
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})