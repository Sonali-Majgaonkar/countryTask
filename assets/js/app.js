let cl=console.log;
let imgUrl='https://image.tmdb.org/t/p/w1280';
let infoIMDB=document.getElementById('infoIMDB');
let result=``;

movieArr.forEach(function(movie){
    result+=`<div class="col-lg-3 col-md-6 col-xs-12">
        <div class="card mb-4">
            <figure class="movieCard">
              <img src='${imgUrl}${movie.poster_path}'>
              <figcaption>
                <div class="row">
                  <div class="col-sm-9">
                    <h5>${movie.title}</h5>
                  </div>
                  <div class="col-sm-3">
                    <h5>${movie.vote_average}</h5>
                  </div>
                  <div class="overview">
                    <h4>Overview</h4>
                    <p>${movie.overview}</p>
                  </div>
                </div>
              </figcaption>
            </figure>
        </div>
    </div>`
})

infoIMDB.innerHTML=result
cl(result);