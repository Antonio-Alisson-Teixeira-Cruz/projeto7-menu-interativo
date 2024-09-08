let menu = prompt(`Escolha uma opção de café:
1 - Capuccino
2 - Latte
3 - Americano
4 - Expressso
5 - Encerrar`)
do{
  switch(menu){
    case 1:
      alert('Você escolheu um capuccino')
      break
    case 2:
      alert('Você escolheu um latte')
      break
    case 3:
      alert('Você escolheu um americano')
      break
    case 4:
      alert('Você escolheu um expresso')
      break
  }
} while (menu != 5)
