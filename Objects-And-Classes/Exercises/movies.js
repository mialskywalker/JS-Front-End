function movies(input) {

    moviesList = [];

    for (const line of input) {

        let command = line.split(' ');
        
        if (command.includes('addMovie')){

            let name = command.slice(1).join(' ');
            addMovie(name);

        }
        else if (command.includes('directedBy')){
            
            let index = command.indexOf('directedBy');
            let name = command.slice(0, index).join(' ');
            let director = command.slice(index+1).join(' ');
            let movie = moviesList.find((m) => m.name === name);
            if (movie) {
                directedBy(movie, director);
            }

        }
        else if (command.includes('onDate')){
            
            let index = command.indexOf('onDate');
            let name = command.slice(0, index).join(' ');
            let date = command.slice(index+1).join(' ');
            let movie = moviesList.find((m) => m.name === name);
            if (movie) {
                onDate(movie, date);
            }

        }

    }

    for (const movie of moviesList) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')){
            console.log(JSON.stringify(movie));
        }
    }


    function addMovie(movieName) {
        moviesList.push({ name: movieName });
    }

    function directedBy(movie, director) {
        movie.director = director;
    }

    function onDate(movie, date) {
        movie.date = date;
    }

}

movies(
    [
        'addMovie Fast and Furious', 
        'addMovie Godfather', 
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',        
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'   
        ] 
);
movies(
    [
        'addMovie The Avengers',        
        'addMovie Superman',        
        'The Avengers directedBy Anthony Russo',        
        'The Avengers onDate 30.07.2010',        
        'Captain America onDate 30.07.2010',        
        'Captain America directedBy Joe Russo'        
    ] 
);