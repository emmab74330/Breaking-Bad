import React from 'react';
function PersonList(props) {
    return (
        <>
            <div>
                <img src={props.person.img} />
                {props.data}
                {props.person.name}
                {props.person.birthday}
                {props.person.occupation}
            </div>
        </>
    )
}
export default PersonList;