import { sendSMS } from './services/snsService';
import logger from './services/loggerService';

const run = async () => {
  const phoneNumber = '+5511999998888'; 
  const message = 'Teste de mensagem...';

  try {
    const messageId = await sendSMS(phoneNumber, message);
    logger.info(`Mensagem enviada com ID: ${messageId}`);
  } catch (error) {
    logger.error(`Erro: ${error}`);
  }
};

run();
