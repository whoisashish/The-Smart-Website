	document.getElementById("Implore").onclick = function(e) {
		if(done)
		{
			reseter();
		}
	}

	document.getElementById("Implore").onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);

    if(!ghosting && lives>0)
    {
	    if (/\//.test(charStr)) 
	    {
	    	startGhost();
	        return false;
	    }
	    else
	    {
	    	if( document.getElementById("Implore").value.length >= tag[0].length)
	    	{
	        return false;
	    	}
	    	reg += e.key;
	    }
	}
    else if(ghosting)
    {
			    if (/\//.test(charStr)) 
	    {
	    	endGhost();
	        return false;
	    }
	    else
	    {
	    	reg += e.key;
    	return false;
    }
    }
};

	document.getElementById("Implore").onkeydown = function(f) {
    f = f || window.event;
    if (f.key == "Backspace")
    	{
    		var temp = "";
    		for (var i = 0; i < reg.length-1; i++) {
    			temp += reg[i];
    		}
    		reg = temp;

    		if(done)
    		{
    			reseter();
    		}
    	}
    };