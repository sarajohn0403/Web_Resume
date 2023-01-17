const validateAmt=function(amnt)
{if(parseInt(amnt)<0 || isNaN(amnt) || parseInt(amnt)>999999 )
{ 
	document.querySelector("#message").innerHTML="This is not a valid input";
    document.querySelector("#amnt").value="";
	console.log("This is not a valid number");
}
 else{ document.querySelector("#message").innerHTML="";
	  }
}
const dropList = document.querySelectorAll("form select"), 
fromCurrency = document.querySelector(".from select"), 
toCurrency = document.querySelector(".to select"),

getButton = document.querySelector("form button");


for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list)
    {
        //selecting USD by default as FROM currency and INR as TO currency
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "INR" ? "selected" : "";
        //creating option tag with passing currency code as text and value
        let optionTag = `<option value= "${currency_code}" ${selected}> ${currency_code} </option>`;
        //inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target);   //calling loadFlag with passing element as an argument
       
    });
}

function loadFlag(element){
	const amount = document.querySelector("form input");
	amount.value = "1";
    for(let code in country_list){
        if(code == element.value){  //if currency code of country list is equal to option value
            //selecting img tag of particular drop list
            let imgTag = element.parentElement.querySelector("img"); 
            // passing country code of a selected currency code in a img url 
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;

        }
    }
}

window.addEventListener("load", ()=>{
    
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault();  //preventing form from submitting
	
    getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", ()=>{
   
    let tempCode = fromCurrency.value;  // temporary currency code of FROM drop list
    fromCurrency.value = toCurrency.value;  // passing TO currency code to FROM currency code
    toCurrency.value = tempCode;  // passing temporary currency code to TO currency code 
    loadFlag(fromCurrency);  // calling loadFlag with passing select element (fromCurrency) of FROM
    loadFlag(toCurrency);   // calling loadFlag with passing select element (toCurrency) of TO
    getExchangeRate();
})

function getExchangeRate()
{
    console.log(fromCurrency);
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");

    let amtVal = amount.value;
    //Default value will be 1 in the input field if no value is entered or user enters 0
    if(amtVal == "" || amtVal == "0" ){
        amount.value = "1";
        amtVal = 1;
    }
	
    exchangeRateTxt.innerText = "Fetching exchange rate...";
    const fC = fromCurrency.value.toLowerCase();
    const tC = toCurrency.value.toLowerCase();
    let url = `https://www.floatrates.com/daily/${fC}.json`;
    //console.log(url);

    fetch(url).then(response => response.json()).then(result => {
        console.log(fC);
        let e = result[tC];
        let exchangeRate=e.rate;
        console.log(e);
		
        let totalExRate = (amtVal * exchangeRate).toFixed(3);
        exchangeRateTxt.innerText = `${amtVal} ${fC} = ${totalExRate} ${tC}`;
        time2.innerText =e.date;
        let r= e.inverseRate;
        rate.innerText=`${1} ${fC} = ${exchangeRate.toFixed(3)} ${tC}`;
    }).catch(() => {
        exchangeRateTxt.innerText = "Something went wrong";
    });
}

