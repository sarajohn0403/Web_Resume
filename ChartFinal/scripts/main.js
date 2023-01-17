// JavaScript Document
//alert("Hello");
let myChart = document.getElementById("myChart").getContext('2d');
var radiobtn1= document.querySelectorAll('#radiobtn1');
var radiobtn2= document.querySelectorAll('#radiobtn2');
const btnScrollRight = document.getElementById('scrollright');
const btnScrollLeft = document.getElementById('scrollleft');
btnScrollRight.addEventListener("click", scrollRight);
btnScrollLeft.addEventListener("click", scrollLeft);

var selected_year="";
var selected_month="";
var sMonth=0;
var indexvalue=0;
var position=0;
var pos=0;
var dt=""
var monthName="";
var listArray=[];


let field = document.querySelector('#date');

// Handle date changes
date.addEventListener('input', function () 
{
  // Get the date
  let date = new Date(field.value);
  console.log(date);
  let datestring = date.toString();
  console.log(datestring);

			for(var i =4; i<7; i++)
		     {
		       selected_month = selected_month+datestring[i];
		     }
		       console.log(selected_month);

	
		     for(var i=11; i<15; i++)
		    {
		      selected_year = selected_year+datestring[i];
		    }
			   console.log(selected_year);
	
		if (selected_month=="Jan") {monthName="January";}
		else if (selected_month=="Feb") {monthName="February";}
		else if (selected_month=="Mar") {monthName="March";}
		else if (selected_month=="Apr") {monthName="April";}
		else if (selected_month=="May") {monthName="May";}
		else if (selected_month=="Jun") {monthName="June";}
		else if (selected_month=="Jul") {monthName="July";}
		else if (selected_month=="Aug") {monthName="August";}
		else if (selected_month=="Sep") {monthName="September";}
		else if (selected_month=="Oct") {monthName="October";}
		else if (selected_month=="Nov") {monthName="November";}
		else if (selected_month=="Dec") {monthName="December";}
        
	    console.log(monthName);    
	    
		async function fetchData()
		{
		      const url = 'json/fuel_Data.json';
		      const response = await fetch(url);
		     // wait until the request has been completed
		     const result = await response.json();
		
		     //will save or store the data
		      return result;
		};
		fetchData().then(result => 
		{
		     console.log(result);
		    if(document.getElementById('radiobtn2').checked) 
			{   const LN=(result) => result.Year==selected_year && result.Month==monthName;
				var position=result.findIndex(LN);
				pos=position+1;
				  for(var i=0; i<12; i++)
		           { 
				     listArray[i]=pos;
				     pos++;

			       }
			     for(var j=0; j<12; j++)
		           { 
				     console.log(listArray[j]);

			       }
		    }	
		    else if(document.getElementById('radiobtn1').checked)
			{    
				const LN=(result) => result.Year==selected_year-1 && result.Month==monthName;
				var position=result.findIndex(LN);
				pos=position-1;
					for(var i=0; i<12; i++)
					{ 
						listArray[i]=pos;
						pos--;

					}
					for(var j=0; j<12; j++)
					{ 
						console.log(listArray[j]);

					}
		    }
				
		          console.log(result[listArray[0]].Solid);
		
				  let demoChart = new Chart(myChart,
					{
					type: 'bar',
					data: 
					{
						labels: [result[listArray[0]].Month,result[listArray[1]].Month,result[listArray[2]].Month,result[listArray[3]].Month,result[listArray[4]].Month,result[listArray[5]].Month,
						result[listArray[6]].Month,result[listArray[7]].Month,result[listArray[8]].Month,result[listArray[9]].Month,result[listArray[10]].Month,result[listArray[11]].Month], 
						datasets: 
						[
							{
							label: 'Solid fuels (D7DW)',
							data: [result[listArray[0]].Solid,result[listArray[1]].Solid,result[listArray[2]].Solid,result[listArray[3]].Solid,result[listArray[4]].Solid,result[listArray[5]].Solid,
							result[listArray[6]].Solid,result[listArray[7]].Solid,result[listArray[8]].Solid,result[listArray[9]].Solid,result[listArray[10]].Solid,result[listArray[11]].Solid],
							backgroundColor: 'rgba(21,7,91, 0.45)',
 							borderWidth: 1,
 							borderColor: 'rgb(21,7,91)' //blue
 							},
							 {
								label: 'Gas (D7DU)',
								data: [result[listArray[0]].Gas,result[listArray[1]].Gas,result[listArray[2]].Gas,result[listArray[3]].Gas,result[listArray[4]].Gas,result[listArray[5]].Gas,
								result[listArray[6]].Gas,result[listArray[7]].Gas,result[listArray[8]].Gas,result[listArray[9]].Gas,result[listArray[10]].Gas,result[listArray[11]].Gas],
								backgroundColor: 'rgba(255,127,80, 0.45)',
                    			borderWidth: 1,
                    			borderColor: 'rgb(255,127,80)' //peach
							},
							{
								label: 'Electricity (D7DT)',
								data: [result[listArray[0]].Electricity,result[listArray[1]].Electricity,result[listArray[2]].Electricity,result[listArray[3]].Electricity,result[listArray[4]].Electricity,result[listArray[5]].Electricity,
								result[listArray[6]].Electricity,result[listArray[7]].Electricity,result[listArray[8]].Electricity,result[listArray[9]].Electricity,result[listArray[10]].Electricity,result[listArray[11]].Electricity],

								backgroundColor: 'rgba(18, 187, 172, 0.8)', 
								borderWidth: 1,
								borderColor: 'green' //green
							},
							{
								label: 'Liquid fuels (D7DV)',
								data: [result[listArray[0]].Liquid,result[listArray[1]].Liquid,result[listArray[2]].Liquid,result[listArray[3]].Liquid,result[listArray[4]].Liquid,result[listArray[5]].Liquid,
								result[listArray[6]].Liquid,result[listArray[7]].Liquid,result[listArray[8]].Liquid,result[listArray[9]].Liquid,result[listArray[10]].Liquid,result[listArray[11]].Liquid],
								backgroundColor: 'rgba(247, 251, 114, 0.8)',
								borderWidth: 1,
								borderColor: 'rgba(249, 211, 13)' //yellow
							}
					   
						]
					},
							 options: {
								scales: {
								y: {
								title: {
								display: true, 
								text: 'Fuel Cost (unit/ UK pound)',
								font: {
								size: 15
								}
								},
								min: 00,
								max: 400,

								ticks: {
									callback: (value, index, values) => {
									 // return value;
									 return new Intl.NumberFormat('en-GB', {style: 'currency',
								 currency: 'GBP',
								  maximunSignificantDigits: 3
								 }).format(value);
								}
								}
							},
								x: {
								title: {
								display: true, 
								text: 'Months',
								font: {
								size: 15
								}
								},
								min: 00,
								max: 11
								}
								},
								plugins: {
								title: {
								display: true, 
								text: 'Fuel Cost Comparison from January 1996 - August 2022',
								font: {
								size: 20
								}
								},
								legend: {
								position: 'top'
								},
								}
								}
								});
							})//fetchData().then(result)
	
						});
							
				//Function for right scroller button
				function scrollRight() 
				{
					const dataLength = demoChart.data.labels.length;
					if(demoChart.config.options.scales.x.max >= dataLength - 1) 
					{
						demoChart.config.options.scales.x.min = dataLength - 12;
						demoChart.config.options.scales.x.max = dataLength - 1;
					}
					else {
							demoChart.config.options.scales.x.min += 1;
							demoChart.config.options.scales.x.max += 1;
						 }       
						demoChart.update();
				}
				
				//Function for Left scroller button
				function scrollLeft() 
				{
					if(demoChart.config.options.scales.x.min <= 0) {
						demoChart.config.options.scales.x.min = 0;
						demoChart.config.options.scales.x.max = 11;
					}
					else {
						demoChart.config.options.scales.x.min -= 1;
						demoChart.config.options.scales.x.max -= 1;
					}       
					demoChart.update();
				}	
