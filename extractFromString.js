point = "'1;Maison de la Prevention Sante;6 rue Maguelone 340000 Montpellier;;3,87952263361082;43,6071285339217'"

//lon = parseFloat(point.split(';')[4])
lon = parseFloat(point.split(';')[4].replace(',','.'))
lat = parseFloat(point.split(';')[5].replace(',','.'))
adr = point.split(';')[1]
console.log(lon)
console.log(lat)
console.log(adr)
//console.log(point)
