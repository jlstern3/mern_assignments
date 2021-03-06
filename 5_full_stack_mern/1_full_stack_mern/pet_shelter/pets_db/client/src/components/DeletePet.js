import React, {useState, useEffect} from 'react';
import axios from 'axios'; 



const DeletePet = (props) => {
    const {id, afterDeleteHandler, pet} = props
    
    const deleteHandler = (e, id) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/pets/" + id)
        .then((res) => {
            console.log(res.data);
            afterDeleteHandler(id); 
        })
        .catch(err => console.log(err))

    }

    return(
        <button className = "deleteBtn" onClick = {(e)=> deleteHandler(e, id)}>Adopt</button>
    )
}

export default DeletePet;