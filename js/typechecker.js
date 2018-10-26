
const sentenceTag = document.querySelector(`input[type="text"]`)

const typeSizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutputTag = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutputTag = document.querySelector("span.lineheight-output")

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

// when i change my type size slider, update the text next to it AND
// change the outputTag's font size 
typeSizeTag.addEventListener("input", function() {
        outputTag.style.fontSize = this.value + "px"
        typesizeOutputTag.innerHTML = this.value + "px"
})

// when i change my leading slider, update the text next to it AND
// change the outputTag's line height
lineheightTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value
    lineheightOutputTag.innerHTML = this.value
}) 