function valueNumber() {
    show.innerHTML =""
    var table =""
    table += "<table>"
    for(a=1; a<=col.value; a++){
        table += "<tr>"
        for ( c=1; c<=row.value; c++){
            table += `<td style="border: 1px solid orangered; background-color: orange; gap: 1em;"> ${c} + ${a} = ${a + c} </td>`
        }
        table += "</td>"
    }
    table += "</table>"
    show.innerHTML += table
}
function valueNumber1() {
    show.innerHTML =""
    var table =""
    table += "<table>"
    for(a=1; a<=col.value; a++){
        table += "<tr>"
        for ( c=1; c<=row.value; c++){
            table += `<td style="border: 1px solid orangered; background-color: orange; gap: 1em;"> ${c} - ${a} = ${a - c} </td>`
        }
        table += "</td>"
    }
    table += "</table>"
    show.innerHTML += table
}
function valueNumber2() {
    show.innerHTML =""
    var table =""
    table += "<table>"
    for(a=1; a<=col.value; a++){
        table += "<tr>"
        for ( c=1; c<=row.value; c++){
            table += `<td style="border: 1px solid orangered; background-color: orange; gap: 1em;" > ${c} * ${a} = ${a * c} </td>`
        }
        table += "</td>"
    }
    table += "</table>"
    show.innerHTML += table
}
function valueNumber3() {
    show.innerHTML =""
    var table =""
    table += "<table>"
    for(a=1; a<=col.value; a++){
        table += "<tr>"
        for ( c=1; c<=row.value; c++){
            table += `<td style="border: 1px solid orangered; background-color: orange; gap: 1em;"> ${c} / ${a} = ${a / c} </td>`
        }
        table += "</td>"
    }
    table += "</table>"
    show.innerHTML += table
}