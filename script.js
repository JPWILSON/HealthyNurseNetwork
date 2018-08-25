window.onload = function(){
	var currentNum = '0';
	var subTot = 0;
	var operator = '';
	var eqPressed = false;
	var opPressed = false;
	var decUsed = false;
	var decInNum = false
	document.getElementById("total").innerHTML = currentNum;

	document.getElementById("0").onclick = function(){
		if(eqPressed === false){

		}
			if(currentNum != '0'){
			currentNum += "0";
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
		}
	}
	document.getElementById("1").onclick = function(){
		if(eqPressed === false){
			if(currentNum != '0'){
			currentNum += '1';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
		} else{
			currentNum = '1';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
			}
		}
	}

	document.getElementById("2").onclick = function(){
		if(eqPressed === false){
			if(currentNum != '0'){
			currentNum += '2';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
		} else{
			currentNum = '2';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
			}
		}
	}

	document.getElementById("3").onclick = function(){
		if(eqPressed === false){
			if(currentNum != '0'){
			currentNum += '3';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
		} else{
			currentNum = '3';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
			}
		}
	}

	document.getElementById("4").onclick = function(){
		if(eqPressed === false){
			if(currentNum != '0'){
			currentNum += '4';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
		} else{
			currentNum = '4';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
			}
		}
	}
	document.getElementById("5").onclick = function(){
		if(eqPressed === false){
			if(currentNum != '0'){
			currentNum += '5';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
		} else{
			currentNum = '5';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
			}
		}
		
	}

	document.getElementById("6").onclick = function(){
		if(eqPressed === false){
			if(currentNum != '0'){
			currentNum += '6';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
		} else{
			currentNum = '6';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
			}
		}
		
	}

	document.getElementById("7").onclick = function(){
		if(eqPressed === false){
			if(currentNum != '0'){
			currentNum += '7';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
		} else{
			currentNum = '7';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
			}
		}
		
	}

	document.getElementById("8").onclick = function(){
		if(eqPressed === false){
			if(currentNum != '0'){
				currentNum += '8';
				document.getElementById("total").innerHTML = currentNum;
				eqPressed = false;
				opPressed = false;
			} else{
				currentNum = '8';
				document.getElementById("total").innerHTML = currentNum;
				eqPressed = false;
				opPressed = false;
			}
		}
	}

	document.getElementById("9").onclick = function(){
		if(eqPressed === false){
			if(currentNum != '0'){
			currentNum += '9';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
		} else{
			currentNum = '9';
			document.getElementById("total").innerHTML = currentNum;
			eqPressed = false;
			opPressed = false;
		}
		}
	}

	document.getElementById("dec").onclick = function(){
			if(decUsed == false){
				currentNum += '.';
				document.getElementById("total").innerHTML = currentNum;
				eqPressed = false;
				opPressed = false;
				decUsed = true;
				decInNum = true;
			}
	}


	document.getElementById("plus").onclick = function(){
		if(opPressed == false && operator != ''){
			if(operator === 'plus'){
				if(decInNum === false){
					subTot += parseInt(currentNum);
				}else{
					subTot += parseFloat(currentNum);
				}
			}
			else if(operator === 'minus'){
				if(decInNum === false){
					subTot -= parseInt(currentNum);
				}else{
					subTot -= parseFloat(currentNum);
				}
			}
			else if(operator === 'div'){
				if(decInNum === false){
					subTot /= parseInt(currentNum);
				}else{
					subTot /= parseFloat(currentNum);
				}
			}
			else{
					if(decInNum === false){
					subTot *= parseInt(currentNum);
				}else{
					subTot *= parseFloat(currentNum);
				}
			}
			document.getElementById("total").innerHTML = '+';
			currentNum = '0'
			operator = 'plus';
			opPressed = true;
			eqPressed = false;
			decUsed = false;
			console.log(subTot);
		}
		else if(opPressed === false && operator === ''){
			if(decUsed == true || decInNum == true){
				subTot = parseFloat(document.getElementById("total").innerHTML);
			}else{
				subTot = parseInt(document.getElementById("total").innerHTML);
			}
			//subTot = parseInt(currentNum);
			currentNum = '0';
			operator = 'plus'
			opPressed = true;
			eqPressed = false;
			decUsed = false;
			document.getElementById("total").innerHTML = '+';
			console.log("pressed plus when hadnt been prsd b4");
			console.log(subTot);
		}
	}

	document.getElementById("minus").onclick = function(){
				if(opPressed == false && operator != ''){
			if(operator === 'plus'){
				if(decInNum === false){
					subTot += parseInt(currentNum);
				}else{
					subTot += parseFloat(currentNum);
				}
			}
			else if(operator === 'minus'){
				if(decInNum === false){
					subTot -= parseInt(currentNum);
				}else{
					subTot -= parseFloat(currentNum);
				}
			}
			else if(operator === 'div'){
				if(decInNum === false){
					subTot /= parseInt(currentNum);
				}else{
					subTot /= parseFloat(currentNum);
				}
			}
			else{
					if(decInNum === false){
					subTot *= parseInt(currentNum);
				}else{
					subTot *= parseFloat(currentNum);
				}
			}
			document.getElementById("total").innerHTML = '-';
			currentNum = '0'
			operator = 'minus';
			opPressed = true;
			eqPressed = false;
			decUsed = false;
			console.log(subTot);
		}
		else if(opPressed === false && operator === ''){
			if(decUsed == true || decInNum == true){
				subTot = parseFloat(document.getElementById("total").innerHTML);
			}else{
				subTot = parseInt(document.getElementById("total").innerHTML);
			}
			//subTot = parseInt(currentNum);
			currentNum = '0';
			operator = 'minus'
			opPressed = true;
			eqPressed = false;
			decUsed = false;
			document.getElementById("total").innerHTML = '-';
			console.log("pressed minus when hadnt been prsd b4");
			console.log(subTot);
		}
	}

	document.getElementById("div").onclick = function(){
				if(opPressed == false && operator != ''){
			if(operator === 'plus'){
				if(decInNum === false){
					subTot += parseInt(currentNum);
				}else{
					subTot += parseFloat(currentNum);
				}
			}
			else if(operator === 'minus'){
				if(decInNum === false){
					subTot -= parseInt(currentNum);
				}else{
					subTot -= parseFloat(currentNum);
				}
			}
			else if(operator === 'div'){
				if(decInNum === false){
					subTot /= parseInt(currentNum);
				}else{
					subTot /= parseFloat(currentNum);
				}
			}
			else{
					if(decInNum === false){
					subTot *= parseInt(currentNum);
				}else{
					subTot *= parseFloat(currentNum);
				}
			}
			document.getElementById("total").innerHTML = '/';
			currentNum = '0'
			operator = 'div';
			opPressed = true;
			eqPressed = false;
			decUsed = false;
			console.log(subTot);
		}
		else if(opPressed === false && operator === ''){
			if(decUsed == true || decInNum == true){
				subTot = parseFloat(document.getElementById("total").innerHTML);
			}else{
				subTot = parseInt(document.getElementById("total").innerHTML);
			}
			//subTot = parseInt(currentNum);
			currentNum = '0';
			operator = 'div'
			opPressed = true;
			eqPressed = false;
			decUsed = false;
			document.getElementById("total").innerHTML = '/';
			console.log("pressed div when hadnt been prsd b4");
			console.log(subTot);
		}
	}


	document.getElementById("mult").onclick = function(){
				if(opPressed == false && operator != ''){
			if(operator === 'plus'){
				if(decInNum === false){
					subTot += parseInt(currentNum);
				}else{
					subTot += parseFloat(currentNum);
				}
			}
			else if(operator === 'minus'){
				if(decInNum === false){
					subTot -= parseInt(currentNum);
				}else{
					subTot -= parseFloat(currentNum);
				}
			}
			else if(operator === 'div'){
				if(decInNum === false){
					subTot /= parseInt(currentNum);
				}else{
					subTot /= parseFloat(currentNum);
				}
			}
			else{
					if(decInNum === false){
					subTot *= parseInt(currentNum);
				}else{
					subTot *= parseFloat(currentNum);
				}
			}
			document.getElementById("total").innerHTML = 'x';
			currentNum = '0'
			operator = 'mult';
			opPressed = true;
			eqPressed = false;
			decUsed = false;
			console.log(subTot);
		}
		else if(opPressed === false && operator === ''){
			//if(decUsed == true || decInNum == true){
				subTot = parseFloat(document.getElementById("total").innerHTML);
			/*}else{
				subTot = parseInt(document.getElementById("total").innerHTML);
			}*/
			//subTot = parseInt(currentNum);
			currentNum = '0';
			operator = 'mult'
			opPressed = true;
			eqPressed = false;
			decUsed = false;
			document.getElementById("total").innerHTML = 'x';
			console.log("pressed mult when hadnt been prsd b4");
			console.log(subTot);
		}
	}

	document.getElementById("equals").onclick = function(){
		if(eqPressed == false && opPressed == false && operator != ''){
			if(operator === 'plus'){
				console.log("eq was pressed plus was op, subTot is: ");
				console.log(subTot);
				console.log("and currentNum is: ");
				console.log(currentNum)
				if(decInNum === false){
					subTot += parseInt(currentNum);
				}else{
					subTot += parseFloat(currentNum);
				}
			}
			else if(operator === 'minus'){
				if(decInNum === false){
					subTot -= parseInt(currentNum);
				}else{
					subTot -= parseFloat(currentNum);
				}
			}
			else if(operator === 'div'){
				if(decInNum === false){
					subTot /= parseInt(currentNum);
				}else{
					subTot /= parseFloat(currentNum);
				}
			}
			else{
					if(decInNum === false){
					subTot *= parseInt(currentNum);
				}else{
					subTot *= parseFloat(currentNum);
				}
			}
			document.getElementById("total").innerHTML = subTot;
			currentNum = '0'
			operator = '';
			opPressed = false;
			eqPressed = true;
			decInNum = false;
			console.log(subTot);
			console.log("equals was pressed");
		}
	}

	document.getElementById("C").onclick = function(){
		currentNum = '0';
		document.getElementById("total").innerHTML = currentNum;
		eqPressed = false;
		opPressed = false;
		decUsed = false;

	}

	document.getElementById("AC").onclick = function(){
		currentNum = '0';
		subTot = 0;
		operator = '';
		eqPressed = false;
		opPressed = false;
		decUsed = false;
		decInNum = false
		document.getElementById("total").innerHTML = currentNum;
	}

};
	
