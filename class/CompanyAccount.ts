import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, status: boolean){
    super(name, accountNumber)
    this.setStatus(status)
  }

  getLoan = (value: number): void => {
    if(this.getStatus()){
      this.setBalance(this.getBalance() + value)
      console.log(`Você pegou um empréstimo de: R$ ${value}, seu saldo atual é: R$ ${this.getBalance()}`)
    }
  }
}
