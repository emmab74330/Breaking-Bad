import React from 'react';
import {
    Link,
} from "react-router-dom";
function PersonList(props) {
    return (
        <>
            <div class='img'>
                <h3>
                    <center>
                        <img src={props.person.img} />
                    </center>
                </h3>
            </div>
            <div class='info'>
                <h3>
                    <li>
                        {props.data}
                    </li>
                    <li>
                        {props.person.name}
                    </li>
                    <li>
                        {props.person.birthday}
                    </li>
                    <li>
                        {props.person.occupation[0]}
                    </li>
                    <li>
                        {props.person.occupation[1]}
                    </li>
                </h3>
            </div >
        </>
    )
}
export default PersonList;