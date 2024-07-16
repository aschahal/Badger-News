import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import BadgerNewsItemCard from './BadgerNewsItemCard'; 
import { usePreferences } from '../PreferenceContext';

function BadgerNewsScreen(props) {
    const [articles, setArticles] = useState([]);
    const badgerId = "bid_913bfa05c389704ec91fb8c0c3a8868ddb2d99c90672e19ce175bf3b89fbc9e8";
    const { preferences, togglePreference } = usePreferences();

    useEffect(() => {
        fetch('https://cs571.org/api/s24/hw8/articles', {
            headers: {
                "X-CS571-ID": badgerId
            }
        })
            .then(response => response.json())
            .then(data => {
                setArticles(data)
                const uniqueTags = new Set(data.flatMap(article => article.tags));
                uniqueTags.forEach(tag => {
                    if (preferences[tag] === undefined) {
                        togglePreference(tag);
                    }
                });
            });
    }, []);

    const filteredArticles = articles.filter(article => article.tags.some(tag => preferences[tag]));

    return (
        <ScrollView style={StyleSheet.container}>
            {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                    <BadgerNewsItemCard
                        key={article.id}
                        articleId={article.id}
                        title={article.title}
                        imageUri={`https://raw.githubusercontent.com/CS571-S24/hw8-api-static-content/main/${article.img}`} 
                        fullArticle={article.fullArticle}
                    />
                ))
            ) : (
                <Text>No articles match your prefernces</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});

export default BadgerNewsScreen;
