import React, { useState } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const ToDo = () => {
    const [isEditing, setisEditing] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const toggleComplete = () => {
        setIsCompleted(!isCompleted);
    }
    console.log(isCompleted);
    return (
        <View
            style={[
                styles.container,
            ]}>
            <TouchableOpacity onPress={toggleComplete}>
                <View
                    style={[styles.circle,
                    isCompleted ? styles.completedCircle : styles.unCompletedCircle
                    ]} />
            </TouchableOpacity>
            <Text style={styles.text}>안녕 나는 투두야 ^.^</Text>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'red',
        borderWidth: 3,
        marginRight: 20,
    },
    text: {
        fontWeight: '600',
        fontSize: 20,
        marginVertical: 20,
    },
    completedCircle: {
        borderColor: '#bbb',
    },
    unCompletedCircle: {
        borderColor: '#F23657',
    },
});
export default ToDo;