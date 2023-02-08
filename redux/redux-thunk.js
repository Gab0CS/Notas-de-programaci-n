// To add a middleware to our project, we use Redux’s applyMiddleware function like so.
import { createStore, applyMiddleware } from 'react-redux';
import { middleware1, middleware2, middleware3 } from './exampleMiddlewares';
import { exampleReducer } from './exampleReducer';
import { initialState} from './initialState';

const store = createStore(
    exampleReducer, 
    initialState, 
    applyMiddleware(
        middleware1, 
        middleware2, 
        middleware3
    )
);

// once middleware has been added to a Redux project, calls to dispatch
// are actually calls to the middleware pipeline

const exampleMiddleware = storeAPI => next => action => {
    // do stuff here
    return next(action);  // pass the action on to the next middleware in the pipeline
}

// Each middleware has access to the storeAPI (which consists of the dispatch and getState functions)
// (note that if the middleware is the last in the pipeline, then next is storeAPI.dispatch so calling 
// next(action) is the same as dispatching the action to the store).
const App = () => {
    const [name, setName] = useState('');

    return (
        <View style={{
            flex: 1,
            alignContent: 'center', 
            justifyContent: 'center', 
            padding: 16,
        }}>
            <Text style={{ marginVertical: 16 }}>
            {name ? `Hi ${name}!` : 'What is your name?'}
            </Text>
            <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            onChangeText={text => setName(text)}
            secureTextEntry={true}/>
        </View>
    );
};