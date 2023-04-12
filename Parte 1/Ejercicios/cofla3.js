class Celular{
	constructor(color,peso,rdp,rdc,ram){		//rdp --- resolución de pantalla, rdc --- resolución de cámara 
		this.color = color;
		this.peso = peso;
		this.tamaño = rdp;
		this.resoluciónDeCámara = rdc;
		this.memoriaRam = ram;
		this.encendido = false
	}
	presionarBotónEncendido(){
		if (this.encendido == false) {
			alert('celular prendido');
			this.encendido = true;
		} else {
			alert('celular apagado');
			this.encendido = false
		}
	}
	reiniciar(){
		if (this.encendido == true){
			alert('reiniciando celular');
		} else {
			alert('el celular esta apagado')
		}
	}
	tomarFotos (){
		alert(`foto tomada en una resolución de: ${this.resoluciónDeCámara}`)
	}
	grabarVideo(){
		alert(`video grabado en una resolución de: ${this.resoluciónDeCámara}`)
	}
	mobileInfo(){
		return `
		Color: <b>${this.color}</b><br>
		Peso: <b>${this.peso}</b><br>
		Tamaño: <b>${this.tamaño}</b><br>
		Resolución de Video: <b>${this.resoluciónDeCámara}</b><br>
		Memoria Ram: <b>${this.memoriaRam}</b><br>
		`
	}
}
class celularAltaGama extends Celular {
	constructor (color,peso,rdp,rdc,ram,rcx){
		super(color,peso,rdp,rdc,ram);
		this.resoluciónDeCámaraExtra = rcx;
	}
	grabarVideoLento(){
		alert("Estas grabando en cámara lenta")
	}
	reconocimientoFacial(){
		alert("vamos a iniciar un reconocimiento facial")
	}
	infoAltaGama(){
		return this.mobileInfo() + `Resolución de Cámara Extra:<b> ${this.resoluciónDeCámaraExtra}</b><br>`
	}
}

celular1 = new Celular('rojo','150g',"5'",'hd','1GB')
celular2 = new Celular('negro','155g',"5.4'",'full hd','2GB')
celular3 = new Celular('blanco','146g',"5.9'",'full hd','2GB')
celular4 = new celularAltaGama('dorado','130g',"5.2'",'4K','4GB',"full hd")
celular5 = new celularAltaGama('plateado','142g',"6'",'4K','4GB',"full hd")

//celular1.presionarBotónEncendido();
//celular1.tomarFotos();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotónEncendido();
document.write("Celulares normales<br><br>"+celular1.mobileInfo() + '<br>',celular2.mobileInfo() + '<br>',celular3.mobileInfo()+
			'<br>'+"Celulares de alta gama<br><br>" + celular4.infoAltaGama()+ '<br>' ,celular5.infoAltaGama() + '<br>')

class App {
	constructor(descargas,puntuación,peso){
		this.descargas = descargas;
		this.puntuación = puntuación;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	instalar (){
		if (this.instalada == false){
			this.instalada = true;
			alert('app instalada correctamente')
		}
	}

	abrir(){
		if (this.iniciada == false && this.instalada == true){
			this.iniciada = true;
			alert('app iniciada')
		}
	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true){
			this.iniciada = false;
			alert('app cerrada')
		}
	}
	desinstalar(){
		if (this.instalada == true){
			this.instalada = false;
			alert('app desinstalada correctamente')
		}
	}
	info(){
		return `
		Descargas: <b>${this.descargas}</b><br>
		Puntuación: <b>${this.puntuación}</b><br>
		Peso: <b>${this.peso}</b><br>
		`
	}
}

app = new App("16.000","3.5 estrellas","900 mb");
app2 = new App("17.000","3.8 estrellas","800 mb");
app3 = new App("20.000","5 estrellas","1000 mb");
app4 = new App("15.500","3 estrellas","700 mb");
app5 = new App("15.000","2.8 estrellas","700 mb");
app6 = new App("18.000","4estrellas","800 mb");
app7 = new App("19.000","5 estrellas","900 mb");

//app.instalar();
//app.abrir();
//app.cerrar();
//app.desinstalar();

document.write(
	`Información de las aplicaciones <br><br>
	${app.info()}<br>
	${app2.info()}<br>
	${app3.info()}<br>
	${app4.info()}<br>
	${app5.info()}<br>
	${app6.info()}<br>
	${app7.info()}<br>
	`
)