# DevNest — versão simplificada

Esta versão substitui a entrega anterior. Mantém a migração e simplifica o código acrescentado para facilitar a leitura e o estudo.

## O que foi simplificado

- `src/components/Header.jsx`: usa `useState` e as funções nomeadas `alternarMenu` e `fecharMenu`. Retirados `useRef` e o `useEffect` do cabeçalho. O fechamento por Escape e clique fora fica nas funções comuns do site.
- `src/components/cadastro/Cadastro.jsx`: retirados `useRef`, `useRouter`, o objeto de estado com todos os campos e a atualização com propriedades calculadas. Os valores dos campos comuns são lidos diretamente do formulário. Senha e confirmação usam estados separados. Foto, habilidades, mensagens e validações continuam funcionando. As ações de foto e teclado foram separadas em funções nomeadas. A remoção de habilidades usa um `for`.
- `src/lib/devnest.js`: reescrito com funções em português, `for`, `if/else`, seletores explícitos e atribuições diretas como `onclick`, `onsubmit` e `oninput`. Retirados os apelidos `$`/`$$`, a função intermediária de registro de eventos e a lista de funções de limpeza. A preparação e a limpeza da página são funções diretas: `iniciarPagina` e `limparPagina`.
- `src/components/Comportamentos.jsx`: substitui `DevNestRuntime.jsx`. Tem comentários explicando `useEffect`, `usePathname` e a preparação da página. Os estilos específicos do corpo são aplicados com atribuições simples.
- `src/app/layout.js`: passa a importar `Comportamentos`.
- Componentes `Sobre`, `Projetos`, `Projeto`, `Proposta`, `MinhasPropostas`, `Perfil`, `Contrato` e `ContratoFechado`: textos estáticos agora aparecem diretamente no JSX, com indentação organizada, sem expressões de texto desnecessárias.
- Login, cadastro e proposta usam `window.location.href` para os redirecionamentos, como o JavaScript original. Isso recarrega a página ao abrir o destino.
- `GUIA-CODIGO.md`: novo guia com os conceitos usados e uma ordem sugerida de leitura.

Continuam existindo dois usos de `useEffect`: um em `Comportamentos`, para preparar cada página depois que ela aparece, e outro no Cadastro, para o redirecionamento após sucesso. `useState` já fazia parte do projeto e foi mantido. Recursos como JSON, armazenamento do navegador e FileReader foram mantidos porque faziam parte das funcionalidades originais.

## Correção encontrada na revisão

A entrega anterior preservou por engano o arquivo antigo `src/app/(complete)/sobre/page.jsx`, que importava Cadastro e mostrava somente um título “Cadastro”. A rota agora importa e renderiza `Sobre` corretamente. O conteúdo da página foi conferido no navegador depois da correção.

## Migração mantida

Foram mantidas as oito páginas completadas: Sobre, Projetos, Projeto, Proposta, Minhas Propostas, Perfil, Contrato e Contrato Fechado. Sete rotas que faltavam continuam presentes; a rota Sobre já existia e teve a ligação corrigida.

| Rotas | Cabeçalho | Rodapé |
| --- | --- | --- |
| `/` | Header | Footer completo |
| `/sobre`, `/projetos`, `/projeto`, `/proposta` | Header do layout complete | Footer completo |
| `/mpropostas` | Header na página | FooterSimple |
| `/perfil` | Cabeçalho próprio do perfil | FooterSimple |
| `/contrato`, `/contratofechado` | Sem Header | FooterSimple |
| `/login` | Sem Header | Sem rodapé |
| `/cadastro` | Um Header | Sem rodapé |

Os layouts `simple` e `complete` mantêm os componentes anteriores. O ajuste de `display: contents` no elemento que envolve o conteúdo foi mantido para preservar as medidas do layout HTML original. O cadastro continua com um único cabeçalho e o botão de cadastro da Home aponta para `/cadastro`.

Os 15 cards originais, inclusive os repetidos, foram mantidos. Em `projeto.html`, o trecho solto depois do primeiro `</html>` continua somente no arquivo de referência, sem duplicação da página React.

## Arquivos preservados

Comparação byte a byte com `DevNest-main-2 3.zip` confirma que não foram alterados:

- HTMLs originais.
- `css/style.css` e `src/app/globals.css`.
- `js/script.js`.
- Todos os arquivos de `public/`, incluindo imagens e vídeos.
- `package.json` e `package-lock.json`.
- `Footer.jsx`, `FooterSimple.jsx` e `Login.jsx`.

Não foram adicionadas bibliotecas ao projeto.

## Verificações desta versão

- Compilação de produção aprovada, com as 11 rotas.
- ESLint sem erros; 16 avisos sobre imagens `<img>` e redirecionamentos simples, incluindo os avisos do script original preservado.
- Oito páginas completadas comparadas com o HTML original na mesma largura: textos, largura e altura do conteúdo principal iguais.
- Filtro Dados mostra dois cards; a seleção de Dashboard preenche os detalhes e o cliente da proposta.
- Envio válido da proposta abre Minhas Propostas; o contrato fica sem destino até marcar o aceite e depois abre a confirmação.
- Login com mostrar senha e redirecionamento ao Perfil.
- Cadastro: obrigatórios, confirmação de senha, habilidades por Enter e saída do campo, Backspace, remoção, seleção de foto e prévia, sucesso e redirecionamento.
- Dúvidas: aviso de envio e limpeza dos campos.
- Tema persistido após navegação por link Next.js, com um único controle de tema.
- Onze rotas verificadas a 390 px, sem rolagem horizontal e com os cabeçalhos/rodapés previstos. Menus comum e do perfil testados com Escape.

O build também apresenta um aviso sobre um arquivo de versões fora do projeto, na pasta pessoal da máquina de teste. A configuração do projeto não foi alterada por causa desse aviso externo.

As funcionalidades continuam sendo demonstrações locais, conforme o original. Não foram criados banco de dados, autenticação real, envio de email ou persistência de propostas. Os textos e valores fixos de propostas e contratos foram preservados.

Para executar na pasta `DevNest-main-2`: `npm ci` e `npm run dev`. Para produção: `npm run build` e `npm start`.

O ZIP contém os fontes, este resumo em `MIGRACAO.md` e o guia em `GUIA-CODIGO.md`. Não inclui `node_modules`, `.next` nem metadados auxiliares do macOS.
