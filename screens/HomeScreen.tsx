import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Task } from '../App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function HomeScreen({ navigation, tasks, setTasks }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TaskDetail', { task: item })}
          >
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Adicionar Nova Tarefa"
        onPress={() => navigation.navigate('Task')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    fontSize: 18,
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
  },
});
