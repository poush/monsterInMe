$(function() {
    // Event for submitting name

    // $('#submit').click(function () {
    //     $('#first').removeClass('slide-to-top').addClass('slide-from-top');
    //     $('#second').removeClass('slide-to-bottom').addClass('slide-from-bottom');
    //     $('#content').addClass('content-then');
    //     $('.logo').addClass('logo-then');
    //     $('.slider-top').addClass('slider-top-then');
    //     $('.slider-bottom').addClass('slider-bottom-then');
    //     $('form[name="monster"]').addClass('monster-then');
    //     setTimeout(reset,2000);
    // })

    $('#name').submit(function(ev) {
        ev.preventDefault();
        $('#first').removeClass('slide-to-top').addClass('slide-from-top');
        $('#second').removeClass('slide-to-bottom').addClass('slide-from-bottom');
        $('#content').toggle({ effect: 'scale', direction: 'horizontal', origin: ['middle', 'center'], duration: 700 })
        setTimeout(reset, 1000);
    })
});

function reset() {
	var old_name = $('#old_name').val();
	monster = new Monster(old_name);
	monster.monsterous(function(new_name){
		$('#mname').html(new_name);
		$('.monsterName').show();
		$('form').hide();
    	$('#first').removeClass('slide-from-top').addClass('slide-to-top');
    	$('#second').removeClass('slide-from-bottom').addClass('slide-to-bottom');
    	setTimeout( function() {
            $('#content').toggle({ effect: 'scale', direction: 'horizontal', origin: ['bottom', 'center'], duration: 800 })
        }, 100);
	});
        // $('#content').removeClass('content-then');
        // $('.logo').removeClass('logo-then');
        // $('.slider-top').removeClass('slider-top-then');
        // $('.slider-bottom').removeClass('slider-bottom-then');
        // $('form[name="monster"]').removeClass('monster-then');
}


function Monster(old_name) {

    this.old_name = old_name;

    // Just in case no new name generated
    this.new_name = old_name;

    this.monstah = "";

    this.is_valid = false;

    if (!(/^[A-Za-z\s]+$/.test(old_name))) {
        alert(' You gotta use real letters, thems the rules! ');
    }
    else
    	this.is_valid = true;

}

Monster.prototype.MixAlgo = function() {
	var i = 0;
	var new_name = "";
	var split_name = this.old_name.split("")

    for (var letter in this.old_name) {
    	if(!this.is_valid)
    		return false;
        switch (split_name[i].toLowerCase()) {

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
                alert("You're going to need to use some real letters!");
                this.is_valid = false;
        }
    }

    return new_name;
};


/**
 * Generate Monsterous Name
 * @param {function} cb callback function with new name passed as param
 * @return {String} Monsterous Name (New Name)
 */
Monster.prototype.monsterous = function(cb) {

    if (this.is_valid) {
        var new_name = this.MixAlgo()

        if(!new_name)
        	return cb();

        this.new_name = new_name;

        var monsterous = this.capitaliseName(new_name)

        cb(monsterous);
    }

};

Monster.prototype.capitaliseName = function(str) {
        return str.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); 
		});
};

