 const rangeFunctions = {
  name: 'Ronaldo',
  height: '6FT',
  'shot accuracy': 97,
 
    range(firstNumber, lastNumber) {
      let numbers = []
      let allElement = []
  
      for (i = 0; i <= 100000; i++) {
       numbers.push(i)
      }
    
      let element = numbers.indexOf(firstNumber)
      let element2 = numbers.indexOf(lastNumber)
      let element3 = element2 + 1
      if (element >= 0 && element2 >= 0){
        allElement = numbers.slice(element,element3)
        return allElement
      } 
    },
     
    
    rangeInBetween(firstNumber, lastNumber) {
      let numbers = []
      let allElement = []

      for (i = 0; i <= 100000; i++) {
        numbers.push(i)
       }
     
       let element = numbers.indexOf(firstNumber)
       let element3 = element + 1
       let element2 = numbers.indexOf(lastNumber)
       if (element >= 0 && element2 >= 0){
         allElement = numbers.slice(element3,element2)
         return allElement
       } 
     }
    }

function useRonaldo(ronaldo) {
  let box = ronaldo.name
  if (box === 'Ronaldo') {
    console.log('He is good')
  } else {
    console.log('Na bastard')
  }
}
   
   console.log(useRonaldo(rangeFunctions))
   


