import { useState } from "react";
import {BiEdit, BiTrash} from 'react-icons/bi'
import profile from './imgs/gabrielperfil.jpg'

import "./UserCard.css"



function UserCard({name, job, skills, about}) {

    const [isToggle, setIsToggle] = useState(false)

    const changeToggle = () =>{
        isToggle === true 
        ? setIsToggle(false) 
        : setIsToggle(true)

        console.log(isToggle)
    }

    return ( 
        <div className=  {isToggle ? 'card clickedCard' : 'card'}>

            <div className="infos">
                <section className="personalInfos">
                    <img src={profile} className="imgPerfil"/>
                    <h3>{name}</h3>
                </section>
                
                <section className="professionalInfos">
                    <div className="icons">
                        <BiEdit className="editIcon"/>
                        <BiTrash className="trashIcon"/></div>
                    
                    <span><b>{job}</b></span>

                    <ul>
                         {skills.map((skill)=>{
                            return(<li>{skill}</li>)
                         })}               
                    </ul>
                </section>
            </div>

            <section className={isToggle ? 'description clickedInfo' : 'description'}>
                <p>{about}</p>
            </section>

            <button className={isToggle ? 'toggleInfos clickedBtn' : ' toggleInfos'} onClick={changeToggle}></button>

        </div>
             );
}

export default UserCard;