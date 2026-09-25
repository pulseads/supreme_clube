# Supreme Clube — File Storage e publicação full-stack

A landing page agora usa o projeto WebDev `web-db-user`, com servidor Express, tRPC, autenticação Manus e helpers S3 pré-configurados. O vídeo da experiência não fica mais no repositório: ele foi enviado para o File Storage gerenciado.

## Arquivo armazenado

O vídeo usado na seção “O cuidado acontece aqui” está referenciado por:

```text
/manus-storage/supreme-clube-instagram-video-dh-bt2_baec5ea8.mp4
```

O servidor full-stack expõe esse caminho por meio do proxy de armazenamento. A Home usa a URL diretamente no elemento `<video>`, mantendo `controls`, poster, reprodução iniciada pelo visitante e áudio.

## Como adicionar outro arquivo

Coloque o original fora do repositório e envie-o com:

```bash
manus-upload-file --webdev /caminho/para/arquivo.ext
```

O comando retorna um Storage Path `/manus-storage/...`. Use esse caminho na aplicação. Para uploads feitos pela própria aplicação, use `storagePut()` em `server/storage.ts` a partir do backend; não grave bytes de arquivos no banco de dados.

## Executar e publicar

A versão full-stack deve ser executada pelo servidor WebDev:

```bash
pnpm install
pnpm dev
```

O domínio disponibilizado para esta sessão é:

```text
https://supremeclub-7n5udoqn.manus.space
```

Também é possível validar o build com:

```bash
pnpm check
pnpm build
```

## GitHub Pages

O GitHub Pages continua adequado apenas para uma versão estática. Como `/manus-storage/...` depende do servidor WebDev, a versão full-stack com vídeo armazenado deve ser publicada no domínio WebDev. Não remova o arquivo do File Storage: o caminho não é substituído por uma cópia local.
