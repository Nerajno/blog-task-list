import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import TaskList from '../components/taskList';
import { getTasks } from '../components/task';

const HomeScreen = ({ navigation }) => {
    
    return (
        <View>
            <Text style={styles.title}>Home Screen</Text>
            <TaskList />
            <Button 
              title="Add Task" 
              onPress={()=> navigation.navigate('AddTask')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center',
        margin: 15,
    }
});

export default HomeScreen;