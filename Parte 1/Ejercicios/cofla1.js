/*
Ejercicio

A) 3 chicos de 23 años perferctamente normales entran a una heladeria a comprar un helado pero hay problemas: los precios no estan al lado de cada estante con su respectivo helado.
Ellos quieren comprar el helado mas caro que puedan con la plata quie tienen, asi que... veamos como podemos ayudarlos

Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD

Los precios de helados son los siguientes:
Palito de helado de agua: $0.6 USD
Palito de helado de crema: $1 USD
Bombon helado marca heladix: $1.6 USD
Bombon helado marca heladovich: $1.7 USD
Bombon helado marca helardo: $1.8 USD
potecito de helado con confites: $2.9 USD
pote de 1/4 KG -> $2.9 USD

	CREAR SOLUCIONES:
	- Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar
	- Si hay 2 o mas con el mismo precio, mostrar ambos
	- Cofla quiere saber cuanto es el vuelto
*/

cofla = prompt('cuanto dinero tienes Cofla?(USD)')
roberto = prompt('cuanto dinero tienes Roberto?(USD)')
pedro = prompt('cuanto dinero tienes Pedro?(USD)')

cofla = parseFloat(cofla)
roberto = parseFloat(roberto)
pedro = parseFloat(pedro)

//let agua=0.6:
//let crema=1;
//let heladix=1.6;
//let heladovich=1.7;
//let helardo=1.8;
//let confites=2.9
//let pote=2.9

if (cofla>= 0.6 && cofla<1) {
	alert('Cofla puedes comprarte el helado de agua')
	alert('el cambio de cofla es '+ (cofla - 0.6))
}

else if (cofla>= 1 && cofla<1.6) {
	alert('Cofla puedes comprarte el de crema')
	alert('el cambio de cofla es '+ (cofla - 1))
}
else if (cofla>= 1.6 && cofla<1.7) {
	alert('Cofla puedes comprarte el helado heladix')
	alert('el cambio de cofla es '+ (cofla - 1.6))
}
else if (cofla>= 1.7 && cofla<1.8) {
	alert('Cofla puedes comprarte el helado heladovich')	
	alert('el cambio de cofla es '+ (cofla - 1.7))
}
else if (cofla>= 1.8 && cofla<2.9) {
	alert('Cofla puedes comprarte el helado helardo')
	alert('el cambio de cofla es '+ (cofla - 1.8))
}
else if (cofla>= 2.9) {
	alert('Cofla puedes comprarte ya sea el pote de helado o el de confites')
	alert('el cambio de cofla es '+ (cofla - 2.9))
}
else {
	alert('perdon Cofla, no te alcanza para un carajo')
}
//---------------------------------------------------------------------------------------
if (roberto>= 0.6 && roberto<1) {
	alert('roberto puedes comprarte el helado de agua')
}

else if (roberto>= 1 && roberto<1.6) {
	alert('roberto puedes comprarte el de crema')
}
else if (roberto>= 1.6 && roberto<1.7) {
	alert('roberto puedes comprarte el helado heladix')
}
else if (roberto>= 1.7 && roberto<1.8) {
	alert('roberto puedes comprarte el helado heladovich')	
}
else if (roberto>= 1.8 && roberto<2.9) {
	alert('roberto puedes comprarte el helado helardo')
}
else if (roberto>= 2.9) {
	alert('roberto puedes comprarte ya sea el pote de helado o el de confites')
}
else {
	alert('perdon roberto, no te alcanza para un carajo')
}
//---------------------------------------------------------------------------------------
if (pedro>= 0.6 && pedro<1) {
	alert('pedro puedes comprarte el helado de agua')
}

else if (pedro>= 1 && pedro<1.6) {
	alert('pedro puedes comprarte el de crema')
}
else if (pedro>= 1.6 && pedro<1.7) {
	alert('pedro puedes comprarte el helado heladix')
}
else if (pedro>= 1.7 && pedro<1.8) {
	alert('pedro puedes comprarte el helado heladovich')	
}
else if (pedro>= 1.8 && pedro<2.9) {
	alert('pedro puedes comprarte el helado helardo')
}
else if (pedro>= 2.9) {
	alert('pedro puedes comprarte ya sea el pote de helado o el de confites')
}
else {
	alert('perdon pedro, no te alcanza para un carajo')
}