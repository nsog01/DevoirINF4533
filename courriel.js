function chargeContacts() {
		var mesContacts = [["Abigayle"," Figueroa","(706) 542-0739","esokullu@outlook.com"],
["Kenley"," Henderson","(753) 941-3349","ebassi@icloud.com"],
["Branden"," Potts","(309) 990-3829","drjlaw@outlook.com"],
["Autumn"," Walker","(760) 776-6204","carroll@mac.com"],
["Tommy"," Gomez","(868) 408-6488","chaki@sbcglobal.net"],
["Desiree"," Wolf","(538) 560-7977","nasor@verizon.net"],
["Jovany"," Tate","(410) 865-5770","giersig@outlook.com"],
["Axel"," Ayala","(874) 934-1303","salesgeek@att.net"],
["Skyler"," Nixon","(946) 526-9418","jsbach@yahoo.ca"],
["Aliyah"," Ellis","(596) 525-3889","vlefevre@optonline.net"],
["Colton"," Harris","(805) 167-8615","jmorris@gmail.com"],
["Ryleigh"," Dodson","(805) 167-8615","starstuff@yahoo.com"],
["Charity"," Castaneda","(805) 167-8615","alias@msn.com"],
["Hugo"," Hurley","(543) 456-8242","dhwon@icloud.com"],
["Jayla"," Bond","(301) 978-0012","mjewell@mac.com"],
["Grant"," Bowen","(301) 978-0012","starstuff@mac.com"],
["Kyleigh"," Rivera","(301) 978-0012","sekiya@outlook.com"],
["Brennan"," Harding","(301) 978-0012","jonadab@me.com"],
["Xiomara"," Shaffer","(301) 978-0012","munjal@live.com"],
["Kennedi"," Newton","(301) 978-0012","xnormal@gmail.com"],
["Bobby"," Barton","(301) 978-0012","smcnabb@hotmail.com"],
["Damion"," Bass","(301) 978-0012","dbanarse@comcast.net"],
["Conner"," Sullivan","(301) 978-0012","hellfire@gmail.com"],
["Claire"," Rich","(266) 816-9984","jshearer@verizon.net"],
["Sebastian"," Snyder","(266) 816-9984","kiddailey@yahoo.com"],
["Steve"," Harper","(430) 148-8234","subir@live.com"],
["Franco"," Mayo","(430) 148-8234","thaljef@verizon.net"],
["Gisselle"," Joyce","(430) 148-8234","jshearer@verizon.net"],
["Phoenix"," Haney","(430) 148-8234","subir@live.com"],
["Moriah"," Hall","(430) 148-8234","thaljef@verizon.net"],
["Krystal"," Crane","(430) 148-8234","thaljef@verizon.net"],
["Talan"," Austin","(430) 148-8234","subir@live.com"],
["Jaydin"," Kirk","(430) 148-8234","jshearer@verizon.net"],
["Liana"," Herrera","(430) 148-8234","thaljef@verizon.net"],
["Madilynn"," Webster","(430) 148-8234","starstuff@mac.com"],
["Diana"," Young","(430) 148-8234","subir@live.com"],
["Willie"," Randolph","(346) 907-7030","kiddailey@yahoo.com"],
["Shelby"," Miller","(346) 907-7030","notaprguy@msn.com"],
["Jadyn"," Roy","(346) 907-7030","sethbrown@sbcglobal.net"],
["Kayden"," Mccoy","(346) 907-7030","jshearer@verizon.net"],
["Kody"," Keith","(346) 907-7030","hellfire@gmail.com"],
["Rayan"," Ayers","(346) 907-7030","dbanarse@comcast.net"],
["Adyson"," Stanton","(346) 907-7030","smcnabb@hotmail.com"],
["Jovan"," Skinner","(346) 907-7030","xnormal@gmail.com"],
["Alexia"," Reese","(346) 907-7030","munjal@live.com"],
["Amirah"," Hubbard","(346) 907-7030","naoya@sbcglobal.net"],
["Susan"," Richards","(346) 907-7030","jonadab@me.com"],
["Yasmine"," Keller","(346) 907-7030","sekiya@outlook.com"],
["Mariela"," Khan","(346) 907-7030","starstuff@mac.com"],
["Silas"," Glover","(346) 907-7030","mjewell@mac.com"]];


	    var enTete = ["Action","Nom","Prenom","Numero","Email"];
		
        
        var mybody = document.getElementById("center");
		mybody.innerHTML = "";
		
       
        mytable = document.createElement("table");
        mytablebody = document.createElement("tbody");

        // creating all cells
        for(var j = 0; j < mesContacts.length; j++) {
            // creates a <tr> element
            mycurrent_row = document.createElement("tr");
			
			
			
			if( j === 0)
			{
				for(var k=0; k<enTete.length; k++)
				{
					// creates a <th> element
                mycurrent_cell = document.createElement("th");
                // creates a Text Node
                currenttext = document.createTextNode(enTete[k]);
                // appends the Text Node we created into the cell <th>
                mycurrent_cell.appendChild(currenttext);
                // appends the cell <td> into the row <tr>
                mycurrent_row.appendChild(mycurrent_cell);
				}
                
			}
			else
			{
				for(var i = 0; i < enTete.length; i++){
					if (i===0){
						mycurrent_cell = document.createElement("td");
						mycurrent_cell.setAttribute("class","checkBox");
						myInput = document.createElement("input"); 
						myInput.setAttribute("type","checkBox");
						mycurrent_cell.appendChild(myInput);
					}
					else{
					// creates a <td> element
					mycurrent_cell = document.createElement("td");
					// creates a Text Node
					currenttext = document.createTextNode(mesContacts[j][i-1]);
					// appends the Text Node we created into the cell <td>	
					mycurrent_cell.appendChild(currenttext);
					}
                
                // appends the cell <td> into the row <tr>
                mycurrent_row.appendChild(mycurrent_cell);
             }
			}
            
            // appends the row <tr> into <tbody>
            mytablebody.appendChild(mycurrent_row);
        }

        // appends <tbody> into <table>
        mytable.appendChild(mytablebody);
        // appends <table> into <body>
        mybody.appendChild(mytable);
        // sets the border attribute of mytable to 2;
        mytable.setAttribute("border","2");
		mytable.setAttribute("width","100%");
}
function AfficherActionsContact()
{
	var mybody = document.getElementById("menuActions");
	mybody.innerHTML = "";
	
	myLink = document.createElement("a");
	myLink.setAttribute("href","#");
	myText = document.createTextNode("Nouveau");
	myLink.appendChild(myText);
	mybody.appendChild(myLink);
	
	myLink = document.createElement("a");
	myLink.setAttribute("href","#");
	myText = document.createTextNode("Modifier");
	myLink.appendChild(myText);
	mybody.appendChild(myLink);
	
	myLink = document.createElement("a");
	myLink.setAttribute("href","#");
	myText = document.createTextNode("Supprimer");
	myLink.appendChild(myText);
	mybody.appendChild(myLink);
}


function chargerMessagesRecus() {
		
var mesMessages = [["Abigayle Figueroa","Reunion","2018-03-19","Non lu"],
["Kenley Henderson","Rapport recontre","2018-04-06","Non lu"],
["Branden Potts","Voyage","2018-04-12","Non lu"],
["Autumn Walker","Allo","2018-04-12","Non lu"],
["Tommy Gomez","Salut","2018-04-12","Non lu"],
["Desiree Wolf","Les nouvelles","2018-04-12","Non lu"],
["Jovany Tate","Merci","2018-04-12","Non lu"],
["Axel Ayala","Naruto","2018-04-12","Non lu"],
["Skyler Nixon","Voici","2018-04-12","Non lu"],
["Aliyah Ellis","Voila","2018-04-12","Non lu"],
["Colton Harris","Apres midi","2018-04-12","Non lu"],
["Ryleigh Dodson","Carte de voeux","2018-04-12","Non lu"],
["Charity Castaneda","Les retards","2018-04-12","Non lu"],
["Hugo Hurley","Nos attentes","2018-04-12","Non lu"],
["Jayla Bond","Les dernires specifications","2018-04-12","Non lu"],
["Grant Bowen","Nos attentes","2018-04-12","Non lu"],
["Kyleigh Rivera","Derniere modification","2018-04-12","Non lu"],
["Brennan Harding","Password","2018-04-12","Non lu"],
["Xiomara Shaffer","Reset","2018-04-12","Non lu"],
["Kennedi Newton","See ya!","2018-04-12","Non lu"],
["Bobby Barton","Asta la vista","2018-04-12","Non lu"],
["Damion Bass","Como te vas","2018-04-12","Non lu"],
["Conner Sullivan","Muy bien","2018-04-12","Non lu"],
["Claire Rich","Gestion des projets","2018-04-12","Non lu"],
["Sebastian Snyder","Technologie internet","2018-04-12","Non lu"],
["Steve Harper","Ajax","2018-04-12","Non lu"],
["Franco Mayo","DOM est difficile","2018-04-12","Non lu"],
["Gisselle Joyce","Ya quoi?","2018-04-12","Non lu"],
["Phoenix Haney","Arafat","2018-04-12","Non lu"],
["Moriah Hall","Donne des nouvelles","2018-04-12","Non lu"],
["Krystal Crane","J'attends vos rapports","2018-04-12","lu"],
["Talan Austin","Quoi de neuf?","2018-04-12","lu"],
["Jaydin Kirk","Carte de voeux","2018-04-12","lu"],
["Liana Herrera","Liste des livres","2018-04-12","lu"],
["Madilynn Webster","See ya!","2018-04-12","lu"],
["Diana Young","Culte dimanche","2018-04-12","lu"],
["Willie Randolph","Dernier choix","2018-04-12","lu"],
["Shelby Miller","Liste d'audits","2018-04-12","lu"],
["Jadyn Roy","That man must go","2018-04-12","lu"],
["Kayden Mccoy","Learning LISP","2018-04-12","lu"],
["Kody Keith","Learning Go","2018-04-12","lu"],
["Rayan Ayers","Learning javascript","2018-04-12","lu"],
["Adyson Stanton","Guest what","2018-04-12","lu"],
["Jovan Skinner","I dunno","2018-04-12","lu"],
["Alexia Reese","So happy","2018-04-12","lu"],
["Amirah Hubbard","Appointment","2018-04-12","lu"],
["Susan Richards","REndez-vous","2018-04-12","lu"],
["Yasmine Keller","Trip","2018-04-12","lu"],
["Mariela Khan","Safari vs Chrome","2018-04-12","lu"],
["Silas Glover","Tab vs Space","2018-04-12","lu"]];


var enTete = ["Action","Expediteur","Objet","Date","Statut"];
var mybody = document.getElementById("center");
		mybody.innerHTML = "";
		
       
        mytable = document.createElement("table");
        mytablebody = document.createElement("tbody");

        // creating all cells
        for(var j = 0; j < mesMessages.length; j++) {
            // creates a <tr> element
            mycurrent_row = document.createElement("tr");
			
			if( j === 0)
			{
				for(var k=0; k < enTete.length; k++)
				{
					// creates a <th> element
                mycurrent_cell = document.createElement("th");
                // creates a Text Node
                currenttext = document.createTextNode(enTete[k]);
                // appends the Text Node we created into the cell <th>
                mycurrent_cell.appendChild(currenttext);
                // appends the cell <td> into the row <tr>
                mycurrent_row.appendChild(mycurrent_cell);
				}
                
			}
			else
			{
				for(var i = 0; i < enTete.length; i++){
					if (i===0){
						mycurrent_cell = document.createElement("td");
						mycurrent_cell.setAttribute("class","checkBox");
						myInput = document.createElement("input"); 
						myInput.setAttribute("type","checkBox");
						mycurrent_cell.appendChild(myInput);
					}
					else{
					// creates a <td> element
					mycurrent_cell = document.createElement("td");
					// creates a Text Node
					currenttext = document.createTextNode(mesMessages[j][i-1]);
					// appends the Text Node we created into the cell <td>	
					mycurrent_cell.appendChild(currenttext);
					}
                
                // appends the cell <td> into the row <tr>
                mycurrent_row.appendChild(mycurrent_cell);
             }
			}
            
            // appends the row <tr> into <tbody>
            mytablebody.appendChild(mycurrent_row);
        }

        // appends <tbody> into <table>
        mytable.appendChild(mytablebody);
        // appends <table> into <body>
        mybody.appendChild(mytable);
        // sets the border attribute of mytable to 2;
        mytable.setAttribute("border","2");
		mytable.setAttribute("width","100%");
}






function chargerMessagesEnvoyes() {
		
var mesMessages = [["Abigayle Figueroa","Reunion","2018-03-19"],
["Kenley Henderson","Rapport recontre","2018-04-06"],
["Branden Potts","Voyage","2018-04-12"],
["Autumn Walker","Allo","2018-04-12"],
["Tommy Gomez","Salut","2018-04-12"],
["Desiree Wolf","Les nouvelles","2018-04-12"],
["Jovany Tate","Merci","2018-04-12"],
["Axel Ayala","Naruto","2018-04-12"],
["Skyler Nixon","Voici","2018-04-12"],
["Aliyah Ellis","Voila","2018-04-12"],
["Colton Harris","Apres midi","2018-04-12"],
["Ryleigh Dodson","Carte de voeux","2018-04-12"],
["Charity Castaneda","Les retards","2018-04-12"],
["Hugo Hurley","Nos attentes","2018-04-12"],
["Jayla Bond","Les dernires specifications","2018-04-12"],
["Grant Bowen","Nos attentes","2018-04-12"],
["Kyleigh Rivera","Derniere modification","2018-04-12"],
["Brennan Harding","Password","2018-04-12"],
["Xiomara Shaffer","Reset","2018-04-12"],
["Kennedi Newton","See ya!","2018-04-12"],
["Bobby Barton","Asta la vista","2018-04-12"],
["Damion Bass","Como te vas","2018-04-12"],
["Conner Sullivan","Muy bien","2018-04-12"],
["Claire Rich","Gestion des projets","2018-04-12"],
["Sebastian Snyder","Technologie internet","2018-04-12"],
["Steve Harper","Ajax","2018-04-12"],
["Franco Mayo","DOM est difficile","2018-04-12"],
["Gisselle Joyce","Ya quoi?","2018-04-12"],
["Phoenix Haney","Arafat","2018-04-12"],
["Moriah Hall","Donne des nouvelles","2018-04-12"],
["Krystal Crane","J'attends vos rapports","2018-04-12"],
["Talan Austin","Quoi de neuf?","2018-04-12"],
["Jaydin Kirk","Carte de voeux","2018-04-12"],
["Liana Herrera","Liste des livres","2018-04-12"],
["Madilynn Webster","See ya!","2018-04-12"],
["Diana Young","Culte dimanche","2018-04-12"],
["Willie Randolph","Dernier choix","2018-04-12"],
["Shelby Miller","Liste d'audits","2018-04-12"],
["Jadyn Roy","That man must go","2018-04-12"],
["Kayden Mccoy","Learning LISP","2018-04-12"],
["Kody Keith","Learning Go","2018-04-12"],
["Rayan Ayers","Learning javascript","2018-04-12"],
["Adyson Stanton","Guest what","2018-04-12"],
["Jovan Skinner","I dunno","2018-04-12"],
["Alexia Reese","So happy","2018-04-12"],
["Amirah Hubbard","Appointment","2018-04-12"],
["Susan Richards","REndez-vous","2018-04-12"],
["Yasmine Keller","Trip","2018-04-12"],
["Mariela Khan","Safari vs Chrome","2018-04-12"],
["Silas Glover","Tab vs Space","2018-04-12"]];


var enTete = ["Action","Destinataire","Objet","Date"];
var mybody = document.getElementById("center");
		mybody.innerHTML = "";
		
       
        mytable = document.createElement("table");
        mytablebody = document.createElement("tbody");

        // creating all cells
        for(var j = 0; j < mesMessages.length; j++) {
            // creates a <tr> element
            mycurrent_row = document.createElement("tr");
			
			if( j === 0)
			{
				for(var k=0; k < enTete.length; k++)
				{
					// creates a <th> element
                mycurrent_cell = document.createElement("th");
                // creates a Text Node
                currenttext = document.createTextNode(enTete[k]);
                // appends the Text Node we created into the cell <th>
                mycurrent_cell.appendChild(currenttext);
                // appends the cell <td> into the row <tr>
                mycurrent_row.appendChild(mycurrent_cell);
				}
                
			}
			else
			{
				for(var i = 0; i < enTete.length; i++){
					if (i===0){
						mycurrent_cell = document.createElement("td");
						mycurrent_cell.setAttribute("class","checkBox");
						myInput = document.createElement("input"); 
						myInput.setAttribute("type","checkBox");
						mycurrent_cell.appendChild(myInput);
					}
					else{
					// creates a <td> element
					mycurrent_cell = document.createElement("td");
					// creates a Text Node
					currenttext = document.createTextNode(mesMessages[j][i-1]);
					// appends the Text Node we created into the cell <td>	
					mycurrent_cell.appendChild(currenttext);
					}
                
                // appends the cell <td> into the row <tr>
                mycurrent_row.appendChild(mycurrent_cell);
             }
			}
            
            // appends the row <tr> into <tbody>
            mytablebody.appendChild(mycurrent_row);
        }

        // appends <tbody> into <table>
        mytable.appendChild(mytablebody);
        // appends <table> into <body>
        mybody.appendChild(mytable);
        // sets the border attribute of mytable to 2;
        mytable.setAttribute("border","2");
		mytable.setAttribute("width","100%");
}



































/*

function createTable() {
  var i=0, rowEl=null,
      tableEl = document.createElement("table");
  // create 10 table rows, each with two cells
  for (i=1; i <= 3; i++) {
    rowEl = tableEl.insertRow();  // DOM method for creating table rows
    rowEl.insertCell().textContent = "table cell "+ i +"-1" ;      
    rowEl.insertCell().textContent = "table cell "+ i +"-2" ;
	rowEl.insertCell().textContent = "table cell "+ i +"-3" ;
  }
  document.getElementById("center").appendChild(tableEl);
}






function afficherContacts(idTable) {
    var x = document.createElement("TABLE");
    x.setAttribute("id",idTable);
    x.setAttribute("style", "width:100%");
    document.getElementById(idTable).appendChild(x);
    
}

function ajouterLigne(f,idTable){
	var l =  document.createElement("tr");
	var m;
	var n;
	  
	for(int i; i < f.length; i++)
	{ 
	   m =  document.createElement("th");
	   n = document.createTextNode(f[i]);
	   m.appendChild(n);
	  document.getElementById(idTable).appendChild(l);
	}
}
    

    
    
    
    
    
  /*  
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode("Alino");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
}
*/