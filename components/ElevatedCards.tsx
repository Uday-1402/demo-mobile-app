import React from 'react';

import {
    ScrollView,
    View,
    Text,
    StyleSheet,
} from 'react-native';

function ElevatedCards() : JSX.Element{
    return (
        <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} style = {styles.container}>
            <View style = {[styles.items,{backgroundColor:'#d25b5b'}]}>
                <Text style = {{color:'#ffffff'}}>Red</Text>
            </View>
            <View style = {[styles.items,{backgroundColor:'#7272d7'}]}>
                <Text style = {{color:'#ffffff'}}>Blue</Text>
            </View>
            <View style = {[styles.items,{backgroundColor:'#79d979'}]}>
                <Text style = {{color:'#ffffff'}}>Green</Text>
            </View>
            <View style = {[styles.items,{backgroundColor:'#FFC0CB'}]}>
                <Text style = {{color:'#ffffff'}}>Pink</Text>
            </View>
            <View style = {[styles.items,{backgroundColor:'#FFA500'}]}>
                <Text style = {{color:'#ffffff'}}>Orange</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    items:{
        flex:1,
        alignItems:'center',
        width: 100,
        height: 100,
        justifyContent:'center',
        margin:2,
        borderRadius: 3
    }
})

export default ElevatedCards;