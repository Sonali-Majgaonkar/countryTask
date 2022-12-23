const cl=console.log;
document.getElementById('countryCount').innerHTML=`Currenty,We have ${countries.length} contries`

const countryData=document.getElementById('countryData');
let result=``;
countries.forEach(function(country){
  result+=`<div class='col-lg-3 col-md-6 col-xs-12 '>
                <div class='card shadow p-3 mb-5 bg-white rounded countryCard'>
                    <figure>
                        <div class='text-center'> 
                        <img src='${country.flag}'>
                        </div>
                        <figcaption class="pl-3">
                            <h4 class='mt-3 text-warning text-center'>${country.name}</h4>
                            <h6><strong>Capital:</strong> ${country.capital}</h6>
                            <h6><strong>Language:</strong> ${country.languages}</h6>
                            <h6><strong>Population:</strong> ${country.population}</h6>
                        </figcaption>
                    </figure>
                </div>
            </div>`
})
countryData.innerHTML=result;