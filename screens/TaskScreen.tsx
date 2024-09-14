import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp, RouteProp } from '@react-navigation/stack';
import { RootStackParamList, Task } from '../App';

type TaskScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Task'>;
type TaskScreenRouteProp = RouteProp<RootStackParamList, 'Task'>;

interface TaskScreenProps {
  route: TaskScreenRouteProp;
  navigation: TaskScreenNavigationProp;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TaskScreen({ route, navigation, tasks, setTasks }: TaskScreenProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const task = route.params.task;

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    if (task) {
      const updatedTasks = tasks.map(t =>
        t.id === task.id ? { ...t, title, description } : t
      );
      setTasks(updatedTasks);
    } else {
      const newTask: Task = {
        id: tasks.length + 1,
        title,
        description,
      };
      setTasks([...tasks, newTask]);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título da Tarefa"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição da Tarefa"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
