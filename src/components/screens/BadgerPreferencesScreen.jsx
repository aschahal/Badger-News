import { Text, View, Switch, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { usePreferences } from "../PreferenceContext";

function BadgerPreferencesScreen(props) {
    const { preferences, togglePreference } = usePreferences();

    return (
        <View style={StyleSheet.container}>
            {Object.keys(preferences).map((tag) => (
                <View key={tag} style={style.preferenceItem}>
                    <Text>{tag}</Text>
                    <Switch
                        value={preferences[tag]}
                        onValueChange={() => togglePreference(tag)} 
                    />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    preferenceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    }
});

   

export default BadgerPreferencesScreen;