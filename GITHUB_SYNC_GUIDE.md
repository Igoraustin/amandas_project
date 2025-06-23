# 🔄 Guia de Sincronização com GitHub

Este guia explica como sincronizar o projeto da Dra. Amanda Fernandes com um repositório GitHub.

## Pré-requisitos

1. Ter uma conta no GitHub (https://github.com)
2. Ter o Git instalado no seu computador (https://git-scm.com/downloads)
3. Configurar o Git com suas credenciais:
   ```
   git config --global user.name "Seu Nome"
   git config --global user.email "seu.email@exemplo.com"
   ```

## Opção 1: Sincronizar com um Repositório Existente

Se o repositório já existe no GitHub:

1. **Abra o terminal na pasta raiz do projeto**:
   ```
   cd c:/Users/Igor/Documents/GitHub/amandas_project
   ```

2. **Inicialize o Git (se ainda não estiver inicializado)**:
   ```
   git init
   ```

3. **Adicione o repositório remoto**:
   ```
   git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git
   ```

4. **Adicione todos os arquivos ao controle de versão**:
   ```
   git add .
   ```

5. **Faça o commit das mudanças**:
   ```
   git commit -m "Implementação do website da Dra. Amanda Fernandes"
   ```

6. **Envie as mudanças para o GitHub**:
   ```
   git push -u origin main
   ```
   (Ou use `master` em vez de `main` se for a branch padrão do seu repositório)

## Opção 2: Criar um Novo Repositório no GitHub

Se você ainda não tem um repositório:

1. **Acesse o GitHub e crie um novo repositório**:
   - Vá para https://github.com/new
   - Dê um nome ao repositório (ex: "dra-amanda-website")
   - Escolha se será público ou privado
   - NÃO inicialize com README, .gitignore ou licença
   - Clique em "Create repository"

2. **Abra o terminal na pasta raiz do projeto**:
   ```
   cd c:/Users/Igor/Documents/GitHub/amandas_project
   ```

3. **Inicialize o Git**:
   ```
   git init
   ```

4. **Adicione todos os arquivos ao controle de versão**:
   ```
   git add .
   ```

5. **Faça o commit das mudanças**:
   ```
   git commit -m "Implementação inicial do website da Dra. Amanda Fernandes"
   ```

6. **Adicione o repositório remoto**:
   ```
   git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git
   ```

7. **Envie as mudanças para o GitHub**:
   ```
   git push -u origin main
   ```

## 📁 Garantindo que a Imagem da Dra. Amanda seja Incluída

Para garantir que a imagem da Dra. Amanda seja incluída no repositório:

1. **Certifique-se de que a imagem está salva no local correto**:
   ```
   project/public/images/dra-amanda.jpg
   ```

2. **Verifique se o arquivo não está sendo ignorado pelo Git**:
   - Abra o arquivo `.gitignore` (se existir) e certifique-se de que não há regras que excluam arquivos de imagem ou o diretório `public/images`

3. **Adicione especificamente a imagem ao Git**:
   ```
   git add project/public/images/dra-amanda.jpg
   ```

4. **Faça um commit específico para a imagem**:
   ```
   git commit -m "Adiciona foto da Dra. Amanda"
   ```

5. **Envie para o GitHub**:
   ```
   git push
   ```

## 🔄 Atualizações Futuras

Após fazer alterações no projeto, você pode sincronizar novamente com o GitHub:

1. **Verifique quais arquivos foram modificados**:
   ```
   git status
   ```

2. **Adicione as mudanças**:
   ```
   git add .
   ```

3. **Faça o commit**:
   ```
   git commit -m "Descrição das alterações feitas"
   ```

4. **Envie para o GitHub**:
   ```
   git push
   ```

## 🤝 Colaboração

Se outras pessoas forem colaborar no projeto:

1. Elas podem clonar o repositório:
   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Após clonar, elas precisam instalar as dependências:
   ```
   cd nome-do-repositorio/project
   npm install
   ```

3. E então podem iniciar o servidor de desenvolvimento:
   ```
   npm run dev
   ```

---

Se você encontrar algum problema durante a sincronização, verifique se suas credenciais do GitHub estão corretas e se você tem permissão para enviar para o repositório.