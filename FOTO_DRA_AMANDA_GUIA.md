# 🖼️ Guia para Usar a Foto da Dra. Amanda

Esta é a foto oficial da Dra. Amanda que deve ser usada no site. Siga estas instruções para implementá-la corretamente:

## Método 1: Usando a Pasta Public (Recomendado)

1. **Salve a Foto:**
   - Salve a foto exatamente como está com o nome `dra-amanda.jpg`
   - Coloque-a no diretório: `project/public/images/dra-amanda.jpg`

2. **Atualize o Componente Hero:**
   - Abra o arquivo `project/src/components/Hero.tsx`
   - Localize o bloco de código da imagem (aproximadamente linhas 94-98)
   - Substitua pelo seguinte código:

   ```jsx
   <img
     src="/images/dra-amanda.jpg"
     alt="Dra. Amanda Fernandes - Nutróloga"
     className="w-full h-96 object-cover rounded-2xl"
   />
   ```

## Método 2: Usando a Pasta Assets (Alternativa)

1. **Salve a Foto:**
   - Salve a foto com o nome `dra-amanda.jpg`
   - Coloque-a no diretório: `project/src/assets/dra-amanda.jpg`

2. **Atualize o Componente Hero:**
   - Abra o arquivo `project/src/components/Hero.tsx`
   - No topo do arquivo, adicione a linha de importação:
   
   ```jsx
   import doctorImage from '../assets/dra-amanda.jpg';
   ```
   
   - Localize o bloco de código da imagem (aproximadamente linhas 94-98)
   - Substitua pelo seguinte código:
   
   ```jsx
   <img
     src={doctorImage}
     alt="Dra. Amanda Fernandes - Nutróloga"
     className="w-full h-96 object-cover rounded-2xl"
   />
   ```

## Ajustes de Estilo (Opcional)

A foto tem um fundo de madeira que combina bem com a paleta de cores do site. Para destacá-la ainda mais:

```jsx
<img
  src="/images/dra-amanda.jpg" // ou {doctorImage} se usar o método 2
  alt="Dra. Amanda Fernandes - Nutróloga"
  className="w-full h-96 object-cover object-top rounded-2xl" // adicionado object-top para focar no rosto
/>
```

## Verificação

Após fazer as alterações:
1. Verifique se o servidor de desenvolvimento está rodando (`npm run dev`)
2. Acesse http://localhost:5173 no navegador
3. Confirme se a foto da Dra. Amanda aparece corretamente na seção Hero

## Solução de Problemas

Se a foto não aparecer:
- Verifique se o caminho está correto
- Tente usar caminhos alternativos (`./images/dra-amanda.jpg` ou `../public/images/dra-amanda.jpg`)
- Reinicie o servidor de desenvolvimento
- Limpe o cache do navegador

---

Esta foto oficial transmite profissionalismo e confiança, combinando perfeitamente com a identidade visual do site.