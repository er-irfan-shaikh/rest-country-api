const maintag = document.querySelector("main")
const container = document.querySelector(".container")


fetch("https://restcountries.com/v3.1/all")
.then((data)=>{
    return data.json()
})
.then((data)=>{
    
    data.forEach(element => {
        // console.log(element);
        maintag.innerHTML += `<a href=https://restcountries.com/v3.1/name/${element.name.common} class="container">
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