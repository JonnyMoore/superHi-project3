const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.innerHTML

// when I type in my sentence tag, update the output tag accordingly
// if there's no value, put in the original text in the html
sentenceTag.addEventListener("keyup", function() {
    if (this.value) {
        outputTag.value = this.value // this refers to the thing being targeted 
    }
    else {
        outputTag.value = originalText
    }
})

// when i type in my output tag, update the sentence tag accordingly
outputTag.addEventListener("keyup", function() {
    if (this.value) {
        sentenceTag.value = this.value
    }
    else {
        sentenceTag.value = ""
        outputTag.value = originalText
    }
})