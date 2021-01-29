# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- utilizar Mailtrap para testa envios em ambiente de desenvolvimento;
- utilizar Amazom SES para envios em produção;
- o envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2 h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- o usuário deve poder atualizar seu nome, e-mail e senha;

**RN**

- o usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuárui precisa confirmar a nova senha;

# Painel do prestador

**RF**

- o usuário deve poder listar agendamentos de um dia específico;
- o prestador deve receber uma notificação sempre que houver um novo agendamento;
- o prestador deve poder visualizar as notificações não lidas;

**RNF**

- os agendamentos do prestador no dia devem ser armazenados em cache;
- as notificações do prestador devem ser armazenadas no MongoDB;
- as notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**

- a notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- o usuário deve poder listar todos prestadores de serviço cadastrados;
- o usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- o usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- o usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- o usuário não pode agendar em um horário que já passou;
- o usuário não pode agendar serviços consigo mesmo;
