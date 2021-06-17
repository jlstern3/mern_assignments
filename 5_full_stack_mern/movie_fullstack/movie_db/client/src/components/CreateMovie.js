import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, navigate} from '@reach/router';

const CreateMovie = (props) =>{

    // create state for the new movie Object
    const [movie, setAllMovie] = useState ({
        "title": "",
        "genre": "",
        "producer": "",
        "length": "",
        "dateProduction": "",
        "rating": "",
        "isOnNetflix": false,
        "coverArtURL": ""

    })
    // handle form submit to create the document through the API
    const handleSubmit = (e) => {
        e.preventDefault();
        // call axios to post object to API
        axios.post("http://localhost:8000/api/movies", movie) 
        
            .then((res) => {
             // on success, redirect (navigate) to the movie list
                console.log(res.data);
                navigate("/movies");
            })
            // failure, save the errors in state so the user can correct 

            .catch(err => {
                console.log(err)
            })
}
    // create a new movie object and create a copy of what's currently in state
    // make a change to the copy
    // set the changes in state
    const inputChange = (e) => {
        console.log("Input name: " + e.target.name);
        console.log("input value: " + e.target.value);
        console.log("input checked: " + e.target.checked);

        let newMovieObject = { ...movie};
        if(e.target.name === "isOnNetflix"){
            newMovieObject[e.target.name] = e.target.checked;
        }
        else{
            newMovieObject[e.target.name] = e.target.value;
        }
        setAllMovie(newMovieObject);
    }

    const genres = [
        'Action',
        'Adventure',
        'Animation',
        'Cinema Verite',
        'Comedy',
        'Drama',
        'Experimental',
        'Family',
        'Fantasy',
        'Foreign',
        'Horror',
        'Kung Fu',
        'Musical',
        'Mystery',
        'Romance',
        'Sci-Fi',
    ];

    const rating = [
        'G',
        'PG',
        'PG-13',
        'R',
        'NR'
    ]

    return(
        <div>
            <h1>Create Movie</h1>
            <form onSubmit = {(e) => handleSubmit(e)}>
                <div>
                    <label>Title: </label>
                    <input type = "text" 
                    name = "title" 
                    value = {movie.title} 
                    onChange = {(e) => inputChange(e)}/>
                </div>
                <div>
                    <label>Genre</label>
                    <select 
                    name = "genre"
                    value = {movie.genre}
                    onChange = {(e) => inputChange(e)}>
                        {/* blank first option line in dropdown */}
                    <option value=""></option>
                    
                    {
                        genres.map((movieGenre, index) => (
                            <option value = {movieGenre} key = {movieGenre}>{movieGenre}</option>
                        ))
                    }
                    </select>                  
                </div>
                <div>
                    <label>Producer</label>
                    <input type = "text" 
                    name = "producer" 
                    value = {movie.producer} 
                    onChange = {(e) => inputChange(e)}/>   
                </div>
                <div>
                    <label>Movie Length (mins)</label>
                    <input type = "number" 
                    min = "30"
                    name = "length" 
                    value = {movie.length} 
                    onChange = {(e) => inputChange(e)}/>   
                </div>
                <div>
                    <label>Production Date</label>
                    <input type = "text" 
                    name = "dateProduction" 
                    value = {movie.dateProduction} 
                    onChange = {(e) => inputChange(e)}/>   
                </div>
                <div>
                    <label>Ratings</label>
                    <select 
                    name = "rating"
                    value = {movie.rating}
                    onChange = {(e) => inputChange(e)}>
                        {/* blank first option line in dropdown */}
                    <option value=""></option>
                    
                    {
                        rating.map((movieRating, index) => (
                            <option value = {movieRating} key = {movieRating}>{movieRating}</option>
                        ))
                    }
                    </select>     
                </div>
                <div>
                    <input
                    type="checkbox"
                    name="isOnNetflix"
                    checked = {movie.isOnNetflix}
                    onChange = {(e) => inputChange(e)}/>
                    <label>Movie is on Netflix</label>
                </div>
                <div>
                    <label>Cover Art URL</label>
                    <input
                    type="text"
                    name="coverArtURL"
                    value = {movie.coverArtURL}
                    onChange = {(e) => inputChange(e)}/>
                </div>


                {/* labels for inputs */}
                {/* input that update state as they changes
                //values int he inputs that use state as the valeus */}
                {/* validate/display errors that come from the backend server */}
                <button type="submit">Create a Movie</button>
                {/* return to all movies butt/link */}
                <button onClick = {() => navigate("/movies")}>Cancel</button>
            </form>
        </div>
    )
}

export default CreateMovie;