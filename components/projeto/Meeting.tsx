import { useEffect, useState } from "react"
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet, ScrollView } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Fornecedor } from "./Fornecedores";

export const Meeting = () => {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState<String | null>(null);
  const [erro, setErro] = useState<String | null>(null);

  const saveFornecedores = async (dados: Fornecedor[]) => {
    await AsyncStorage.setItem('fornecedores', JSON.stringify(dados));
  }

  const addFornecedor = async () => {
    if (!nome || !endereco || !contato || !categoria) {
      setErro('Preencha todos os campos!');
      return;
    }

    setErro(null);

    const newFornecedor = { nome, endereco, contato, categoria, imagem };
    const newList = [...fornecedores, newFornecedor];
    setFornecedores(newList)
    await saveFornecedores(newList);
    setNome('');
    setEndereco('');
    setContato('');
    setCategoria('');
    setImagem(null);
  }

  const selecionarImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    })
    if (!result.canceled && result.assets.length > 0) {
      setImagem(result.assets[0].uri);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {erro && <Text style={styles.errorText}>{erro}</Text>}
        <Text style={styles.textStyle}>Nome:</Text>
        <TextInput value={nome} onChangeText={setNome} style={styles.textInputStyle} />
        <Text style={styles.textStyle}>Endereço:</Text>
        <TextInput value={endereco} onChangeText={setEndereco} style={styles.textInputStyle} />
        <Text style={styles.textStyle}>Contato:</Text>
        <TextInput value={contato} onChangeText={setContato} style={styles.textInputStyle} />
        <Text style={styles.textStyle}>Categoria:</Text>
        <TextInput value={categoria} onChangeText={setCategoria} style={styles.textInputStyle} />
        <Button title="Selecionar Imagem" onPress={selecionarImagem} />
        {imagem &&
          <Image source={{ uri: String(imagem) }} />
        }
        <Button title="Adicionar Fornecedor" onPress={addFornecedor} color="green" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30
  },
  textStyle: {
    backgroundColor: '#F2F2F2',
    width: 'auto',
    left: 10,
    fontSize: 16
  },
  textInputStyle: {
    borderWidth: 1,
    borderBlockEndColor: 'black',
    marginBottom: 5,
    borderRadius: 5,
    padding: 8
  },
  butonStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  errorText: {
    color: 'red'
  }
})