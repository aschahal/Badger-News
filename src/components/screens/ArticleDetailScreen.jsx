import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Animated, Image, Linking, Pressable, StyleSheet } from 'react-native';

function ArticleDetailScreen( props ) {
    const [article, setArticle] = useState(null);
    const [fadeAnim] = useState(new Animated.Value(0));
    const badgerId = "bid_913bfa05c389704ec91fb8c0c3a8868ddb2d99c90672e19ce175bf3b89fbc9e8";

    useEffect(() => {
        fetch(`https://cs571.org/api/s24/hw8/article?id=${props.route.params.fullArticle}`, {
            headers: {
                "X-CS571-ID": badgerId
            }
        })
            .then(response => response.json())
            .then(data => {
                setArticle(data);
                console.log(data);
                // ChatGPT
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }).start();
            })
            .catch(error => console.error(error));
            return () => {
                fadeAnim.stopAnimation();
              };
    }, []);

    if (!article) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* ChatGPT */}
                <ActivityIndicator size={{ flex: 1, justifyContent: 'center', marginBottom: 0, marginVertical: 0 }} />
                <Text style={styles.textStyle}>Loading...</Text>
            </View>
        );
    }

    const handlePress = () => {
        Linking.openURL(article.url).catch(err => console.error("Failed to open link:", err));
    };

    return (
        <ScrollView style={{ flex: 1, padding: 10 }}>
           <Image source={{ uri: article.imageUri }} />
           <Text style={{ fontSize: 22, fontWeight: 'bold', justifyContent: "space-between"  }}>{article.title}</Text>
            <Text style={{ fontSize: 20, justifyContent: "space-between" }}>By {article.author} on {article.posted}</Text>
            <Pressable onPress={handlePress}>
                    <Text style={styles.linkText}>Read full article here.</Text>
            </Pressable>
            {/* ChatGPT lines 54 - 56 */}
            {article.body.map((paragraph, index) => (
                <Animated.Text key={index} style={[styles.paragraph, { opacity: fadeAnim }]}>
                    {paragraph}
                </Animated.Text>
            ))} 
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    linkText: {
        color: 'blue', 
        marginTop: 20,
        justifyContent: "space-around"
    },
    textStyle: {
        marginTop: 0, 
        textAlign: 'center', 
        paddingBottom: 400,
        fontSize: 30
    },
    paragraph: {
        fontSize: 18
    }
});

export default ArticleDetailScreen;
