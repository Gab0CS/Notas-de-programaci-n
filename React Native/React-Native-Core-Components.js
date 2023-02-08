import react from 'react';
import { Text, 
        View, 
        Button, 
        Image, 
        ScrollView } from 'react-native';

// View component
// If i want a component to be flex, i have to set an "invisible" parent view
// and inside that parent put the visible components
const App = () =>(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    </View>
    
)

// Image component
// One of the additional features of <Image> is the ability to load images from different sources. 
// This could be a publicly accessible https:// link, local file:// reference, Base64-encoded string, 
// or image imported as module with require. Each of the image sources has its own benefits.

const AppImage = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image style={{height: 100, width: 100}}
                source={image}/>
    </View>
);


//Scroll view
// You only have to apply a fixed width and height to a container to make out-of-bounds content scrollable. 
// With native development ScrollView allows us to fully manage and customize how the content should be scrolled

const AppScroll = () => (
        <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>
            Scroll me!
        </Text>
        <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
                <ScrollView>
                <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
                <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
                <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
            </ScrollView>
        </View>
        </View>
);

// Button component
// To capture the user clicking the button, we need to use the onPress event handler. 
// This is called onPress because there usually is no mouse available on a mobile device.

<Button
    title="Profile page"
    onPress={() => navigate('profile')}
/>

const AppButton = () => {
    const [pressedCount, setPressedCount] = useState(0);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ margin: 16 }}>
            {pressedCount > 0
                ? `The button was pressed ${pressedCount} times!`
                : 'The button isn\'t pressed yet'
            }
            </Text>
            <Button
            title='Press me'
            onPress={() => setPressedCount((pressedCount) => pressedCount + 1)}
            disabled={pressedCount >= 3}
            />
        </View>
    );
};


//Text input