import { useEffect, useState } from "react"
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Fornecedor = {
  nome: String,
  endereco: String,
  contato: String,
  categoria: String,
  imagem: String | null,
}

export const Fornecedores = () => {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);

  useEffect(() => {
    fetchFornecedores();
  }, []);

  const fetchFornecedores = async () => {
    const dados = await AsyncStorage.getItem('fornecedores');
    if (dados) {
      setFornecedores(JSON.parse(dados));
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={fornecedores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10, borderBottomWidth: 1, paddingBottom: 5 }}>
              {item.imagem &&
                <Image source={{ uri: String(item.imagem) }} style={styles.butonStyle} />
              }
              <Text>Nome: {item.nome}</Text>
              <Text>Endereço: {item.endereco}</Text>
              <Text>Contato: {item.contato}</Text>
              <Text>Categoria: {item.categoria}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30
  },
  butonStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  viewStyle: {
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    margin: 'auto',
  }
})