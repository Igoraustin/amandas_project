# 🖼️ Instruções Detalhadas para Salvar a Imagem da Dra. Amanda

Para adicionar a foto da Dra. Amanda ao site e garantir que ela seja exibida corretamente, siga estas etapas:

## 1. Salvar a Imagem no Local Correto

1. Certifique-se de que o diretório `images` existe dentro da pasta `public`:
   ```
   project/public/images/
   ```
   Se não existir, crie-o manualmente.

2. Salve a imagem que você compartilhou com o nome `dra-amanda.jpg` neste diretório:
   ```
   project/public/images/dra-amanda.jpg
   ```

## 2. Verificar o Formato e Tamanho

1. Certifique-se de que a imagem está no formato JPG.
2. Verifique se a imagem tem uma boa resolução (recomendado: pelo menos 800x600 pixels).
3. O tamanho do arquivo não deve exceder 1MB para garantir carregamento rápido.

## 3. Reiniciar o Servidor (se necessário)

Se a imagem não aparecer imediatamente:

1. Pare o servidor de desenvolvimento (Ctrl+C no terminal).
2. Inicie-o novamente:
   ```
   cd project
   npm run dev
   ```

## 4. Verificar o Caminho no Navegador

Se a imagem ainda não aparecer:

1. Abra o site no navegador (http://localhost:5173).
2. Clique com o botão direito na área onde a imagem deveria aparecer.
3. Selecione "Inspecionar" ou "Inspecionar elemento".
4. Verifique o caminho da imagem no código HTML.
5. Tente acessar diretamente a URL da imagem: http://localhost:5173/images/dra-amanda.jpg

## 5. Solução Alternativa

Se ainda houver problemas, você pode usar uma URL de imagem temporária:

1. Abra o arquivo `project/src/components/Hero.tsx`.
2. Substitua o caminho da imagem por uma URL online temporária:
   ```jsx
   <img
     src="https://via.placeholder.com/800x600.jpg?text=Dra.+Amanda+Fernandes"
     alt="Dra. Amanda Fernandes - Nutróloga"
     className="w-full h-96 object-cover rounded-2xl"
   />
   ```

## Observação Importante

A imagem deve ser incluída no repositório Git quando você sincronizar com o GitHub, conforme explicado no arquivo `GITHUB_SYNC_GUIDE.md`.