//API
const Base_url="https://restcountries.com/v3.1/"

const getCountries= async(url, extra)=>{
    const res=await fetch(url + extra)
    const Country=await res.json();
    return Country;
}






// //dom
 const CountriesEl=document.querySelector(".countries");
 const enterEl=document.querySelector(".enter");
const searchEl = document.querySelector("#search");
const MoreEl = document.querySelector(".btn");
const cardEl = document.querySelector("card");





// //elements
const createCountry=(country)=>{
    const {flags,name, population,region, capital} = country;
     const countryHtml= `<div class="card bg-base-100 shadow-xl width">
                <figure><img src='${flags['svg']}'class="max-heigth" 
                alt='${name['common']}' /></figure>
                <div class="card-body">
                    <h2 class="card-title">${name['common']}</h2>
                    <p>Population: ${population}</p>
                    <span>Region: ${region}</span>
                    <h3 id="id">Capital: ${capital}</h3>
                </div>
            </div>`;
    
    return countryHtml

 }

//renders
const CountryRender=async(url, extra)=>{
    const countries=await getCountries(url, extra)     
    let countriesHtml=''
    CountriesEl.innerHTML=''


    countries.forEach(country => {
        const countryEl=createCountry(country)
        countriesHtml +=countryEl
    });
    
    CountriesEl.innerHTML=countriesHtml
}



//filtr
countrySelector.onchange = () => {
    const selectedCountry = countrySelector.options[countrySelector.selectedIndex].innerText;
    CountryRender(Base_url, `region/${selectedCountry}`)
}


//search
searchEl.addEventListener("input", () =>{
    
    let searchvalue = searchEl.value.toLowerCase()
    CountryRender(Base_url,`name/${searchvalue}`)
})

//main
CountryRender(Base_url, "all");


