# Divisor de Fatura

App para dividir a fatura do cartão entre duas ou mais pessoas. Roda offline, guarda tudo no
próprio aparelho e não envia nada para lugar nenhum.

Já vem com os **158 lançamentos da fatura de julho/26** carregados e prontos para classificar.

---

## Instalar agora, sem gerar APK

Se você só quer usar hoje:

1. Suba a pasta num GitHub Pages (ou qualquer hospedagem estática).
2. Abra o endereço no Chrome do celular.
3. Menu ⋮ → **Instalar app** (ou *Adicionar à tela inicial*).

Vira ícone na tela inicial, abre em tela cheia e funciona sem internet.

> Abrir o `index.html` direto do arquivo (`file://`) até funciona, mas o Android costuma
> bloquear o armazenamento nesse modo, e aí as marcações se perdem ao fechar. Hospede.

---

## Gerar o .apk

O APK sai do **PWABuilder**, que empacota o PWA num app Android assinado (Trusted Web Activity).
É o mesmo mecanismo que o Google recomenda e é gratuito.

**1. Hospedar** (uma vez só)

- Crie um repositório público no GitHub, por exemplo `divisor-fatura`.
- Suba `index.html`, `manifest.webmanifest`, `sw.js` e a pasta `icons/` na raiz.
- Settings → Pages → Source: `main` / raiz → Save.
- Em um ou dois minutos você tem `https://SEU-USUARIO.github.io/divisor-fatura/`.

**2. Empacotar**

- Abra `https://www.pwabuilder.com` e cole esse endereço.
- Ele analisa o manifest e o service worker. Os dois já estão prontos aqui, então deve passar direto.
- Clique em **Package for stores** → **Android**.
- Marque a opção de app autônomo, sem vínculo com a Play Store, se você não vai publicar.
- Baixe o `.zip`. Dentro vem `app-release-signed.apk` e a chave de assinatura.

**3. Instalar**

- Passe o `.apk` para o celular.
- Nas configurações do Android, autorize o gerenciador de arquivos a instalar apps desconhecidos.
- Toque no arquivo e instale.

**Guarde a chave de assinatura** que vem no zip (`signing.keystore` e a senha). Sem ela você não
consegue publicar atualizações por cima da versão instalada — teria que desinstalar e perder os dados.
Antes de qualquer reinstalação, use **Configurar › Baixar backup**.

---

## O que o app faz

**Atribuir** — toque no nome da pessoa para marcar, toque de novo para desmarcar. Dois ou mais
nomes acesos dividem o valor em partes iguais. Vale no estabelecimento inteiro ou em cada
lançamento (abra o grupo e ajuste só o que destoa).

**Regras** — o que você define no estabelecimento vira regra permanente e volta pronta na
próxima fatura importada. É isso que faz o segundo mês levar minutos.

**Pessoas** — em Configurar você adiciona quantas quiser. Sua mãe entra como mais um nome nos
botões, e um gasto pode ser dividido entre três, quatro, quantas pessoas forem.

**Cartões e faturas** — cada cartão tem um pagador, e é para ele que os outros transferem. Cada
fatura pertence a um cartão. O seletor no topo troca entre elas.

**Importar** — Configurar › Nova fatura › colar lançamentos. Aceita o texto copiado do app do
banco (data numa linha, estabelecimento noutra, valor noutra) e também uma linha por gasto:

```
03/07 | Padaria Sandri | 35,98 | 
09/07 | Arcos Dourados | 44,65 | 1/2
```

Sempre aparece uma tela de conferência antes de importar, para corrigir o que a leitura entendeu torto.

**Exportar** — escolha quem entra (uma pessoa, várias, ou os pendentes), o escopo (fatura aberta
ou todas) e o formato:

- **CSV** — uma linha por pessoa por lançamento, com o valor já dividido. Abre em planilha e
  pivota direto.
- **Texto** — resumo agrupado por pessoa e estabelecimento, pronto para colar no chat.

**Backup** — Configurar › Baixar backup gera um `.json` com tudo. Restaurar recupera em qualquer
aparelho. Faça isso antes de trocar de celular ou reinstalar o app.
