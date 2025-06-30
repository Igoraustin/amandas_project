# 📂 Guia para Correção da Estrutura do Projeto

Este guia irá ajudá-lo a mover seu projeto da subpasta `project/` para a raiz do diretório `amandas_project/`, resolvendo problemas de compatibilidade com ferramentas de desenvolvimento e o GitHub.

## 🎯 Objetivo

Mover todos os arquivos e pastas de `c:/Users/Igor/Documents/GitHub/amandas_project/project/` para `c:/Users/Igor/Documents/GitHub/amandas_project/`.

## 🚨 Antes de Começar

**Importante:** Certifique-se de que você não tem nenhuma alteração não salva. É sempre uma boa ideia ter um backup, mas o processo a seguir é seguro.

## 👣 Passos para a Migração

Vou executar os comandos para você, mas aqui está o que eles farão:

1.  **Mover todo o conteúdo:** Todos os arquivos e pastas (como `src`, `public`, `package.json`, etc.) serão movidos da pasta `project` para a pasta raiz `amandas_project`.
2.  **Remover a pasta vazia:** Após mover tudo, a pasta `project`, que agora estará vazia, será removida.

Isso resultará em uma estrutura de projeto limpa e padrão, que será facilmente reconhecida por todas as ferramentas.

## ✅ Verificação Pós-Migração

Após a migração, você deve ser capaz de:

-   Executar `npm run dev` diretamente da pasta `amandas_project`.
-   Conectar seu repositório ao GitHub sem problemas.
-   Usar ferramentas como `bolt.new` (ou outras) que agora devem reconhecer seu projeto corretamente.

---

**Se você estiver pronto, posso executar os comandos para realizar essa reestruturação para você.**