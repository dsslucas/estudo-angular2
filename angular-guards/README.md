# Angular Guards

Nos permite controlar a acessibilidade de uma rota com base nas condições estabelecidas. Controla o acesso, autorizando ou negando entradas.

Particularidades:
- Muito utilizado para autenticações por login (bancos, redes sociais, etc)
- "Você deseja sair? Salve aqui antes", etc etc

## Tipos
- CanActivate: decide se uma rota pode ser ativada (a exemplo de login)
- CanDesactivate: decide se o usuário pode navegar para longe de uma rota, verificando possíveis pendências
- CanLoad: verifica se pode ou não carregar o módulo específico (comumente usado em Lazy Loading)
- CanActivateChild: semelhante para o CanActivate, mas para rotas aninhadas