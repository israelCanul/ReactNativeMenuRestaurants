import React, { component, Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/* Donute Button Image */}
                    <Icon name="rocket" size={25} color="#900" />
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