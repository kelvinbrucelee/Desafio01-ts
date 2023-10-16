import { DioAccount } from "./DioAccount"

export class ClientAccount extends DioAccount {
  doc_id: number
  private bonus: number = 10
  private clientName: string

  constructor(doc_id: number, name: string, accountNumber: number, status: boolean){
    super(name, accountNumber)
    this.doc_id = doc_id
    this.clientName = name
    this.setStatus(status)
  }

  deposit = (value: number): void => {
    if(this.getStatus()){
      this.setBalance(this.getBalance() + value + this.bonus)
      console.log(`Você depositou R$ ${value}, e foi adicionado um bônus de: R$ ${this.bonus}, seu saldo atual é: R$ ${this.getBalance()}`)
    }
    
  }
  getClienteName = (): string => {
    return this.clientName
  }
}