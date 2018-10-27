
const sentenceTag = document.querySelector(`input[type="text"]`)

const typefaceTag =  document.querySelector(`select[name="typeface"]`)

const typeSizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutputTag = document.querySelector("span.typesize-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutputTag = document.querySelector("span.fontweight-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutputTag = document.querySelector("span.lineheight-output")

const italicTag =  document.querySelector(`input[name="italic"]`)

const colorTags = document.querySelectorAll("div.colors div")

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

// when i change my fontweight slider, update the text next to it AND
// change the outputTag's font weight 
fontweightTag.addEventListener("input", function() {
    outputTag.style.fontWeight = this.value
    fontweightOutputTag.innerHTML = this.value
})

// when i change my leading slider, update the text next to it AND
// change the outputTag's line height
lineheightTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value
    lineheightOutputTag.innerHTML = this.value
}) 

// when i change my italic checkbox, update the font style to either
// italic or normal if it's checked or not.
italicTag.addEventListener("change", function() {
    if (this.checked) {
        outputTag.style.fontStyle = "italic"
    }
    else {
        outputTag.style.fontStyle = "normal"
    }
})

// when i change my typeface selector, update the font-family accordingly
typefaceTag.addEventListener("input", function () {
    outputTag.style.fontFamily = this.value
})

// go through all of my color tags, then when i click one of them,
//change the background color and the text color and make the tag
// selected
colorTags.forEach(tag => {
    tag.addEventListener("click", function() {
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color
        outputTag.style.textShadow = this.style.textShadow

        // reset the classes
        colorTags.forEach(tag => {
            tag.classList.remove("selected")
        })
        this.classList.add("selected")
    })
})