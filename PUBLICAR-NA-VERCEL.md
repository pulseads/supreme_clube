# Publicar o Supreme Clube na Vercel

Este pacote parte de `supreme-clube-landing-ultima-versao.zip` e preserva seu layout e conteúdo. As alterações se concentram na publicação na Vercel.

## Como atualizar seu projeto existente

1. Extraia o ZIP e abra a pasta `supreme-clube-vercel`.
2. Atualize o repositório Git que está conectado à Vercel com os arquivos dessa pasta. Preserve as subpastas. `package.json` e `vercel.json` devem ficar juntos na raiz do projeto; evite criar uma pasta extra dentro do repositório sem ajustar a configuração abaixo.
3. Na Vercel, abra o projeto e vá a **Settings → Build and Deployment**. Confira:

| Configuração | Valor |
| --- | --- |
| Root Directory | Pasta que contém `package.json` e `vercel.json`. Deixe a raiz se eles estiverem na raiz do repositório. Não use `client` nem `dist/public`. |
| Framework Preset | Vite |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm run build:vercel` |
| Output Directory | `dist/public` |
| Node.js Version | 22.x |

O `vercel.json` já declara os comandos e a pasta de saída. Remova configurações antigas conflitantes no painel, caso existam.

4. Salve as alterações no Git. A integração deverá iniciar uma nova publicação. Se precisar usar **Redeploy**, selecione o deployment do commit com os arquivos corrigidos; republicar um commit antigo não inclui a correção.
5. Quando aparecer **Ready**, abra o domínio de **Production**, disponível em **Settings → Domains**, e confira também em uma janela anônima. O link de preview enviado nesta conversa redirecionou para o login da Vercel; isso limita a verificação externa e é separado do erro da aplicação.

Não é necessário preencher chaves da Manus, banco de dados ou login para esta landing page estática. O agendamento continua pelos contatos de WhatsApp existentes.

## O que foi ajustado

- `vercel.json`: define Vite, instalação, compilação, pasta publicada, rota `/404` e dois cabeçalhos básicos.
- `vite.vercel.config.ts`: configuração específica para Vercel, com arquivos acessíveis a partir da raiz do domínio e sem os plugins internos da Manus.
- `client/src/main.vercel.tsx`: entrada da página pública sem clientes de API e autenticação da Manus. A entrada original permanece disponível para a configuração original.
- `package.json`: acrescenta `build:vercel` e fixa Node 22.x para a hospedagem.
- `client/src/pages/Home.tsx`: passa a buscar o vídeo em um arquivo local.
- `client/public/assets/supreme-clube-instagram-video-dh-bt2.mp4`: vídeo recuperado do material anterior fornecido pelo usuário. O ZIP mais recente não incluía esse vídeo e dependia da rota `/manus-storage/`, atendida pelo servidor original.
- Na compilação para Vercel, remove o endereço antigo do GitHub Pages dos metadados de compartilhamento e da URL canônica.

## Endereço definitivo para SEO

Quando o domínio público definitivo estiver confirmado, adicione na Vercel a variável `SITE_URL` com o endereço completo, como `https://seu-dominio.com.br/`, e publique novamente. Ela é opcional para o funcionamento e serve para gerar a URL canônica e a imagem de compartilhamento com endereço absoluto. Não use a URL temporária de um deployment como endereço definitivo.

## Limites da verificação

O link enviado redirecionou para autenticação da Vercel. Sem acessar a aplicação publicada ou seus registros de erro, não foi possível comprovar a causa exata da página branca no deployment anterior. Os ajustes corrigem incompatibilidades encontradas no ZIP e a versão resultante foi verificada localmente; a publicação remota ainda precisa ser feita no repositório do usuário.

Se continuar aparecendo uma página branca após publicar o novo commit, envie o endereço público de Production e a mensagem de erro do navegador. Se o deployment falhar antes de ficar Ready, envie a parte final de **Build Logs**.

## Referências

- Vite na Vercel: https://vercel.com/docs/frameworks/frontend/vite
- Configuração de projeto: https://vercel.com/docs/project-configuration
- Autenticação de deployments: https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/vercel-authentication
