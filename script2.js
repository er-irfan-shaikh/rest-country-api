let params = new URLSearchParams(location.search);
console.log(params.get("name"))
const maincontainer = document.querySelector(".single-country-container")




fetch(`https://restcountries.com/v3.1/name/${params.get("name")}`)
.then((data)=>{
   return data.json()
})
.then( async (element)=>{
    const border = element[0].borders
    console.log(border);
//    const b1 = fetch(`https://restcountries.com/v3.1/alpha/${border[0]}`)
//     .then((b)=>{ return b.json()})
//     .then((b)=>{ return b})
//     console.log(b1);


    console.log(element);
    maincontainer.innerHTML = ` <div class="big-flag">
    <img src=${element[0].flags.svg} alt="" />
  </div>
  <div class="country-info">
      <h2>${element[0].name.common}</h2>
    <div class="information">
      <div class="first">
          <p><b>Native Name : </b> ${element[0].name.nativeName[Object.keys(element[0].name.nativeName)[0]].common}</p>
          <p><b>Population : </b>  ${element[0].population.toLocaleString('en-US')}</p>
          <p><b>Region : </b> ${element[0].region}</p>
          <p><b>Sub Region : </b>${element[0].subregion}</p>
          <p><b>Capital :</b> ${element[0].capital}</p>
         
          <p id="border"><b>Border Countries :</b> <a href=""></a> <a href="">  </a> <a href=""> </a></p>
      </div>
   
      <div class="divider">
        <p><b>Top Level Domain :</b> be</p>
        <p><b>currencies :</b>${element[0].currencies[Object.keys(element[0].currencies)[0]].name}</p>
        <p><b>Language :</b> ${element[0].languages[Object.keys(element[0].languages)[0]]}</p>
      </div>
    </div>
  </div>`
  
 
  async function b1(){
    let result = await fetch(`https://restcountries.com/v3.1/alpha/${border[0]}`)
    result  = await result.json()
    const main = result 
    console.log(main);
    const hh = document.querySelectorAll(".border a")
    console.log(hh);
   
    hh[0].innerText = main[0].name
   

  
}
await b1()
  
})

