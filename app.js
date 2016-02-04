
function generateName(form){
	var old_name = form.realname.value.toLowerCase();
	console.log(old_name);
	var split_name = old_name.split("");
	var new_name = "";
	var hooman = "";
	var monstah = "";
	var i = 0;

	if (/^[A-Za-z\s]+$/.test(old_name)) {
		
		for (var letter in old_name) {
	
						switch (split_name[i]) {
	
							case " ":
								new_name += " ";
								i++;
								break;
	
							case "a":
								new_name += "";
								i++;
								break;
	
							case "b":
								new_name += "de";
								i++;
								break;
	
							case "c":
								new_name += "mi";
								i++;
								break;
	
							case "d":
								new_name += "a";
								i++;
								break;
	
							case "e":
								new_name += "ra";
								i++;
								break;
	
							case "f":
								new_name += "bi";
								i++;
								break;
	
							case "g":
								new_name += "shu";
								i++;
								break;
	
							case "h":
								new_name += "o";
								i++;
								break;
	
							case "i":
								new_name += "bo";
								i++;
								break;
	
							case "j":
								new_name += "ba";
								i++;
								break;
	
							case "k":
								new_name += "e";
								i++;
								break;
	
							case "l":
								new_name += "";
								i++;
								break;
	
							case "m":
								new_name += "de";
								i++;
								break;
	
							case "n":
								new_name += "pa";
								i++;
								break;
	
							case "o":
								new_name += "ka";
								i++;
								break;
	
							case "p":
								new_name += "bo";
								i++;
								break;
	
							case "q":
								new_name += "si";
								i++;
								break;
	
							case "r":
								new_name += " ";
								i++;
								break;
	
							case "s":
								new_name += "";
								i++;
								break;
	
							case "t":
								new_name += "ma";
								i++;
								break;
	
							case "u":
								new_name += "";
								i++;
								break;
	
							case "v":
								new_name += "yo";
								i++;
								break;
	
							case "w":
								new_name += "";
								i++;
								break;
	
							case "x":
								new_name += "wo";
								i++;
								break;
	
							case "y":
								new_name += "to";
								i++;
								break;
	
							case "z":
								new_name += "";
								i++;
								break;
	
							default:
								console.log("You're going to need to use some real letters!");
						}
					}
	
					function capitaliseName(str){
					    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
					}
	
					hooman = capitaliseName(old_name);
					monstah = capitaliseName(new_name);
	
					console.log (new_name);
					console.log(monstah);
	
					console.log("Say goodbye to " + hooman + " and hello to " + monstah + "!");
					
					var node = document.getElementById('monster_return');
					node.innerHTML = "<div class='mouth-strip'><img src='img/mouth-bg-top.png' /></div><div class='mouthbg'>Say goodbye to " + hooman + " and hello to <br> <div class='reveal'>" + monstah + "!</div></div><div class='mouth-strip'><img src='img/mouth-bg-bottom.png' /></div>";
	
					console.log("Script has finished");
		} else {
			alert("You gotta use real letters, thems the rules!");
	}
}

