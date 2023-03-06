//  We need to specify to our Vue app which portion of our HTML we want to gain access to our Vue app’s logic.
//  We add a key called el, standing for HTML element, with a value of a CSS selector as a string that will 
//  target an element in our HTML and give it access to our Vue app’s functionality.
const app = new Vue({
    el: '#app',
    // all dynamic data will be specified in options object at a property called data.
    // Every piece of data will be added to the .data object as a key-value pair.
    data: {
        username: 'CoderInTraining',
        newTweet: '',
        tweets: [
            'Started learning to code today. Wish me luck!', 
            'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.', 
            'Today I start learning Vue. I got this.'
        ], 
        bio: 'Excited future software engineer.'
    }
});


<div class="Div para que no marque error">


{/* // Templates contain all of the hard-coded information displayed on the site but specify places where 
// dynamic information needs to be filled in. */}

<div id="app">
    <h2>Hello, {{ username }}</h2>
</div>

{/* Directives */}
{/* // {{ username }} will be filled in with the value of username from the Vue app’s 
// .data object when the page is rendered to the user. If the value of username changes, 
// the value displayed to the user will be changed as well. */}


{/* Let’s say we only want to show a login button if a user isn’t already logged in. 
We can add a v-if directive as an attribute to HTML elements like so: */}
<button v-if="userIsLoggedIn">Log Out</button>
<button v-if="!userIsLoggedIn">Log In</button>

{/* Another complex, common front-end need is to render an array of items identically. 
We can use v-for as an attribute, like so: */}
<ul>
    <li v-for="todo in todoList">{{ todo }}</li>
</ul>


{/* v-model can be added to any form field and hooked up to our Vue app’s data. 
Modifying the form field will then automatically modify the specified Vue app data */}
<input v-model="username" />

{/* The above input field will display the current value of username on the Vue app’s 
data object and will change the value of username if the user modifies the value in the field. */}

{/* v-bind */}

<div class="tweets">
    <tweet v-for="tweet in tweets" 
        v-bind:message="tweet"
        v-bind:author="username">
    </tweet>
</div>

{/* v-bind takes a value from the Vue app’s data object and uses it as the value of the specified component prop. 
The name of the value after the : is the prop that will be receiving the value.
The value of v-bind (the name in quotes) is the data value we will be using to set that prop’s value.
The component of this directive is the one in line 77*/}


</div>    

// Components

// You’ll see the code to create a new component called tweet that takes in a prop called message and displays 
// it using the supplied template. Much like with a Vue app, all of this information is passed in as an options object.
const Tweet = Vue.component('tweet', {
    props: ['message', 'author'],
    template: '<div class="tweet"><h3>{{ author }}</h3><p>{{ message }}</p></div>'
});