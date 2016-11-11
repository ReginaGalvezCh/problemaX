function enviarChat(){
	var lista = document.getElementsByClassName("w-last-message")[0];
	var elinput = document.getElementById("mensajes").value;
	var chat = document.getElementById("chat");
	var uno=document.createElement("p");
	var dos=document.createElement("div");
	var tres =document.createElement("div");
	var cuatro=document.createTextNode("elinput");

chat.appenChild("dos");
dos.appendChild("tres");
tres.appendChild("uno");
uno.appendChild("cuatro");

dos.setAttribute("class","w-message w-message-out");
tres.setAttribute("class","w-message-text");
document.getElementById("mensaje").innerHTML=inputMsje;
	}
	

