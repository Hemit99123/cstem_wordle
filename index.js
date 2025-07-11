const handleSubmit = () => {
    const answer = "allee".split("")
    const word = []

    for (let index = 0; index < 5; index++) {
        const current_letter = document.getElementById(`letter${index}`).value

        word.push(current_letter)
    }
    
    for (let index = 0; index < 5; index++) {

        const word_letter = word[index]
        const answer_letter = answer[index]

        const input_document = document.getElementById(`letter${index}`)

        if (word_letter === answer_letter) {
            input_document.style.backgroundColor = "green"
            console.log('R')
        }  
        else if (answer.includes(word_letter)) {
            input_document.style.backgroundColor = "yellow"
            console.log('M')
        } else {
            input_document.style.backgroundColor = "red"
            console.log('W')
        }
    }
        
}