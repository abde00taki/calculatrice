function ecrere(n) {
    let zone = document.getElementById('zone')
    zone.textContent += n
}

function delet() {
    let zone = document.getElementById('zone')
    zone.textContent = ' '
}

function calcul() {
    let zone = document.getElementById('zone')
    const regex = /\/\s*0(\.0+)?(\D|$)/;
    
    if (regex.test(zone.textContent)) {
        zone.textContent="imposible"
    } else {
        zone.textContent = eval(zone.textContent)
    }


}