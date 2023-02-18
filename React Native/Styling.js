// we have to define styling using a plain JavaScript object because of the lack of CSS

import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => (
    <View style={{ flex: 1, backgroundColor: '#e5e5e5', justifyContent: 'center' }}>
        <View style={styles.redBox} />
    </View>
);

export default App;

export const styles = StyleSheet.create({
    redBox: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 },
    }  
});

//Combining styles
// we are changing the background color to purple when the isActive property is true. 
//We can combine both StyleSheet references and inline styling objects. 
// The eventual styling is created by applying all styles in the array from left to right.

const AwesomeBox = (props) => (
    <View style={[styles.box, props.isActive && { backgroundColor: 'purple' }]} />
);

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
});


// Sizing components
// n mobile development, it’s common to use a different type of unit called 
// “Density-independent Pixels” or dp


// Flexbox 

// The best way to make your layout responsive is by using Flexbox.
// All elements are flexboxes; you don’t have to specify display: flex.
// Some default values are changed to better suit mobile apps.

import { Dimensions } from 'react-native';

const AppFlex = () => (
    <View style={styles.layout}>
        <View style={[stylesFlex.box, { backgroundColor: 'red' }]} />
        <View style={[stylesFlex.box, { backgroundColor: 'green' }]} />
        <View style={[stylesFlex.box, { backgroundColor: 'blue' }]} />
    </View>
);


  // Get the maximum width/height (in dp) from the Dimensions API
const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

export const stylesFlex = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#e5e5e5',
    },
    box: {
        flex: 1,
        backgroundColor: 'black',
    },
});