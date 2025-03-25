# Fornecedores App

Um aplicativo simples em React Native para cadastrar fornecedores, armazenando os dados localmente com AsyncStorage.

O [relatório de práticas](https://github.com/user-attachments/files/19440721/Projeto.Nivel.5_.Por.que.nao.paralelizar_.pdf) foi confeccionado em formato PDF e produzido em conjunto com o desenvolvimento do projeto.

## 📌 Funcionalidades
- Adicionar fornecedores com nome, endereço, contato, categoria e imagem.
- Listar fornecedores cadastrados.
- Salvar os dados localmente usando AsyncStorage.
- Remover todos os fornecedores do armazenamento local.
- Interface rolável para facilitar a navegação.

## 🛠️ Tecnologias Utilizadas
- React Native
- TypeScript
- Expo
- AsyncStorage
- Expo ImagePicker

## 📦 Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/RubsRafa/projeto1mundo4.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd projeto1mundo4
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## 🚀 Como Executar
1. Inicie o Expo:
   ```bash
   npx expo start
   ```
2. Escaneie o QR Code com o aplicativo Expo Go ou execute no emulador.

## 📷 Seleção de Imagens
O app permite escolher uma imagem da galeria usando `expo-image-picker`. Certifique-se de conceder permissões de acesso à mídia no seu dispositivo.

## ⚠️ Validação
Antes de adicionar um fornecedor, todos os campos obrigatórios devem ser preenchidos. Caso contrário, um alerta será exibido.

---
Desenvolvido com ❤️ por Rubs

