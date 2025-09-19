# Ludox Mobile (UI-Only)

Aplicativo mobile criado com Expo e React Native, focado exclusivamente na interface (sem backend). O objetivo é demonstrar a UI de uma loja, com telas como Splash/Login, Home com carrossel e ofertas, além de navegação inferior.

## ✅ Status do Projeto
- Interface: em desenvolvimento, funcional para navegação e visualização
- Backend: não implementado (dados locais/mockados)
- Plataforma: Expo (Android/iOS, e Web se desejado pelo Expo)

## 🏗️ Stack e Principais Dependências
- React Native + Expo
- TypeScript
- expo-router (navegação baseada em arquivos)
- react-native-reanimated-carousel (carrossel)
- react-native-elements (SearchBar)
- Zustand (estado simples e persistência com AsyncStorage)

## 📂 Estrutura do Projeto (resumo)
```
src/
  app/
    _layout.tsx           # Layout com Header e stack de rotas
    index.tsx             # Splash/Transição para Login
    Home.tsx              # Página principal (carrossel, ofertas, produtos)
    (Login)/Login.tsx     # Tela de Login (UI)
    (Categorias)/         # Tela de categorias (UI)
    (Favoritos)/          # Tela de favoritos (UI)
    (User)/               # Tela de conta/usuário (UI)
  components/
    Header.tsx            # Cabeçalho com SearchBar e ícone do carrinho
    Navigation.tsx        # Barra de navegação inferior
    Slider.tsx            # Carrossel de imagens
    Product.tsx           # Lista horizontal de cards de produtos
    Countdown.tsx         # Contagem regressiva de ofertas
  hooks/
    Count.tsx             # Estado global do carrinho (contador) com Zustand
  services/
    data.tsx              # Dados mockados (imagens e produtos)
assets/
  images/                 # Logos, ícones e banners
  fonts/                  # Fontes IstokWeb
```

## 🚀 Executando o Projeto (Expo)
1. Instale as dependências:
   - npm install
2. Inicie o servidor de desenvolvimento:
   - npx expo start
3. Escolha onde abrir:
   - Android (emulador ou dispositivo com Expo Go)
   - iOS (simulador ou dispositivo com Expo Go)
   - Web (opcional, via Expo)

## 🔡 Fontes
As fontes `IstokWeb-Regular.ttf` e `IstokWeb-Bold.ttf` são carregadas em `src/app/_layout.tsx` via `useFonts`. Certifique-se de que os arquivos existam em `src/assets/fonts/`.

## 🖼️ Imagens e Carrossel
- As imagens do carrossel e dos produtos são referenciadas a partir de `src/services/data.tsx`.
- Para trocar imagens, atualize os `require()` e/ou inclua novos arquivos em `src/assets/images/` ou `src/assets/teste/` conforme o caso.

## 🧭 Navegação
- A navegação usa `expo-router`:
  - `src/app/_layout.tsx` define o header e opções globais
  - `src/app/index.tsx` exibe a splash e transição animada para Login
  - Demais telas ficam em subpastas nomeadas (padrão de rotas do expo-router)

## 🧰 Estado Global (exemplo simples)
- O contador de itens (ex.: carrinho) é feito com Zustand em `src/hooks/Count.tsx`, com persistência em `AsyncStorage`.

## ⚠️ Limitações (UI-Only)
- Não há autenticação real
- Não há comunicação com API/servidor
- Os produtos e imagens são mockados em arquivo local

## 📌 Próximos Passos (sugestões)
- Integrar backend (REST/GraphQL)
- Implementar autenticação (OAuth/Email+Senha)
- Estados de carregamento/erro
- Testes (unitários e E2E)

## 🐞 Dicas e Solução de Problemas
- Se as fontes não carregarem: confirme caminhos e nome das fontes em `_layout.tsx`
- Se o carrossel não aparecer: verifique dimensões e imagens em `services/data.tsx`
- Se a `SearchBar` não renderizar como esperado: confirme a instalação do `react-native-elements` e estilos do `Header.tsx`

## 📄 Licença
Projeto para fins educacionais e de demonstração de UI.
