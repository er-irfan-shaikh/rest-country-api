let params = new URLSearchParams(location.search);
console.log(params.get("name"))
const maincontainer = document.querySelector(".single-country-container")
const back = document.querySelector(".back")
back.addEventListener("click",()=>{
  history.back()
})





fetch(`https://restcountries.com/v3.1/name/${params.get("name")}?fullText=true`)
.then((data)=>{
   return data.json()
})
.then(  (element)=>{
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
         
          <p id="border"><b>Border Countries :</b> <a href=""  class= "firstbor"></a> <a href="" class= "firstbor">  </a> <a href="" class= "firstbor"> </a></p>
      </div>
   
      <div class="divider">
        <p><b>Top Level Domain :</b> be</p>
        <p><b>currencies :</b>${element[0].currencies[Object.keys(element[0].currencies)[0]].name}</p>
        <p><b>Language :</b> ${element[0].languages[Object.keys(element[0].languages)[0]]}</p>
      </div>
    </div>
  </div>`
  
 
  async function b1(){
  
    let result1 = await fetch(`https://restcountries.com/v3.1/alpha/${border[0]}`)
    result1  = await result1.json()
    const hh =  document.querySelectorAll(".firstbor")
    hh[0].innerText =   result1[0].name.common
    hh[0].href =   `/index2.html?name=${ hh[0].innerText}`
    let result2 = await fetch(`https://restcountries.com/v3.1/alpha/${border[1]}`)
    result2  = await result2.json()

    hh[1].innerText =  result2[0].name.common
    hh[1].href =  `/index2.html?name=${hh[1].innerText}`
    console.log( hh[1].hrf);
    let result3 = await fetch(`https://restcountries.com/v3.1/alpha/${border[2]}`)
    result3  = await result3.json()
    
    hh[2].innerText = result3[0].name.common
    hh[2].href =  `/index2.html?name=${result3[0].name.common}`

    // try then yom 

 
    
    
   
    

   

  
}
 b1()
  
})

