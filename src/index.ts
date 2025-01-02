import { sendSMS } from './services/snsService';

const run = async () => {
  const phoneNumber = '+5511999998888'; 
  const message = 'Teste de mensagem...';

  try {
    const messageId = await sendSMS(phoneNumber, message);
    console.log(`Mensagem enviada com ID: ${messageId}`);
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
  }
};

run();
