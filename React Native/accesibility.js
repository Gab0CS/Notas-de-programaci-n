const App = () =>{
    return(
        <TouchableOpacity
            onPress={deleteItem}
            accessible={true}
            accessibilityLabel="Press to delete"
            accessibilityHint="The item will be deleted permanently">
                <TrashIcon />
        </TouchableOpacity>
    );
}

accessible 
// accessible -This property tells React Native to group the content 
//into a single selectable component. When users tap the button, 
//Android and iOS will select everything from the touchable opacity.

accessibilityLabel
// This describes how users can use the button. Accessibility readers will 
// tell the user to “Press to delete”.

accessibilityHint 
//This optional description tells users what will happen after pressing the button.
