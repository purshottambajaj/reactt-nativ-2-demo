import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.textstyle}>
        Welcome to the Home Screen!
      </Text>
      <Button
        title="Go to List 1"
        onPress={() => navigation.navigate('List1')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('List2')}>
        <Text style={styles.buttonText}>Go to List 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textstyle: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue', // Optional styling for the button text
  },
});
