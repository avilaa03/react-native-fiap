import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/stack';
import { RootStackParamList, Task } from '../App';

type TaskDetailScreenRouteProp = RouteProp<RootStackParamList, 'TaskDetail'>;

interface TaskDetailScreenProps {
  route: TaskDetailScreenRouteProp;
  navigation: any; 
}

export default function TaskDetailScreen({ route, navigation }: TaskDetailScreenProps) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.description}</Text>
      <Button
        title="Editar"
        onPress={() => navigation.navigate('Task', { task })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
