import { useState } from 'react';
import { 
  Button,
  ScrollView,
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
} from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState("");
  const [lembretes, setLembretes] = useState([]);

  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado);
  }

  const adicionarLembrete = () => {
    setLembretes([lembrete, ...lembretes]);
    setLembrete("");
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
      <ScrollView>
        {
          lembretes.map(lembrete => (
            <View key={lembrete} style={styles.itemNaLista}>
              <Text>{lembrete}</Text>
            </View>
          ))
        }
      </ScrollView>
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
