import { StyleSheet, Text, View } from 'react-native';
import StackRoutes from './src/routes/stack.routes';

export default function App() {
  return (
    <StackRoutes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
