	var myVoice = new p5.Speech('Google English Female'); // new P5.Speech object

	var tag = ["please ash answer my question","please ash answer"];
	var rejects = ["why are you wasting my time?", "please do not play with me", "don't you know how to ask nicely?", "my time is valuable you know", "you need more practice", "you are not getting into my database imploring like that", "what if i implored with you like that?", "i wont even look at your question until you read all text on this page"];
	var energy = ["your energy is questionable", "i might not be the right fit for you", "let someone else try to ask the question", "I'm sorry but something feels off about you", "first answer how are you feeling today?", "i think you need to calm down first", "prove that i can trust you with this info"]
	var cue = ["Be more clear with your question", "I don't understand your question", "I couldn't understand what youre asking", "I couldn't find an answer", "error: could not load from database", "an error occured while loading database", "ask your question again", "null"];
	var menuLoaded = 0;
	var tt1, tt2, tt3, label, input, input2, checkbox, speakbutton, vslider, rslider, pslider, beg, guessing="", ghosting = false, reg = "", first = "", done=false, lives=1;

		myVoice.interrupt = true;
		newSide();

	function newSide()
	{
			tt1=cue[Math.floor((Math.random() * cue.length))];
			tt2=energy[Math.floor((Math.random() * energy.length))];
			tt3=rejects[Math.floor((Math.random() * rejects.length))];
	}

	function doSpeak()
	{
		if((document.getElementById("Implore").value.toLowerCase().trim() == tag[0] || document.getElementById("Implore").value.toLowerCase().trim() == tag[1]))
		{
			if(guessing!="")
			{
			myVoice.speak(guessing); // debug printer for voice options
			document.getElementById("answer").innerHTML = guessing.toLowerCase();
			}
			else if (lives<1)
			{
						myVoice.speak(tt1); // debug printer for voice options
			document.getElementById("answer").innerHTML = tt1.toLowerCase();
			}
			else
			{
						myVoice.speak(tt2); // debug printer for voice options
			document.getElementById("answer").innerHTML = tt2.toLowerCase();
			}
		}
		else
		{
			tt3=rejects[Math.floor((Math.random() * rejects.length))];
			myVoice.speak(tt3);
		document.getElementById("answer").innerHTML = tt3.toLowerCase();
		}
		done=true;
	}

	function startGhost()
	{
		var rep = tag[0][reg.length-1];
			beg = reg.length;
			ghosting = true;
			first = reg;
	}

		function endGhost()
	{
			addTo(1);
			ghosting = false;
			lives--;
	}

	function CheckAccuracy()
	{
		if(ghosting && !done)
		{
			addTo(0);
		guessing = getStart(reg);
		}
	}

	function addTo(e)
	{
							if(reg.length <= tag[0].length-1 && !done)
				{
					document.getElementById("Implore").value = first;
			for (var i = first.length; i <= reg.length+e; i++)
			{

			document.getElementById("Implore").value += tag[0][i];
		}
			}
	}

	function Print(ob)
	{
		console.log(ob);
	}

	function getStart(st)
	{
		var newRet = "";

		for (var i = beg; i <= st.length - 1; i++) {
			newRet+=reg[i];
		}

		return newRet;
	}

	function reseter()
	{
			reg = "";
			first = "";
			guessing = "";
			ghosting = false;
			done = false;
			lives = 1;
		document.getElementById("Implore").value = "";
		document.getElementById("Question").value = "";
		document.getElementById("answer").innerHTML = "";
		newSide();
	}
