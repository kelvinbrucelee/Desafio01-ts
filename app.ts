import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { ClientAccount } from './class/ClientAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)

console.log("#################### Company ####################")
// Criando várias instâncias de company
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20, true)
const companyAccount2: CompanyAccount = new CompanyAccount('Developer', 40, true)
const companyAccount3: CompanyAccount = new CompanyAccount('Developer3', 45, true)

// Operações na conta de DIO
console.log("Company:", companyAccount.getName())
companyAccount.deposit(20)
companyAccount.getLoan(200)
companyAccount.withdraw(300)
console.log(companyAccount)
console.log("----------------------------")

// Operações na conta de Developer
console.log("Company:", companyAccount2.getName())
companyAccount2.deposit(20)
companyAccount2.deposit(40)
companyAccount2.withdraw(300)
companyAccount2.getLoan(200)
console.log(companyAccount2)
console.log("----------------------------")

// Operações na conta de Developer3
console.log("Company:", companyAccount3.getName())
companyAccount3.deposit(20)
companyAccount3.deposit(45)
companyAccount3.deposit(100)
companyAccount3.withdraw(50)
companyAccount3.getLoan(200)
console.log(companyAccount3)
console.log("----------------------------")

console.log("#################### Clients ####################")
// Criando várias instâncias de client
const clientAccount1: ClientAccount = new ClientAccount(1, 'João', 40, true);
const clientAccount2: ClientAccount = new ClientAccount(2, 'Maria', 100, false);
const clientAccount3: ClientAccount = new ClientAccount(2, 'José', 120, true);
const clientAccount4: ClientAccount = new ClientAccount(2, 'Pedro', 145, true);
const clientAccount5: ClientAccount = new ClientAccount(2, 'Neto', 170, false);

// Operações na conta de João
console.log('Cliente:', clientAccount1.getClienteName(), ', Conta:', clientAccount1.getAccountNumber());
clientAccount1.deposit(100);
clientAccount1.withdraw(300);
clientAccount1.withdraw(100);
console.log('Saldo da conta: R$ ', clientAccount1.getBalance());
console.log(clientAccount1)
console.log("----------------------------")

// Operações na conta de Maria
console.log('Cliente:', clientAccount2.getClienteName(), ', Conta:', clientAccount2.getAccountNumber());
clientAccount2.deposit(200);
clientAccount2.withdraw(50);
console.log('Saldo da conta: R$ ', clientAccount2.getBalance());
console.log(clientAccount2)
console.log("----------------------------")

// Operações na conta de José
console.log('Cliente:', clientAccount3.getClienteName(), ', Conta:', clientAccount3.getAccountNumber());
clientAccount3.deposit(100);
clientAccount3.deposit(50);
console.log('Saldo da conta: R$ ', clientAccount3.getBalance());
console.log(clientAccount3)
console.log("----------------------------")

// Operações na conta de Pedro
console.log('Cliente:', clientAccount4.getClienteName(), ', Conta:', clientAccount4.getAccountNumber());
clientAccount4.deposit(85);
console.log('Saldo da conta: R$ ', clientAccount4.getBalance());
console.log(clientAccount4)
console.log("----------------------------")

// Operações na conta de Neto
console.log('Cliente:', clientAccount5.getClienteName(), ', Conta:', clientAccount5.getAccountNumber());
clientAccount5.deposit(10);
clientAccount5.deposit(50);
clientAccount5.withdraw(10);
clientAccount5.withdraw(100);
console.log('Saldo da conta: R$ ', clientAccount5.getBalance());
console.log(clientAccount5)
console.log("----------------------------")