//Imnport libraries for making a component
import React from 'react'
import { Text, View } from 'react-native'

//Make components
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center', //center aligns vertically
        alignItems: 'center', //center aligns horizontally 
        height: 80,
        paddingTop: 35,
        //adds shadow to the bottom of the view
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//Make component available to other parts of the app 
export default Header;