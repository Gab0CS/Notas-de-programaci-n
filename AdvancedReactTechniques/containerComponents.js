//Separating container components from presentational components
//Separating container components from presentational components is a popular React programming pattern.
//The presentational component’s only job is to contain HTML-like JSX. It should be an exported component 
//and will not render itself because a presentational component will always get rendered by a container component.

//presentational component class only job is to contain JSX.
import React from 'react';

const GUINEAPATHS = [
    'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'
];
export class GuineaPigs extends React.Component {
    render() {
        let src = this.props.src;
        return (
            <div>
                <h1>Cute Guinea Pigs</h1>
                <img src={src} />
            </div>
        );
    }
}

//Container
import React from 'react';
import ReactDOM from 'react-dom';
import { GuineaPigs } from '../components/GuineaPigs';

const GUINEAPATHS2 = [
    'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg',
    'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentGP: 0 };

        this.interval = null;

        this.nextGP = this.nextGP.bind(this);
    }

    nextGP() {
        let current = this.state.currentGP;
        let next = ++current % GUINEAPATHS.length;
        this.setState({ currentGP: next });
    }

    componentDidMount() {
        this.interval = setInterval(this.nextGP, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() { 
        const src = GUINEAPATHS[this.state.currentGP]; 
        return <GuineaPigs src={src} />;
    }
}

ReactDOM.render(
    <GuineaPigsContainer />, 
    document.getElementById('app')
);

//In this programming pattern, the container component does the work of figuring out what to display. 
//The presentational component does the work of actually displaying it. If a component does a significant 
//amount of work in both areas, then that’s a sign that you should use this pattern!