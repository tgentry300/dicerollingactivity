
const destination = document.getElementById("bargraph")

let frequencyCounts;

function makediv(content) {
    div = document.createElement("div")
    div.textContent = content
    document.getElementById("container").appendChild(div)
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rollD6(numberOfDie = 1) {
    let result = 0
    for (let i = 0; i < numberOfDie; i++) {
        result += randomNumber(1, 6)
    }
    return result
}

function testRollD61000Times() {

    const frequencyCountsCache = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 1000; i++) frequencyCountsCache[rollD6(2)]++

        return frequencyCounts = frequencyCountsCache.slice(2)
}

function clearGraph() {

    frequencyCounts = undefined;
    document.getElementById("container").innerHTML = ""
    document.getElementById("bargraph").innerHTML = ""
}

const button = document.getElementById("button")

function createDiceRollingGraph() {

    clearGraph()
    testRollD61000Times()

    let graphCaptions = ""

    for (let i = 0; i < frequencyCounts.length; i++) {
        div = document.createElement("div")
        div.classList.add("bars")
        div.style.width = frequencyCounts[i] + "px";

        const graphCaption = String(i + 2) + ": " + frequencyCounts[i]
        const isLastItem = i < frequencyCounts.length - 1

        graphCaptions += graphCaption + (isLastItem ? ", " : "")
        const textNode = document.createTextNode(graphCaption)
        div.appendChild(textNode)

        destination.appendChild(div)
    }

    makediv(graphCaptions)
}
createDiceRollingGraph()