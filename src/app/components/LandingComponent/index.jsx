import React, { useState } from 'react';
import ContextObject from '../../context/myContext';
function LandingComponent() {

    const [ name, updateName ] = useState('Abin');

    return (
        <ContextObject.Consumer>
            {
                context => (
                    <div>Hello world {name} {context.cars}</div>
                )
            }
        </ContextObject.Consumer>
    )
}

export default LandingComponent;