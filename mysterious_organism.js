// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
//console.log(mockUpStrand())

 function pAequorFactory(number, array) {
   array = mockUpStrand()
   let studyLater = []
   console.log(studyLater)
  return  {
    specimeNum: number,
    mutate() {
      let hello = [Math.floor(Math.random() * array.length)]
      let arr = ['A','T','C','G']
      if (hello === 'A') {
      let current = 'A'
      let itemsWithoutCurrent = arr.filter(function(x) { return x !== current; })
      array[(hello)] = 'T'
      return array
      } else if (hello === 'T') {
      let current1 = 'T'
      let itemsWithoutCurrent = arr.filter(function(x) { return x !== current1; })
      array[(hello)] = 'C'
      return array
      } else if (hello === 'C') {
      let current2 = 'C'
      let itemsWithoutCurrent = arr.filter(function(x) { return x !== current2; })
      array[(hello)] = 'G'
      return array
      } else {
        let current3 = 'G'
      let itemsWithoutCurrent = arr.filter(function(x) { return x !== current3; })
      array[(hello)] = 'A'
      return array
      }
    },
    dna: array,
    compareDNA(pAequor) {
      pAequor = [ 'A', 'G', 'G', 'A', 'A', 'A', 'T', 'G', 'T', 'T', 'T', 'T', 'C', 'T', 'C' ]
      let arr = []
      let object = array
      for (i=0; i<object.length; i++) {
        for (j=0; j<pAequor.length; j++) {
          if (i===j && object[i] === pAequor[j]) {
              arr.push(object[i])
          }
        }
      }
      let length = arr.length
      let workings = (length/15)  * 100 
      return `specimen #1 and specimen #${number} have ${workings}% DNA in common`
    },
    willLikelySurvive() {
      let obj = array
      let arr = []
      for(i=0; i<obj.length; i++) {
        if (obj[i] === 'C' || obj[i] === 'G') {
          arr.push(obj[i])
        }
      }
      let length = arr.length
      let workings = (length/15) * 100
      if (workings >= 60) {
        studyLater.push(array)
        return 'True'
      } else {
        return 'False'
      }
    }
    }
    }
    
 

const done = pAequorFactory(10)
console.log(done.willLikelySurvive())








