import React, { useState } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const ToDo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const toggleComplete = () => {
        setIsEditing(false);
        setIsCompleted(!isCompleted);
    }

    const onClickEditing = () => {
        setIsEditing(true);
    }

    const onClickSave = () => {
        setIsEditing(false);
    }

    const onClickDelete = () => {
    }
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <TouchableOpacity onPress={toggleComplete}>
                    <View
                        style={[styles.circle,
                        isCompleted ? styles.completedCircle : styles.unCompletedCircle
                        ]} />
                </TouchableOpacity>
                <Text
                    style={[
                        styles.text,
                        isCompleted ? styles.completedText : styles.unCompletedText,
                    ]}>안녕 나는 투두야 ^.^</Text>
            </View>
            {isEditing ?
                !isCompleted &&
                <View style={styles.actions}>
                    <TouchableOpacity onPress={onClickSave}>
                        <View style={styles.actionContainer}>
                            <Text style={styles.actionText}>✅</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                :
                !isCompleted &&
                <View style={styles.actions}>
                    <TouchableOpacity onPress={onClickEditing}>
                        <View style={styles.actionContainer}>
                            <Text style={styles.actionText}>✏️</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClickDelete}>
                        <View style={styles.actionContainer}>
                            <Text style={styles.actionText}>❌</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }
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
        justifyContent: 'space-between',
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
    completedText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    uncompletedText: {
        color: '#353839',
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width / 2,
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    actions: {
        flexDirection: 'row',
    }
});
export default ToDo;