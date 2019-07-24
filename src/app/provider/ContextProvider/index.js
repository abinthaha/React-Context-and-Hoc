import React from 'react';
import ContextObject from '../../context/myContext';

class ContextWrapper extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 10,
                cars: ['BMW', 'Audi']
            }
        }
        render() {
            return (
                <ContextObject.Provider
                    value={{
                        cars: this.state.cars
                    }}
                >
                    {this.props.children}
                </ContextObject.Provider>
            )
        }
}

export default ContextWrapper;