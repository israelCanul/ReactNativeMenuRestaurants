import React, { component, Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/* Donute Button Image */}
                    <Image

                    />
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});