import { useState } from 'react';
import { 
  Button,
  StyleSheet, 
  Text, 
  TextInput, 
  View 
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
      <View>
        {
          lembretes.map((lembrete) => (
              <Text key={ lembrete }>{ lembrete }</Text>
          ))
        }
      </View>
    </View>
  );
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
  }
});
