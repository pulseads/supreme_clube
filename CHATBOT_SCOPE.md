# Supreme Clube — escopo do chatbot seguro

## Decisão de produto

O assistente do site é um **orientador leve, sem IA**, aberto somente quando o visitante solicita. Ele apresenta menus curtos, esclarece o próximo passo e encaminha o visitante para o WhatsApp correto. Não tenta substituir a equipe do Supreme Clube.

## Comparação de abordagens

| Critério | Orientador sem IA | Chat conversacional com LLM |
|---|---|---|
| Precisão sobre serviços e políticas | Alta, porque as opções são pré-definidas | Variável; depende de uma base de conhecimento atualizada |
| Risco de inventar preço, horário ou disponibilidade | Baixo | Maior sem RAG, validação e guardrails |
| Privacidade | Não coleta conversa livre nem dados sensíveis | Exige política de retenção, tratamento de prompts e revisão de dados |
| Manutenção | Atualização simples de textos e links | Requer avaliação de respostas, prompts, observabilidade e fallback |
| Conversão | Direta: menu → WhatsApp | Pode gerar mais diálogo, mas adiciona fricção antes do contato |
| Custo e desempenho | Leve e adequado para uma landing page | Mais pesado, com chamadas de modelo e possíveis falhas de rede |
|

A versão sem IA foi escolhida porque o objetivo principal é conversão por WhatsApp, a equipe precisa confirmar agenda e preço, e o site não deve prometer disponibilidade em tempo real.

## Matriz de escopo

| Tópico | O que o site pode informar | Comportamento obrigatório |
|---|---|---|
| Serviços automotivos | Categorias apresentadas na landing page, como lavagem, acabamento, proteção e detailing | Não estimar preço, duração ou disponibilidade; encaminhar para o WhatsApp automotivo |
| Barbearia | Existência da barbearia e botão de agendamento | Encaminhar somente para o WhatsApp da barbearia `+55 27 99887-3746` |
| Horários | Não exibir horário inventado ou desatualizado | Pedir que o visitante confirme diretamente com a equipe pelo WhatsApp |
| Localização | Endereço, mapa público e link de rota | Oferecer rota e, se necessário, encaminhar para o WhatsApp |
| Agendamento | Explicar que é necessário falar com a equipe antes de ir ao local | Abrir o WhatsApp correspondente com mensagem contextual |
| Preços | Nenhum preço é informado pelo chatbot | Sempre redirecionar para atendimento humano/WhatsApp |
| Dúvidas gerais | Orientações curtas e links disponíveis na página | Se a resposta não estiver no menu, encaminhar para a equipe |

O chatbot não coleta CPF, cartão, documentos, dados médicos, localização precisa ou qualquer informação sensível. O visitante decide quando abrir o WhatsApp e quais dados compartilhar com a equipe.

## Métricas de sucesso

A implantação deve acompanhar, sem registrar conteúdo sensível da conversa:

1. **Taxa de abertura:** sessões em que o visitante abre o assistente dividido pelas sessões da landing page.
2. **Taxa de clique para WhatsApp:** cliques nos CTAs do assistente dividido pelas aberturas.
3. **Distribuição por intenção:** proporção de cliques para automotivo, barbearia, localização e dúvidas.
4. **Abandono do assistente:** aberturas sem clique em um CTA de saída.
5. **Erros de encaminhamento:** links inválidos, bloqueios ou páginas de destino indisponíveis.
6. **Conversão final, quando disponível:** agendamentos confirmados pela equipe, medidos fora do chatbot e sem presumir que todo clique virou reserva.

## Checklist de implantação

- [x] Ícone discreto, acessível por teclado e aberto somente sob solicitação.
- [x] Fluxos automotivo e barbearia separados.
- [x] Link automotivo conferido: `+55 27 99297-7721`.
- [x] Link de barbearia conferido: `+55 27 99887-3746`.
- [x] Localização com endereço, rota e mapa público.
- [x] Preços, disponibilidade e horários não inventados.
- [x] Fallback para atendimento humano pelo WhatsApp.
- [x] Nenhuma coleta de dados sensíveis.
- [x] Estados de fechar, voltar e Escape verificados.
- [x] Teste mobile e desktop executados.
- [ ] Medir as métricas com uma ferramenta de analytics escolhida pelo proprietário após a publicação.
- [ ] Revisar textos, serviços e links com a equipe do Supreme Clube antes de uma campanha paga.

As duas últimas tarefas dependem de decisões e acesso do proprietário após a publicação; não são pré-requisitos para o funcionamento seguro do componente.
