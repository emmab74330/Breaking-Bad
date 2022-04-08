import React from 'react';
function Quote(props) {
    return (
        <>
            <div class='quotes'>
                <h3>
                    {props.person.quote}
                </h3>
            </div>
        </>
    )
}
export default Quote;