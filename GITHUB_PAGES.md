# Supreme Clube — publicação full-stack

O projeto agora usa o scaffold WebDev `web-db-user`, com React/Vite no frontend, Express/tRPC no backend, autenticação Manus e File Storage S3 gerenciado. A landing page continua pública e os CTAs seguem apontando diretamente para os WhatsApps do clube.

## Publicação recomendada

Use o projeto no domínio WebDev, porque o vídeo depende do endpoint `/manus-storage/...` servido pelo backend:

```text
https://supremeclub-7n5udoqn.manus.space
```

O vídeo da seção de apresentação está armazenado no File Storage e é servido por:

```text
/manus-storage/supreme-clube-instagram-video-dh-bt2_baec5ea8.mp4
```

Não é necessário manter o vídeo dentro de `client/public/assets` nem enviar uma cópia dele ao GitHub.

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

Para validar antes de publicar:

```bash
pnpm test
pnpm check
pnpm build
```

## File Storage

Para enviar um novo arquivo ao armazenamento gerenciado:

```bash
manus-upload-file --webdev /caminho/para/arquivo.ext
```

Use o Storage Path retornado (`/manus-storage/...`) na aplicação. Para uploads feitos por uma funcionalidade do próprio site, utilize `storagePut()` em `server/storage.ts` no backend. Os bytes devem ficar no S3; o banco deve guardar apenas metadados e o `key`, quando houver necessidade de persistência.

Consulte [`WEBDEV_STORAGE.md`](./WEBDEV_STORAGE.md) para o fluxo detalhado.

## GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` permanece como alternativa para uma versão estática do frontend. Ele não executa o backend Express nem disponibiliza o File Storage; portanto, não deve ser usado como destino da versão full-stack com vídeo armazenado.

A base `/pulseads-supremeclube/`, o favicon circular, o mapa público e a compatibilidade visual com a versão anterior foram preservados no frontend.
