var request = superagent;
var apiSearch = 'https://api.themoviedb.org/3/search/movie?api_key=5232b295d76c81b6fd5aace428cb9b43&language=en-US&query=mission&page=1&include_adult=false';

request
    .get(apiSearch)
    .then(function(response){
        var peliculas = response.body.results;
        
        peliculas.forEach(function(pelicula){

            var peliculaID = pelicula.genre_ids;
            peliculaID.forEach(function(id){
                if(id === 28){

                    var nombre = pelicula.original_title;
                    var descripcion = pelicula.overview;
        
                    //CREATE ELEMENTS
                    var div = document.createElement('div');
                    var h3 = document.createElement('h3');
                    var p = document.createElement('p');
        
                    //SET CLASSES
                    div.className = 'single';
                    h3.className = 'title';
                    p.className = 'description';
        
                    //SET VALUES
                    h3.textContent = nombre;
                    p.textContent = descripcion;
        
                    document.querySelector('body').appendChild(div);
                    div.appendChild(h3);
                    div.appendChild(p);
                }
            })
        })
    });