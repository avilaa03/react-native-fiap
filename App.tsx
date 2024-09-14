import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';
import { Task } from './App';

type RootStackParamList = {
  Home: undefined;
  Task: { task?: Task };
  TaskDetail: { task: Task };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Lista de Tarefas' }}>
          {props => <HomeScreen {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
        <Stack.Screen name="Task" options={{ title: 'Adicionar/Editar Tarefa' }}>
          {props => <TaskScreen {...props} tasks={tasks} setTasks={setTasks} />}
        </Stack.Screen>
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetailScreen}
          options={{ title: 'Detalhes da Tarefa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
