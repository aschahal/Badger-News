import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function BadgerNewsItemCard(props) {
    const navigation = useNavigation();

    return (
        // ChatGPT line 10
        <TouchableOpacity onPress={() => navigation.push('Article', props)}>
            <View style={styles.card}>
            <Image source={{ uri: props.imageUri }} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10, 
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    image: {
       width: '100%',
       height: 200,
       borderRadius: 6 
    },
    title: {
        paddingTop: 10,
        fontSize: 10,
        fontWeight: 'bold'
    }
});

export default BadgerNewsItemCard;
