const colorForm = document.getElementById("color-scheme-form")
const modeSelect = document.getElementById("mode")
const colorInput = document.getElementById("color")
const submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener("click", function (event){
    event.preventDefault()
    let selectedColor = colorInput.value.slice(1,)
    let selectedMode = modeSelect.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}`)
            .then(response => response.json())
            .then(data => {
                let html = data.colors.map(colorItem => {
                    return `<div class="color-hex-div">
                                <div class="color-div" style="background-color:${colorItem.hex.value};" data-color="${colorItem.hex.clean}"></div>
                                <div class="copied">Copied!</div>
                                <p class="color-hex" data-hex="${colorItem.hex.clean}">${colorItem.hex.value}</p>
                            </div>`
                })
                document.getElementById("all-colors").innerHTML = html.join("")
            })
    // modeSelect.value = ""
    
})

document.addEventListener("click", function (event){
    if (event.target.dataset.color || event.target.dataset.hex){
        const copyText = "#" + (event.target.dataset.color? event.target.dataset.color : event.target.dataset.hex)
        navigator.clipboard.writeText(copyText)
        console.log(event.currentTarget.children[0])
        setTimeout(() => {event.currentTarget.style.display = "none"}, 3000)

    // Alert the copied text
    }
}
)

