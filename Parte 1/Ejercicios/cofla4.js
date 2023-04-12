/*class Calculadora {
	constructor(){}
sumar(num1,num2){
	return parseInt(num1)+parseInt(num2);
}
restar(num1,num2){
	return parseInt(num1)-parseInt(num2);
}
multiplicar(num1,num2){
	return parseInt(num1)*parseInt(num2);
}
dividir(num1,num2){
	return parseInt(num1)/parseInt(num2);
}
potencia(num,exp){
	return parseInt(num)**parseInt(exp);
}
raízCuadrada(num){
	return Math.sqrt(num);
}
raízCubica(num){
	return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert('Escoja la operación que desea realizar')
let operación = prompt('1.suma, 2.resta, 3.division, 4.multiplicación, 5.potenciación, 6.Raíz cuadrada, 7.Raíz cubica');

if (operación == 1){
	let numero1 = prompt('primer numero que desea sumar')
	let numero2 = prompt('segundo numero que desea sumar')
	resultado = calculadora.sumar(numero1,numero2)
	alert(`tu resultado es ${resultado}`)
}

else if (operación == 2){
	let numero1 = prompt('primer numero que desea restar')
	let numero2 = prompt('segundo numero que desea restar')
	resultado = calculadora.restar(numero1,numero2)
	alert(`tu resultado es ${resultado}`)
}

else if (operación == 3){
	let numero1 = prompt('primer numero que desea dividir')
	let numero2 = prompt('segundo numero que desea dividir')
	resultado = calculadora.dividir(numero1,numero2)
	alert(`tu resultado es ${resultado}`)
}

else if (operación == 4){
	let numero1 = prompt('primer numero que desea multiplicar')
	let numero2 = prompt('segundo numero que desea multiplicar')
	resultado = calculadora.multiplicar(numero1,numero2)
	alert(`tu resultado es ${resultado}`)
}
else if (operación == 5){
	let numero1 = prompt('numero base')
	let numero2 = prompt('numero exponente')
	resultado = calculadora.potencia(numero1,numero2)
	alert(`tu resultado es ${resultado}`)
	
}
else if (operación == 6){
	let numero = prompt('numero')
	resultado = calculadora.raízCuadrada(numero)
	alert(`tu resultado es ${resultado}`)
	
}
else if (operación == 7){
	let numero = prompt('numero')
	resultado = calculadora.raízCubica(numero)
	alert(`tu resultado es ${resultado}`)
	
}*/

/*const obtenerInformación = (materia)=>{
materias = {
	física: ['Perez','pedro','pepe','cofla','maria'],
	programación: ['Dalto','pedro','pepe','juan'],
	lógica: ['Hernandez','pedro','pepe','juan','cofla','maria'],
	química: ['Rodriguez','pedro','pepe','juan','cofla','maria']
}
if (materias[materia] !== undefined){
	return [materias[materia],materia,materias];
}
else{
	return materias
}
}


const mostrarInfo = (materia)=>{
	let información = obtenerInformación(materia);


if(información !== false){
	let profesor = obtenerInformación(materia)[0][0];
	alumnos = obtenerInformación(materia)[0];
	alumnos.shift();
	document.write(`El profesor de <b>${información[1]}</b> es: <b style='color:red'>${profesor}</b><br>
					Los alumnos son: <b style='color:blue'>${alumnos}</b><br><br>`)
}
}

const cantidadDeClases = (alumno)=>{
	let información = obtenerInformación()
	let clasesPresentes =[];
	let cantidadTotal = 0;
	for (info in  información){
		if(información[info].includes(alumno)){
			cantidadTotal++;
			clasesPresentes.push(''+info)
		}
	}
	return `<b style='color:blue'>${alumno}</b> esta en <b>${cantidadTotal} clases</b><br>clases: <b>${clasesPresentes}<br><br>`

}


mostrarInfo ('física')
mostrarInfo ('programación')
mostrarInfo ('lógica')
mostrarInfo ('química')

document.write(cantidadDeClases('cofla'))
document.write(cantidadDeClases('pepe'))
document.write(cantidadDeClases('juan'))
document.write(cantidadDeClases('maria'))
document.write(cantidadDeClases('pedro'))*/

let materias = {
	física: ['Perez','pedro','pepe','cofla','maria'],
	programación: ['Dalto','pedro','pepe','juan'],
	lógica: ['Hernandez','pedro','pepe','juan','cofla','maria'],
	química: ['Rodriguez','pedro','pepe','juan','cofla','maria']
}

const inscribir = (alumno,materia)=>{
	personas = materias[materia];
	personas.shift();
	alumnos = personas;
	if (alumno.length >= 20){
		document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas`)
	} else{
		alumnos.push(alumno);
		if(materia == 'física'){
			materias ={
				física: alumnos,
				programación: materias['programación'],
				lógica: materias['lógica'],
				química: materias['química']
			}
		}
		else if(materia == 'programación'){
			materias ={
				física: materias['física'],
				programación: alumnos,
				lógica: materias['lógica'],
				química: materias['química']
			}
		}
		else if(materia == 'lógica'){
			materias ={
				física: materias['física'],
				programación: materias['programación'],
				lógica: alumnos,
				química: materias['química']
			}
		}
		else if(materia == 'química'){
			materias ={
				física: materias['física'],
				programación: materias['programación'],
				lógica: materias['lógica'],
				química: alumnos
			}
		}
		document.write(`Felicidades ${alumno}, te has inscrito a ${materia} correctamente`)
	}
}

inscribir('pedrito','física')

document.write('<br>'+ materias['física'])