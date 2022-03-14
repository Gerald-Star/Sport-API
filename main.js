
const URL = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";

//fetch data

const fetchResult = () => {
    const myHeaders = new Headers();

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
    };


    fetch(URL, requestOptions)

            .then((response) => {
            
                console.log('response', response)
                return (response.json())
        }
            )
        .then((result) => {
            console.log(result)
            
            const mySport = result.sports
            console.log(mySport)
            displayResult(result.sports);
            
        })
        .catch((error) => console.log('error', error));
    
};

fetchResult();
 //display data

const displayResult = (sports) => {
    console.log('sports', sports);

    const tbody = document.getElementById("table-data");

    console.log('tbody', tbody);



    sports.forEach(sports => {

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        //td1.innerHTML = sports.idSport + " " + sports.strSport;
        
        // to better code this- use format template-literal MDN

        td1.innerHTML = `${sports.idSport} ${sports.strSport}`;

        td2.innerHTML = sports.idSport;

        td3.innerHTML = sports.strSport;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);


        tbody.appendChild(tr);
    });

};






    





























//fetch('https://regres.in/api/users',{

//})  this method is used when we want to use GET/POST method
//in fetch API you pass the url as the property.

//when we want to use Asnyc method- we declare promise to response using the curly
//brackek.

//we use .then or .catch method    //Asny fetch method

//Fetch API methods  //call Fetch


// fetch function with url

// fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')

    
// .then(response => {
//         console.log(response)
//         return response.json();
//     })

//     .then(data =>
//         console.log(data))
// // displayData(data.sports[34])
        
//     .catch(error => console.log('error'))







//     document.getElementById("table-data");


// fetch data

// const fetchData = () => {
//     fetch (url)
//         .then(response => {
//             console.log('response', response);
//             return response.json();
//         }
        
//     )       
        
// };


// const url = "https://api.coinbase.com/v2/currencies";

// //fetch data

// const fetchData = () => {
//   fetch(url)
//     .then((response) => {
//       console.log("response :>> ", response);
//       return response.json();
//     })
//     .then((results) => {
//       displayTable(results.data); 
//         generateSelectionOptions(results.data); 
//         onDropdownChange(results.data);
        
        
        
        
        // document
        //   .getElementById("search")
        //   .addEventListener("input", () => onFilterEvent(result.data));
          // .addEventListener("input", () => onSearchChange(result.data));







    //method: 'GET',


    //1. declare fetch method : POST or GET method

    //     method: 'GET',  // request is the option first for Fetch method (or 'POST'). this helps to get data/delete data
    // }
    // )     //set the headers of your fetch method. This tells Fetch that you will be passing a jason file
    
    

    
    // 2. we use .then for a response to return an object  
    // then we need to use a method to call a json cos we are using a json file 
    //:. response.json or we we catch method.
 
    // 3. to use a second .then to call the actual data and consol.log the data
    // :: we see all the data from the API
    // after 2.then methid is the .catch method to know when we ctach an error.
    
    //fetch(url) if I put url the I must put this
    //  .then(res => res.json())

    //  .then(data => 
        
    //     console.log(data))
    //     dispayData(data.sports)
        
    // })
    
    // // calls the API data
    

   
    
    
   

                // displayData(results.sports);
                // generateSelectionOptions(results.sports);
                // onDropdownChange(results.sports);
        
        
        
        
                // document
                //   .getElementById("search")
                //   .addEventListener("input", () => onFilterEvent(result.data));
                // .addEventListener("input", () => onSearchChange(result.data));




    // fetchData();
// display data

// const displayData = (sports) => {
//         console.log('results', results);
//     };


    
//fetch with function
//fetch ('url),
//.then((function(res) {
// return res.json()
// })

//. then(function(data) {
//console.log(data)