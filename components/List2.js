import { Text, View, StyleSheet, FlatList } from 'react-native';


export default function List2() {
const Friends =
[ 
  {name:"Friend10"},
  {name:"Friend20"},
  {name:"Friend30"},
  {name:"Friend40"},
  {name:"Friend50"},
  {name:"Friend60"},
  {name:"Friend70"},
  {name:"Friend80"},
  {name:"Friend90"},
  {name:"Friend1000"},
  ];

  return (
    
      <Text style={styles.textstyle}>rger
        <FlatList 
        keyExtractor={friend => friend .name}
         data={Friends}  renderItem=
        { ({item}) =>
        {return <Text> {item.name
        }
        </Text> }
        }
        />
      </Text>
      
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
  
});
