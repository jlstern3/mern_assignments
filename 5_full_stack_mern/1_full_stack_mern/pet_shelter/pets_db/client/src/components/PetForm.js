import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const PetForm = (props) => {

    const { pet, setPet, errors, handleSubmit, submitButtonLabel } = props;

    const inputChange = (e) => {
        console.log("Input name:" + e.target.name);
        console.log("Input value:" + e.target.value);
        let newPetObject = { ...pet };
        newPetObject[e.target.name] = e.target.value;
        setPet(newPetObject);
    }



    return (
        <div>

            <h3 className="subtitle">Know a pet needing a home?</h3>
            <button className="homeBtn" onClick={() => navigate('/')}>back to home</button>
            <div className="form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="right_side">
                        <div>
                            <label>Pet Name: </label>
                            <input
                                type="text"
                                name="name"
                                value={pet.name}
                                onChange={(e) => inputChange(e)} />
                            {
                                errors.name ?
                                    <span className="errors">{errors.name.message}</span>
                                    : null
                            }
                        </div>
                        <div>
                            <label>Pet Type: </label>
                            <input
                                type="text"
                                name="type"
                                value={pet.type}
                                onChange={(e) => inputChange(e)} />
                            {
                                errors.type ?
                                    <span className="errors">{errors.type.message}</span>
                                    : null
                            }
                        </div>
                        <div>
                            <label>Pet Description: </label>
                            <input
                                type="text"
                                name="description"
                                value={pet.description}
                                onChange={(e) => inputChange(e)} />
                            {
                                errors.description ?
                                    <span className="errors">{errors.description.message}</span>
                                    : null
                            }
                        </div>
                    </div>
                    <div className="left_side">
                        <div>
                            <h3 id="skills_title">Skills (optional): </h3>

                            <label>Skill 1: </label>
                            <input
                                type="text"
                                name="skill1"
                                value={pet.skill1}
                                onChange={(e) => inputChange(e)} />
                            {
                                errors.skill1 ?
                                    <span className="errors">{errors.skill1.message}</span>
                                    : null
                            }
                            <label>Skill 2: </label>
                            <input
                                type="text"
                                name="skill2"
                                value={pet.skill2}
                                onChange={(e) => inputChange(e)} />
                            {
                                errors.skill2 ?
                                    <span className="errors">{errors.skill2.message}</span>
                                    : null
                            }
                            <label>Skill 3: </label>
                            <input
                                type="text"
                                name="skill3"
                                value={pet.skill3}
                                onChange={(e) => inputChange(e)} />
                            {
                                errors.skill3 ?
                                    <span className="errors">{errors.skill3.message}</span>
                                    : null
                            }
                        </div>
                    </div>
                    <button className="submitBtn" type="submit">{submitButtonLabel}</button>
                </form>
            </div>
        </div>
    )
}

export default PetForm;