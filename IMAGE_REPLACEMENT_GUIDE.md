# 🖼️ Guia para Substituir a Imagem Temporária

Atualmente, estamos usando uma imagem temporária (placeholder) para a foto da Dra. Amanda. Este guia explica como substituí-la pela foto real quando você estiver pronto.

## Opção 1: Usar uma Imagem Local

### Passo 1: Preparar a Imagem
1. Redimensione a foto da Dra. Amanda para aproximadamente 800x600 pixels
2. Salve-a no formato JPG com o nome `dra-amanda.jpg`
3. Crie a estrutura de diretórios necessária:
   ```
   project/public/images/
   ```
4. Coloque a imagem neste diretório:
   ```
   project/public/images/dra-amanda.jpg
   ```

### Passo 2: Atualizar o Código
1. Abra o arquivo `project/src/components/Hero.tsx`
2. Localize a tag `<img>` (aproximadamente na linha 77-81)
3. Substitua a URL temporária pelo caminho local:

```jsx
<img
  src="/images/dra-amanda.jpg"
  alt="Dra. Amanda Fernandes - Nutróloga"
  className="w-full h-96 object-cover rounded-2xl"
/>
```

### Passo 3: Testar
1. Verifique se a imagem aparece corretamente no navegador
2. Se não aparecer, tente os seguintes caminhos alternativos:
   - `src="./images/dra-amanda.jpg"`
   - `src="../public/images/dra-amanda.jpg"`

## Opção 2: Usar uma Imagem Hospedada Online

Se você preferir hospedar a imagem online:

1. Faça upload da imagem para um serviço como:
   - Imgur
   - ImgBB
   - Google Drive (com link de compartilhamento público)
   - Seu próprio servidor web

2. Obtenha a URL direta da imagem

3. Atualize o código em `Hero.tsx`:
```jsx
<img
  src="https://url-da-sua-imagem-hospedada.jpg"
  alt="Dra. Amanda Fernandes - Nutróloga"
  className="w-full h-96 object-cover rounded-2xl"
/>
```

## Solução de Problemas Comuns

### A imagem não aparece
- Verifique se o caminho está correto
- Certifique-se de que a imagem existe no local especificado
- Verifique o console do navegador (F12) para ver se há erros de carregamento
- Tente usar um caminho absoluto em vez de relativo

### A imagem aparece distorcida
- Verifique se a proporção da imagem é adequada para o espaço
- Ajuste a classe CSS para controlar melhor o recorte:
  ```jsx
  className="w-full h-96 object-contain rounded-2xl"
  ```
  (Mudando de `object-cover` para `object-contain`)

### A imagem é muito grande e demora para carregar
- Comprima a imagem usando ferramentas como TinyJPG
- Redimensione para um tamanho adequado (800x600 é suficiente)
- Considere usar formatos modernos como WebP

---

Lembre-se de que, após substituir a imagem, você deve sincronizar as mudanças com o GitHub conforme explicado no arquivo `GITHUB_SYNC_GUIDE.md`.