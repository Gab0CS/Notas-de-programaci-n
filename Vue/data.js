// Construction of the options object

const app = new Vue({
    //el property corresponds to the HTML element that should be turned into a Vue app.
    // good practice to set it to and ID
    el: '#app',
    // The value of data is an object. Each key-value pair in this object corresponds 
    // to a piece of data to be displayed in the template.
    data: {
        firstName: 'First',
        lastName: 'Last',
        email: '',
        ticketQuantity: 1,
        ticketType: 'general',
        referrals: [],
        specialRequests: '',
        purchaseAgreementSigned: false
    }

});

//Some data to be displayed doesn’t require it’s own key-value pair in the data object.
// Instead of storing computed data as key-value pairs in our data object, we store key-value 
// pairs in a separate computed object. 
const appWithComputedObject = new Vue({
    el: '#app',
    data: {
        hoursStudied: 274
    },
    computed: {
        languageLevel: {
            get: function() {
                if (this.hoursStudied < 100) {
                    return 'Beginner';
                } else if (this.hoursStudied < 1000) {
                    return 'Intermediate';
                } else {
                    return 'Expert';
                }
            },
            set: function(newLanguageLevel) {
                if (newLanguageLevel === 'Beginner') {
                    this.hoursStudied = 0;
                } else if (newLanguageLevel === 'Intermediate') {
                    this.hoursStudied = 100;
                } else if (newLanguageLevel === 'Expert') {
                    this.hoursStudied = 1000;
                }
            }
        }
    },
    // wactchers
    watch: 
        function(newRequests, oldRequests) {
            if (newRequests.toLowerCase().includes('meet and greet') || newRequests.toLowerCase().includes('meet-and-greet')) {
                this.ticketType = 'vip';
            }
        },
    methods: {
        resetProgress: function () {
            this.hoursStudied = 0;
        }
    } 
});

// Vue allows us to not only determine computed values based on data values but to also update 
// the necessary data values if a computed value ever changes.
// The get function computes the value of languageLevel based on hoursStudied
// The set function updates other data whenever the value of languageLevel changes.

// set functions take one parameter, the new value of the computed value. This value can then be 
// used to determine how other information in your app should be updated. In this case, whenever 
// languageLevel changes, we set the value of hoursStudied to be the minimum number of hours needed 
// to achieve that mastery level.

// data is used to store known dynamic data and computed is used to store dynamic data that 
// is computed using other pieces of dynamic data.

// Watchers
// The value of watch is an object containing all of the properties to watch. The keys of this
// object are the names of the properties to watch for changes and the values are functions to 
// run whenever the corresponding properties change. 


// Instance methods
// The methods property is where Vue apps store their instance methods. These methods can be 
// used in many situations, such as helper functions used in other methods or event handlers