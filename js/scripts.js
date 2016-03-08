function numberToRoman(number,type){
    var returnValue = "";
	var numbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
	if(type=="roman_upper"){
		var values  = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    }else if(type="roman_lower"){
		var values  = ["i","iv","v","ix","x","xl","l","xc","c","cd","d","cm","m"];
    }

	for(i=1;i<=numbers.length;i++){
		while(number>=numbers[numbers.length - i]){
			number -= numbers[numbers.length - i];
			returnValue += values[numbers.length - i];
		}
	}
	return returnValue;

}
