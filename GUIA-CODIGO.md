# Guia do código do DevNest

Esta versão prioriza funções pequenas, nomes em português, variáveis, condições `if/else`, laços `for`, listas e eventos de formulário. O projeto continua sendo React/Next.js, por isso também usa componentes, `useState` e `useEffect`. Há comentários nos pontos que precisam de explicação.

## Por onde começar

1. `src/components/Header.jsx`: um exemplo curto de componente, estado e botão.
2. `src/components/contrato/Contrato.jsx`: conteúdo em JSX, parecido com HTML.
3. `src/lib/devnest.js`: funções dos filtros, projetos, login, proposta, contrato, dúvidas e tema.
4. `src/components/cadastro/Cadastro.jsx`: formulário, validação, foto e habilidades.
5. `src/components/Comportamentos.jsx`: ligação entre as funções JavaScript e as páginas do Next.js.

## Função

Uma função reúne instruções para uma tarefa. No Header:

```jsx
function fecharMenu() {
  setMenuAberto(false);
}
```

Ela muda o estado do menu para fechado. O nome descreve a tarefa.

## Estado: useState

```jsx
const [menuAberto, setMenuAberto] = useState(false);
```

`menuAberto` guarda o valor atual. `setMenuAberto` muda esse valor e faz o React atualizar a tela. `false` significa que o menu começa fechado. `true` significa aberto.

Esse recurso já aparecia no projeto enviado, no Header, no Login e no Cadastro. No Cadastro, os estados guardam a senha, a confirmação, a foto, as habilidades, o texto de uma habilidade e a mensagem de retorno. Os outros campos são lidos do formulário ao validar.

## Condição: if e else

O código do contrato segue esta ideia:

```js
if (aceite.checked) {
  botao.setAttribute("href", "/contratofechado");
} else {
  botao.removeAttribute("href");
}
```

Se a caixa estiver marcada, o botão recebe o destino. Caso contrário, o destino é retirado.

## Repetição: for

```js
for (let i = 0; i < cards.length; i++) {
  cards[i].hidden = false;
}
```

`i` começa em zero. Enquanto for menor que a quantidade de cards, o código mostra o card naquela posição. `i++` avança uma posição. No filtro real, há uma condição que escolhe quais cards mostrar.

## Eventos

`onclick` indica o que executar ao clicar; `onsubmit`, ao enviar; `oninput`, ao digitar; `onchange`, ao alterar uma escolha.

```js
aceite.onchange = atualizarBotao;
```

A função é passada sem `()`, porque será executada quando o evento acontecer. Escrever `atualizarBotao()` executaria a função naquele momento.

Em JSX os nomes usam maiúscula no meio, como `onClick` e `onSubmit`. No Header:

```jsx
<button onClick={alternarMenu}>☰</button>
```

## Encontrar elementos

`document.getElementById("senha")` procura um elemento pelo seu ID. `document.querySelector(".contractButton")` procura o primeiro elemento com aquela classe. `document.querySelectorAll(".project-card")` procura todos os cards.

`classList.add`, `classList.remove` e `classList.toggle` colocam, retiram ou alternam uma classe CSS. Os filtros usam essas operações para destacar a categoria escolhida.

## As listas do cadastro

`concat` acrescenta uma habilidade e produz uma nova lista para o React. A remoção usa um `for` e copia para uma nova lista as habilidades que devem continuar.

O `map` no JSX desenha um chip para cada habilidade. Ele já era usado no componente de cadastro original. `join(", ")` junta os nomes para preencher o campo oculto de habilidades.

## Por que ainda existe useEffect

O React precisa terminar de mostrar a página antes de o código procurar os elementos com `document`. O `useEffect` de `Comportamentos.jsx` executa essa preparação após a renderização. `usePathname`, do Next.js, informa qual página está aberta.

Há outro `useEffect` no Cadastro: quando aparece a mensagem de sucesso, ele espera 1,2 segundo e vai para o Perfil. A função retornada cancela essa espera se a pessoa sair da página antes.

Os dois usos têm comentários no código. Não há `useRef`, `useRouter`, hooks próprios nem uma lista de funções de limpeza.

## Recursos do navegador que foram mantidos

- `sessionStorage`: guarda o projeto selecionado nesta aba.
- `localStorage`: guarda a preferência de tema.
- `JSON.stringify` e `JSON.parse`: transformam o objeto do projeto em texto e recuperam o objeto.
- `FileReader`: lê a imagem selecionada para mostrar uma prévia.
- `setTimeout`: executa uma função depois de um intervalo.
- `try/catch`: permite continuar usando a página se o navegador bloquear o armazenamento.

Esses recursos já existiam no JavaScript original. Também foram mantidas as expressões regulares usadas para verificar email e atualizar o ano do rodapé.

Os redirecionamentos de login, cadastro e proposta usam `window.location.href`, como no JavaScript original. Essa forma simples abre o destino recarregando a página.

## Como executar

Na pasta `DevNest-main-2`:

```sh
npm ci
npm run dev
```

O projeto continua sendo uma demonstração no navegador. Não há autenticação real, banco de dados nem envio real de email.
