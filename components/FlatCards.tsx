import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
} from 'react-native';

function FlatCards() : JSX.Element{
    return (
        <View style = {[styles.container,{height: 40}]}>
            <View style = {[styles.items,{backgroundColor:'#d25b5b'}]}>
                <Text style = {{color:'#ffffff'}}>Red</Text>
            </View>
            <View style = {[styles.items,{backgroundColor:'#79d979'}]}>
                <Text style = {{color:'#ffffff'}}>Green</Text>
            </View>
            <View style = {[styles.items,{backgroundColor:'#FFA500'}]}>
                <Text style = {{color:'#ffffff'}}>Orange</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        padding: 10,
        height: 20,
    },
    items:{
        aspectRatio:1,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:2,
        borderRadius: 3
    }
})

export default FlatCards;