# Project - React Desing System

<h4 align="center"> 
    Esse projeto foi desenvolvido com objetivo de aprender e praticar um pouco da ferramenta poderosa <strong><span>Storybook</span></strong>, que possibilita o desenvolvimento de componentes diretamente no seu sistema. 
    Ela funciona com qualquer estrutura de front-end moderna.

    Com essa ferramenta, também é possivel efetuar testes e criar documentação poderosa de toda nosa aplicação.

</h4>

<h2>Conceitos Principais</h2>

- Stories

  - Uma história captura o estado renderizado de um componente de UI. Cada componente pode ter múltiplas histórias, onde cada história descreve um estado diferente do componente.
    [Documents stories](https://storybook.js.org/docs/writing-stories)

- Docs

  - O Storybook pode analisar seus componentes para criar documentação automaticamente junto com suas histórias. Essa documentação automática facilita a criação de diretrizes de uso da biblioteca de UI, design de sites de sistema e muito mais.
    [Documents doc](https://storybook.js.org/docs/writing-docs)

- Testing

  - As histórias são um ponto de partida pragmático para sua estratégia de teste de IU. Você já escreve histórias como uma parte natural do desenvolvimento da IU, portanto, testar essas histórias é uma maneira fácil de evitar bugs na IU ao longo do tempo.
    [Documents testing](https://storybook.js.org/docs/writing-tests)

- Sharing
  - Publicar o seu Storybook permite-lhe partilhar o seu trabalho com outras pessoas. Você também pode incorporar suas histórias em lugares como Notion ou Figma.
    [Documents sharing](https://storybook.js.org/docs/sharing)

## Instalar o storybook

Você pode instalar o Storybook em um projeto existente ou criar um novo do zero.

`npx storybook@latest init`

[Guia de instalação](https://storybook.js.org/docs/get-started/install)

Segue a lista de aplicativos que você pode instalar:

- [NEXTJS](https://storybook.js.org/docs/get-started/nextjs)
- [REACT with Vite](https://storybook.js.org/docs/get-started/react-vite)
- [REACT with Webpack](https://storybook.js.org/docs/get-started/react-webpack5)
- [REACT Native](https://github.com/storybookjs/react-native)
- [Vue with Vite](https://storybook.js.org/docs/get-started/vue3-vite)
- [Vue with Webpack](https://storybook.js.org/docs/get-started/vue3-webpack5)
- [Angular](https://storybook.js.org/docs/get-started/angular)
- [SvelteKit](https://storybook.js.org/docs/get-started/sveltekit)
- [Svelte with Vite](https://storybook.js.org/docs/get-started/svelte-vite)
- [Svelte with Webpack](https://storybook.js.org/docs/get-started/svelte-webpack5)
- [Web Components with Vite ](https://storybook.js.org/docs/get-started/web-components-vite)
- [Web Components with Webpack ](https://storybook.js.org/docs/get-started/web-components-webpack5)

### Nesse projeto além do STORYBOOK eu também inclui:

- [React](https://react.dev/learn/installation) - React é uma poderosa biblioteca JavaScript para construção de interfaces de usuário interativas, baseada em componentes e focada em performance.
- [Vite](https://vitejs.dev/) - Vite é uma ferramenta de desenvolvimento de aplicações web modernas conhecida por sua velocidade, eficiência e integração suave com frameworks populares, permitindo aos desenvolvedores uma experiência de desenvolvimento mais produtiva e fluida.
- [TailwindCss](https://tailwindcss.com/docs/installation) - Tailwind CSS é uma biblioteca de classes CSS que simplifica o processo de estilização de interfaces de usuário.
- [Radix-ui](https://www.radix-ui.com/) - Para todos compponentes.
- [Radix-ui/slot](https://www.radix-ui.com/primitives/docs/utilities/slot) - Com esse cara é possivel fazer os nossos elementos HTML serem dinamicos.
- [Phosphor](https://www.npmjs.com/package/phosphor-react) - Esse pacote inclui apnes código de icone.
- [PostCss](https://www.npmjs.com/package/postcss) - PostCss funciona através de plugins e converte CSS moderno em algo que a maioria dos navegadores pode entender e no suporte de propriedades para aplicação de prefixos.

### Como instalar o projeto

1. Baixar o projeto `git clone git@github.com:flavioanalistadesistema/ReactDesingSystem.git`
2. No terminal digite `npm install` para fazer a instalação de todos os plugins
3. Em seguida digite `npm run dev` para iniciar o projeto
4. Em outra aba do terminal digite `npm run storybook` esse comando iniciará o servidor de desenvolvimento local

<h4>Servidor de desenvolvimento - STORYBOOK</h4>

![Painel - Storybook](https://storybook.js.org/765b232174a943f0e7c5f7507846d083/example-onboarding-wizard.png)
