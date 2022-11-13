//The Effect Hook is used to call another function that does something 
//for us so there is nothing returned when we call the useEffect() function.

import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() =>{
        window.alert(`Count: ${count}`);
    });
    const handleClick = () => {
        setCount((prevCount) =>  prevCount + 1);
    };
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}  

//Clean up effects
//it is important to remove those event listeners when we are done with them to avoid memory leaks!
//If our effect returns a function, then the useEffect() Hook always treats that as a cleanup function. 
//React will call this cleanup function before the component re-renders or unmounts.
//it is our responsibility to return a cleanup function from our effect when our effect code could create memory leaks.

export default function Counter() {
    const [clickCount, setClickCount] = useState(0);

    useEffect(() =>{
        document.addEventListener('mousedown', increment);
        return() => {
            document.removeEventListener('mousedown', increment);
        };
    });

    const increment = () =>{
        setClickCount((prevCount) => prevCount + 1);
    }

    return() => {
        document.removeEventListener('mousedown', increment);
    };
}

//The dependency array
//If we want to only call our effect after the first render, we pass an empty array to useEffect()
export default function Timer() {
    const [time, setTime] = useState(0);
    useEffect(() =>{
        const intervalId = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    
    const [name, setName] = useState('');

    const handleChange = ({ target }) => setName(target.value);
    return (
        <>
            <h1>Time: {time}</h1>
            <input value={name} onChange={handleChange} type='text'/>
        </>
    );
}
//A dependency array that is not empty signals to the Effect Hook that it can skip calling our effect 
//after re-renders unless the value of one of the variables in our dependency array has changed.
useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if the value stored by count changes

//Rules for hooks
//only call Hooks at the top level
//only call Hooks from React functions
//React keeps track of the data and functions that we are managing with Hooks based on their 
//order in the function component’s definition we never call hooks inside of loops, conditions, or nested functions.


//Separate Hooks for Separate Effects
//Therefore, it is a good idea to separate concerns by managing different data with different Hooks.

export default function SocialNetwork() {
    const [menu, setMenu] = useState(null);
        useEffect(() => {
        get('/menu').then((response) => {
            setMenu(response.data);
        });
    const [newsFeed, setNewsFeed] = useState(null);
        useEffect(() => {
        get('/news-feed').then((response) => {
            setNewsFeed(response.data);
        })
        });
    const [friends, setFriends] = useState(null);
    useEffect(() => {
        get('/friends').then((response) =>{
        setFriends(response.data);
        })
    });

    return (
        <div className='App'>
            <h1>My Network</h1>
            {!menu ? <p>Loading..</p> : (
            <nav>
                {menu.map((menuItem) => (
                <button key={menuItem}>{menuItem}</button>
                ))}
            </nav>
            )}
        <div className='content'>
            {!newsFeed ? <p>Loading..</p> : (
            <section>
                {newsFeed.map(({ id, title, message, imgSrc }) => (
                    <article key={id}>
                        <h3>{title}</h3>
                        <p>{message}</p>
                        <img src={imgSrc} alt='' />
                    </article>
                ))}
            </section>
            )}
            {!friends ? <p>Loading..</p> : (
                <aside>
                    <ul>
                    {friends
                        .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                        .map(({ id, name, isOnline }) => (
                        <li key={id} className={isOnline ? 'online' : 'offline'}>
                            {name}
                        </li>
                    ))}
                    </ul>
                </aside>
            )}
        </div>
        </div>
    );
}
)}