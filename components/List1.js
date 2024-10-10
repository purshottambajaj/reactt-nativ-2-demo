import { Text, View, StyleSheet, FlatList } from 'react-native';


export default function List1() {
const Friends =
[ 
  {name:"Friend1"},
  {name:"Friend2"},
  {name:"Friend3"},
  {name:"Friend4"},
  {name:"Friend5"},
  {name:"Friend6"},
  {name:"Friend7"},
  {name:"Friend8"},
  {name:"Friend9"},
  {name:"Friend10"},
  ];

  return (
    
      <Text style={styles.textstyle}>
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
