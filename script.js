const maintag = document.querySelector("main")
const container = document.querySelector(".container")
const filte = document.querySelector("#filter")
let filtervalue = ""

filte.addEventListener("change",(e)=>{
    filtervalue =  filte.value
    console.log(filtervalue);
    if(filtervalue == ""){
        maintag.innerHTML = ""
        fetchdata(filtervalue)
    }
   else{
       
        fetchdata(filtervalue)
        maintag.innerHTML = ""
   }
   
})
console.log(filtervalue);

function fetchdata(value){ 
    fetch(`https://restcountries.com/v3.1/${ value || "all"   }`) 
.then((data)=>{
    return data.json()
})
.then((data)=>{
    
    console.log(data);
    data.forEach(element => {

       
        maintag.innerHTML += `<a href= "/index2.html?name=${element.name.common}" class="container">
      
        <div class="flag-image">
            <img src= ${element.flags.svg} alt="">
        </div>
        <div class="countory-detail">
             <div class="content">
                <h3> ${element.name.common}</h3>
                <p> <b> population </b>: ${element.population.toLocaleString('en-US')}</p>
                <p> <b> region </b>: ${element.region}</p>
                <p> <b> capital</b> : ${element.capital}</p>
             </div>
        </div>
    </a>`
    
    });
})
  }
  function initialFetch() {
    if(filtervalue == ""){
        filtervalue =""
        fetchdata(filtervalue)
    }
   
}

initialFetch()
