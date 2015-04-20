Mousetrap.bind('q', countDOWN);
	Mousetrap.bind('w', middle);
	Mousetrap.bind('e', countUP);
	Mousetrap.bind('r', reset);
	Mousetrap.bind('u', doUndo);
	var clicks = 0;
	var cardsLeft = 0;
	var ticks;
	var trueCount = 0;
	var numOfDecks = 0;
	var highCardsLeft = 0;
	var middleCardsLeft = 0;
	var lowCardsLeft = 0;
	var highCardPercent=0;
	var lowCardPercent=0;
	var result=0;
	var lastFunction=0;
	


	

	function trueCounter(){
		var tc = trueCount.toFixed(2);
		var remainingDecks = cardsLeft / 52;
		trueCount = clicks / remainingDecks;
		document.getElementById("truthcount").innerHTML = tc;
	
			if (trueCount >= 8) {
			document.getElementById("trueOne").innerHTML = "x5";
			}
				else if(trueCount >= 6){
				document.getElementById("trueOne").innerHTML = "x4";
				}
				else if(trueCount >= 4){
				document.getElementById("trueOne").innerHTML = "x3";
				}
				else if(trueCount >= 2){
				document.getElementById("trueOne").innerHTML = "x2";
				}
				else if(trueCount <= 1.99){
				document.getElementById("trueOne").innerHTML = "x1";
				}
	};
	setInterval(trueCounter, 1);
	
	function countUP() {
		ticks = true;
		if(lowCardsLeft > 0){
		clicks += 1;
		cardsLeft -=1;
		lowCardsLeft -=1;
		lastFunction=1;
		}
		highCardPercent = ((highCardsLeft/cardsLeft)*100);
		lowCardPercent = ((lowCardsLeft/cardsLeft)*100);
		result = highCardPercent.toPrecision(4)
		document.getElementById("count").innerHTML = clicks;
		document.getElementById("Left").innerHTML = cardsLeft;
		document.getElementById("hcl").innerHTML = result;
		result = lowCardPercent.toPrecision(4)
		document.getElementById("lcl").innerHTML = result;
		document.getElementById("ticker").innerHTML = ticks;
		

	};
	function middle(){
		ticks = null;
		if(middleCardsLeft > 0){
		cardsLeft -=1;
		middleCardsLeft -= 1;
		lastFunction=2;
		}
		highCardPercent = ((highCardsLeft/cardsLeft)*100);
		lowCardPercent = ((lowCardsLeft/cardsLeft)*100);
		result = highCardPercent.toPrecision(4)
		document.getElementById("Left").innerHTML = cardsLeft;
		document.getElementById("hcl").innerHTML = result;
		result = lowCardPercent.toPrecision(4);
		document.getElementById("lcl").innerHTML = result;

	};
	function countDOWN(){
		ticks = false;
		if(highCardsLeft > 0){
		clicks -= 1;
		cardsLeft -=1;
		highCardsLeft -= 1;
		lastFunction=3;
		}
		highCardPercent = ((highCardsLeft/cardsLeft)*100);
		lowCardPercent = ((lowCardsLeft/cardsLeft)*100);
		result = highCardPercent.toPrecision(4)
		document.getElementById("count").innerHTML = clicks;
		document.getElementById("Left").innerHTML = cardsLeft;
		document.getElementById("hcl").innerHTML = result;
		result = lowCardPercent.toPrecision(4);
		document.getElementById("lcl").innerHTML = result;
		document.getElementById("ticker").innerHTML = ticks;
		
		
	};
	
	function reset(){
		lastFunction=0;
		trueCount = 0;
		clicks = 0;
		cardsLeft = numOfDecks * 52;
		highCardsLeft = 20 * numOfDecks;
		middleCardsLeft = 12 * numOfDecks;
		lowCardsLeft = 20*numOfDecks;
		highCardPercent = ((highCardsLeft/cardsLeft)*100);
		lowCardPercent = ((lowCardsLeft/cardsLeft)*100);
		result = highCardPercent.toPrecision(4);
		document.getElementById("count").innerHTML = clicks;
		document.getElementById("Left").innerHTML = cardsLeft;
		document.getElementById("truthcount").innerHTML = trueCount;
		document.getElementById("hcl").innerHTML = result;
		result = lowCardPercent.toPrecision(4);
		document.getElementById("lcl").innerHTML = result;

	};

	function doUndo(){
		if (lastFunction==1){
			lastFunction=0;
			clicks -= 1;
			cardsLeft +=1;
			lowCardsLeft +=1;
			highCardPercent = ((highCardsLeft/cardsLeft)*100);
			lowCardPercent = ((lowCardsLeft/cardsLeft)*100);
			result = highCardPercent.toPrecision(4)
			document.getElementById("count").innerHTML = clicks;
			document.getElementById("Left").innerHTML = cardsLeft;
			document.getElementById("hcl").innerHTML = result;
			result = lowCardPercent.toPrecision(4)
			document.getElementById("lcl").innerHTML = result;
			document.getElementById("ticker").innerHTML = ticks;
		}else if(lastFunction==2){
			lastFunction=0;
			cardsLeft +=1;
			highCardPercent = ((highCardsLeft/cardsLeft)*100);
			lowCardPercent = ((lowCardsLeft/cardsLeft)*100);
			result = highCardPercent.toPrecision(4)
			document.getElementById("Left").innerHTML = cardsLeft;
			document.getElementById("hcl").innerHTML = result;
			result = lowCardPercent.toPrecision(4);
			document.getElementById("lcl").innerHTML = result;
		}else if(lastFunction==3){
		    lastFunction=0;
			clicks += 1;
			cardsLeft +=1;
			highCardsLeft += 1;
			highCardPercent = ((highCardsLeft/cardsLeft)*100);
			lowCardPercent = ((lowCardsLeft/cardsLeft)*100);
			result = highCardPercent.toPrecision(4)
			document.getElementById("count").innerHTML = clicks;
			document.getElementById("Left").innerHTML = cardsLeft;
			document.getElementById("hcl").innerHTML = result;
			result = lowCardPercent.toPrecision(4);
			document.getElementById("lcl").innerHTML = result;
			document.getElementById("ticker").innerHTML = ticks;		
		}
		
	}
	
	function deckSelection(selectDeck){
			var sd = document.getElementById(selectDeck);
			numOfDecks = sd.value;
			cardsLeft = numOfDecks * 52;
			reset();
	};
	