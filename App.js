import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
    const [counter, setCounter] = useState(0);
    const [auto, setAuto] = useState(false);
    const [autor, setAutor] = useState(false);
    const increaseCounter = () => {
        setCounter((current) => current == 10 ? current : current + 1);
    };
    const decreaseCounter = () => {
        setCounter((current) => current == 0 ? current : current - 1);
    };

    useEffect(() => {
        let autoIncrement;
        if (counter == 10) setAuto(false);
        if (auto) {
            autoIncrement = setInterval(() => {
                setCounter(current => current + 1);
            }, 300);
        }
        return () => {
            clearInterval(autoIncrement);
        }
    }, [auto, counter]);



    return (
        <View style={styles.container}>
            {autor ? (
                <Text style={{ ...styles.normalText, ...styles.boldText, ...styles.autorText }}>
                    Alejandro Herrera
                </Text>
            ) : null}
            <Text style={{ ...styles.normalText, ...styles.boldText }}>
                Counter
            </Text>
            <Text style={styles.normalText}>{counter}</Text>
            <TouchableOpacity
                onPress={increaseCounter}
                style={styles.buttonStyles}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={decreaseCounter}
                style={styles.buttonStyles}
            >
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAuto(!auto)} style={styles.buttonPlay}>
                <Text style={styles.buttonText}>⏯</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAutor(!autor)} style={styles.autorButton}>
                <Text style={styles.buttonText}> 👁️‍🗨️ autor</Text>
            </TouchableOpacity>
            {counter > 10 || counter < 0 ? (
                <Text style={{ ...styles.normalText, ...styles.notValid }}>
                    {"Not in range"}
                </Text>
            ) : (
                <Text
                    style={{
                        ...styles.normalText,
                        color:
                            counter >= 8
                                ? styles.valid.color
                                : styles.notValid.color,
                    }}
                >
                    {counter >= 8 ? "Is valid" : "Is not valid"}
                </Text>
            )}

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#292929",
        alignItems: "center",
        justifyContent: "center",
    },
    notValid: {
        color: "red",
    },
    valid: {
        color: "green",
    },
    normalText: {
        fontSize: 36,
        color: "white",
    },
    buttonText: {
        fontSize: 40,
        color: "white",
    },
    boldText: {
        fontWeight: "bold",
    },
    buttonStyles: {
        borderRadius: 50,
        padding: 5,
        margin: 10,
        backgroundColor: "blue",
        width: 200,
        alignItems: "center",
    },
    buttonPlay: {
        width: 200,
        borderRadius: 50,
        backgroundColor: 'crimson',
        alignItems: 'center',
        padding: 5,
        margin: 10
    },
    autorButton: {
        width: 200,
        borderRadius: 50,
        backgroundColor: 'indigo',
        alignItems: 'center',
        padding: 5,
        margin: 10
    },
    autorText: {
        color: 'indigo'
    }
});
