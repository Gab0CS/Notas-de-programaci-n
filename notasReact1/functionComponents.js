// function components can do everything that class components can do.

//For the most basic function components, all you need to do is remove 
//the beginning render() { and ending } of the render() method

export const MyComponentClass = () => {
    return <h1>Hello world</h1>;
}

//function components can receive information via props
//To access these props, give your function component a parameter named props
//you can access the props using this pattern: props.propertyName. 
//You don’t need to use the this keyword.
export function YesNoQuestion (props) {
    return (
        <div>
            <p>{props.prompt}</p>
            <input value="Yes" />
            <input value="No" />
        </div>
    );
}  
ReactDOM.render(
    <YesNoQuestion prompt="Have you eaten an apple today?" />,
    document.getElementById('app'));
