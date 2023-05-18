import { IProjetos } from "../TypesProjects/TypesProjects"


export const InsertedProjects: IProjetos = [
  {
    title: 'SADES (IFRN)',
    description: "Projeto em desenvolvimento destinado a competição anual dos Institutos Federais chamada SEMADEC",
    data: '2022-andamento',
    technologies: 'ReactJs/NextJs, Tailwind, TypeScript, Redux, Figma, Jest, StoryBook, Framer Motion',
    imageThumb: '/thumb/project-12.png',
    projectCategory: 'ReactJs',
    linkSITE: 'https://sades.vercel.app/', 
    images: [
      '/large/project-12/1.png',
      '/large/project-12/2.png',
      '/large/project-12/3.png',
      '/large/project-12/4.png',
    ]
  },
  {
    title: 'ZanardiEmpreendimentos',
    description: `Este projeto em ReactJS consiste em várias páginas e uma delas é dedicada para pesquisa por categoria de imóveis. O usuário pode selecionar características específicas do imóvel e os resultados da pesquisa são obtidos através de uma API REST. Para gerenciar os valores de pesquisa em um estado global, o projeto utiliza o Redux. Dessa forma, mesmo em outras páginas, o usuário pode fazer uma pesquisa simples através de um componente presente em todas as páginas.
    Além disso, o projeto utiliza conceitos de Princípio de Responsabilidade Única para garantir que cada componente ou módulo do projeto tenha uma única responsabilidade. Isso ajuda a manter o código mais organizado, fácil de entender e manter. Com esses princípios aplicados, o projeto se torna mais escalável e sustentável no longo prazo.`,
    projectCategory: 'ReactJs',
    client: 'WebSocorro',
    data: '2023',
    technologies: 'ReactJs, NextJs, sass, redux, typescript',
    imageThumb: '/thumb/project-11.png',
    linkSITE: 'https://www.zanardiempreendimentos.com.br',
    images: [
      '/large/project-11/1.png',
      '/large/project-11/2.png',
      '/large/project-11/3.png',
      '/large/project-11/4.png',
      '/large/project-11/5.png',
    ]
  },
  {
    title: 'LPS WebSocorro',
    description: 'Este projeto foi desenvolvido na empresa WebSocorro, no qual trabalhei com a semântica html, otimização de imagens, organização de código e responsividade',
    projectCategory: 'ReactJs',
    client: 'WebSocorro',
    data: '2022',
    technologies: 'Html,css,js',
    imageThumb: '/thumb/project-10.png',
    images: [
      '/large/project-10/1.png'
    ]
  },
  {
    title: 'LPS Pousada',
    description: 'Este projeto foi desenvolvido na empresa WebSocorro, no qual trabalhei com a semântica html, otimização de imagens, organização de código e responsividade',
    projectCategory: 'ReactJs',
    client: 'WebSocorro',
    data: '2022',
    technologies: 'Html,css,js',
    imageThumb: '/thumb/project-7.png',
    images: [
      '/large/project-7/1.png',
      '/large/project-7/2.png',
      '/large/project-7/3.png'
    ]
  },
  {
    title: 'LPS Jardim Pompeia',
    description: 'Este projeto foi desenvolvido na empresa WebSocorro, no qual trabalhei com a semântica html, otimização de imagens, organização de código e responsividade',
    projectCategory: 'ReactJs',
    client: 'WebSocorro',
    data: '2022',
    linkSITE: 'https://www.jardimpompeia.com.br',
    technologies: 'ReactJs, NextJs, tailwind, sass',
    imageThumb: '/thumb/project-8.png',
    images: [
      '/large/project-8/1.png'
    ]
  },
  {
    title: 'LPS pousada hotel',
    description: 'Este projeto foi desenvolvido na empresa WebSocorro, no qual trabalhei com a semântica html, otimização de imagens, organização de código e responsividade',
    projectCategory: 'ReactJs',
    client: 'WebSocorro',
    data: '2022',
    linkSITE: 'https://test-job-mu.vercel.app/',
    technologies: 'ReactJs, NextJs, Typescript,Framer Motion, Tailwind',
    imageThumb: '/thumb/project-9.png',
    images: [
      '/large/project-9/1.png',
      '/large/project-9/2.png',
    ]
  },
  {
    title: 'App De Banco',
    description: 'Este projeto (em desenvolvimento) é baseado em um app comum de banco, no qual terá funções de transferência de dinheiro, rede de amigos para fazer as transferências, histórico de ações, cartões de crédito, entre outras, que já foram adicionadas ou que serão adicionadas aos poucos. todos os dados virão através de um login com next-auth(GITHUB), no caso do saldo da conta, será pego o total de projetos, multiplicado por certo algum numero fixo e transformado em dinheiro a ser usado na conta.',
    projectCategory: 'ReactJs',
    data: '2022',
    linkGIT: 'https://github.com/aldcejam/App-Bank',
    technologies: 'React, NextJs, Tailwind, TypeScript',
    imageThumb: '/thumb/project-3.png',
    images: [
      '/large/project-3/1.png',
      '/large/project-3/2.png',
    ]
  },
  {
    title: 'DTMoney',
    description: 'Este projeto tem a função de fazer transações com a escolha de adicionar e remover através de algum produto comprado ou vendido, usando essas escolhas o saldo total da conta será alterado.',
    projectCategory: 'ReactJs',
    data: '2022',
    linkGIT: 'https://project-web-construction.vercel.app/',
    technologies: 'React, typescript, styled-components, miragejs,axios',
    imageThumb: '/thumb/project-1.png',
    images: [
      '/large/project-1/1.png',
      '/large/project-1/2.png',
      '/large/project-1/3.png'
    ]
  },
  {
    title: 'Carrinho De Compras',
    description: 'Este projeto consiste em um carrinho de compras para uma loja virtual, nele o usuário poderá adicionar um novo item ao carrinho, dentro do mesmo ele poderá adicionar ou remover uma unidade da quantidade total do produto já adicionado, claro, sempre respeitando a quantidade delimitada no estoque, que por sua vez foi feita com jsonServer. Além disso o usuário poderá remover por completo um produto. Por fim, cada produto com sua respectiva quantidade terá seu valor somado e acrescentado no valor total do carrinho',
    projectCategory: 'ReactJs',
    data: '2021',
    client: 'Websocorro',
    linkGIT: 'https://github.com/aldcejam/-shopping-Cart',
    technologies: 'React, styled-components, toastify, jsonServer, axios',
    imageThumb: '/thumb/project-2.png',
    images: [
      '/large/project-2/1.png',
      '/large/project-2/2.png',
    ]
  },
  {
    title: 'Catálogo De Filmes',
    description: 'Este projeto consiste em listar filmes de acordo com sua categoria, estes filmes serão consumidos de um json(json-server)',
    projectCategory: 'ReactJs',
    data: '2021',
    linkGIT: 'https://github.com/aldcejam/movies-repository',
    technologies: 'react, styled-components',
    imageThumb: '/thumb/project-4.png',
    images: [
      '/large/project-4/1.png',
      '/large/project-4/2.png',
      '/large/project-4/3.png',
      '/large/project-4/4.png'
    ]
  },
  {
    title: 'Ignews',
    description: 'Este projeto consiste no acesso de um usuário a uma plataforma paga, ele entrará com sua conta do github e poderá assinar a plataforma com o stripe, seus dados de situação quanto a assinatura estarão salvas no banco fauna. Com essa inscrição feita, o usuário terá acesso a conteúdos exclusivos',
    projectCategory: 'ReactJs',
    data: '2022',
    linkGIT: 'https://github.com/aldcejam/Ig.news',
    technologies: 'React, NextJs, Sass, TypeScript, Stripe, Axios, FaunaDb, Prismic',
    imageThumb: '/thumb/project-5.png',
    images: [
      '/large/project-5/1.png'
    ]
  },
  {
    title: 'Portfolio',
    description: 'para exposição de trabalho',
    projectCategory: 'ReactJs',
    data: '2022',
    linkGIT: '#',
    technologies: 'React, NextJs, TypeScript, material-ui',
    imageThumb: '/thumb/project-6.png',
    images: [
      '/large/project-6/1.png',
      '/large/project-6/2.png'
    ]
  },



]