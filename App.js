import { useState } from 'react';
import { 
  Button,
  FlatList,
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
} from 'react-native';
import {  } from 'react-native-web';

export default function App() {
  const [lembrete, setLembrete] = useState("");
  const [lembretes, setLembretes] = useState([]);
  const [contador, setContador] = useState(0);

  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado);
  }

  const adicionarLembrete = () => {
    setLembretes([{
      key: contador.toString(),
      value: lembrete
    }, ...lembretes]);

    setLembrete("");
    setContador(contador + 1);
  }
  
  return (
    <View style={styles.telaPrincipalView}>
      <View>
        <TextInput 
          placeholder='Lembrar...'
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button 
          disabled = { lembrete.length === 0 }
          title='Adicionar lembrete' 
          onPress={adicionarLembrete}
        />
      </View>

      <FlatList 
        data={lembretes}
        renderItem={lembrete => (
          <View 
            style={styles.itemNaLista}
          >
            <Text>{lembrete.item.value}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40
  },
  lembreteTextInput: { 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 12 
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }
});
