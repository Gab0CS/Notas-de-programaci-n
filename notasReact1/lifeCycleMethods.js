// React components have several methods, called lifecycle methods, 
// that are called at different parts of a component’s lifecycle.

// Mounting phase
// when the component is being initialized and put into the DOM for the first time

//componentDidMount() is the final method called during the mounting phase. 
//it’s called after the component is rendered. 
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>;
    }
    componentDidMount() {
        const oneSecond = 1000;
        setInterval(() => {
        this.setState({ date: new Date() });
        }, oneSecond);
    }
}  
ReactDOM.render(<Clock />, document.getElementById('app'));
//Updating phase
//When the component updates as a result of changed state or changed props
//An update is caused by changes to props or state. 
//Every time you’ve called setState() with new data, you’ve triggered an update. 
//Every time you change the props passed to a component, you’ve caused it to update.
//componentDidUpdate() is a good place for update-phase work.



//Unmounting phase
// when the component is being removed from the DOM
//componentWillUnmount() is called in the unmounting phase, right before 
//the component is completely destroyed.
//JavaScript gives us the clearInterval() function. 
//setInterval() can return an ID, which you can then pass 
//into clearInterval() to clear it. 
export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>;
    }
    componentDidMount() {
        const oneSecond = 1000;
        this.intervalID = setInterval(() => {
        this.setState({ date: new Date() });
    }, oneSecond);
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
}