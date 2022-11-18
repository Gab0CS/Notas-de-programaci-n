//In order to start using propTypes, we need to import the 'prop-types' library.
import PropTypes from 'prop-types';

//you can declare propTypes as a static property for your component after the component has been defined.
//For each prop that your component class expects to receive, there can be one property on your propTypes object.
//The name of each property in propTypes should be the name of an expected prop.

        prop = PropTypes.expected_data_type_goes_here

//If you add .isRequired to a propType, then you will get a console warning if that prop isn’t sent.

import React from 'react';
import PropTypes from 'prop-types';

export class BestSeller extends React.Component {
    render() {
        return (
            <li>
                Title: <span>
                {this.props.title}
                </span><br />
        
                Author: <span>
                {this.props.author}
                </span><br />
        
                Weeks: <span>
                {this.props.weeksOnList}
                </span>
            </li>
        );
    }
}

BestSeller.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    weeksOnList: PropTypes.number.isRequired
};

//PropTypes in Function Components

//To write propTypes for a function component, you define a propTypes object as a property of the function component itself.
const Example = (props) => {
    return <h1>{props.message}</h1>;
}

Example.propTypes = {
    message: PropTypes.string.isRequired
};