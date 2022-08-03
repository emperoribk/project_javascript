let array_of_words = ['Hello Good morning',
                         'Hello you are an idiot', 
                         'shey u dey whyne me ni', 
                         'Hello hope you have a glorious day',
                         'Learning how to be a coder',
                         'Wisdom come from the unlickliest sources'
                    ]

function saved_word(word) {
    array_of_words.push(word)
    return `word has been saved`
}

function random_words(name) {
    let number = Math.floor(Math.random() * array_of_words.length)
    let hello = array_of_words[(number)]
    if (number === 0) {
        return `${array_of_words[(number)]} ${name}`
    } else if (number === 3) {
        return `${array_of_words[(number)]} ${name}`
    } else {
        return `${array_of_words[(number)]}`
    }


}

console.log(random_words('emmanuel'))