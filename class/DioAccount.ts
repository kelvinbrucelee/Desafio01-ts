export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Você depositou: R$ ${value}, seu saldo atual é: R$ ${this.balance}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      if(this.checkBalance(value)){
        this.balance -= value
        console.log(`Você sacou: R$ ${value}, seu saldo atual é: R$ ${this.balance}`)
      }else{
        console.log(`Saque não autorizado, saldo insuficiente, seu saldo atual é: R$ ${this.getBalance()}, você solicitou: R$ ${value}`)
      }
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    this.erroMessage()
    return false
  }

  erroMessage = (): void => {
    console.log('Conta Inválida')
  }

  getStatus = (): boolean => {
    return this.validateStatus()
  }

  setStatus = (status: boolean): void => {
    this.status = status
  }

  private checkBalance = (value: number): boolean => {
    if(this.getBalance() > value){
      return true
    }
    return false
  }
}
