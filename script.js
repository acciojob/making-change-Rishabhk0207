const makeChange = (c) => {
  // your name here
	 const values = {
        "q": 25,
        "d": 10,
        "n": 5,
        "p": 1
    };

    let result = {};

    for (let coin in values) {
		
        result[coin] = Math.floor(c / values[coin]);
        c %= values[coin];
    }

    return result; 
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
