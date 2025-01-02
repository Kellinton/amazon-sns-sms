import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import { isValidPhoneNumber } from '../helpers/validatePhoneNumber';
import logger from './loggerService';

dotenv.config();

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;


const sns = new AWS.SNS({ 
    region,
    secretAccessKey, 
    accessKeyId 
});

/**
 * Envia uma mensagem SMS usando o Amazon SNS.
 * @param phoneNumber - Número de telefone no formato E.164 ex: +5511999998888
 * @param message - Mensagem
 * @returns Promise<string> - ID da mensagem enviada
 */

export const sendSMS = async (phoneNumber: string, message: string): Promise<string> => {
    if(!isValidPhoneNumber(phoneNumber)){
        throw new Error('O número não está no formato E.164');
    }

    const params = {
        Message: message,
        PhoneNumber: phoneNumber,
    };

    try {
        logger.info(`Enviando mensagem para ${phoneNumber}`);
        const result = await sns.publish(params).promise();
        logger.info(`Mensagem enviada ID: ${result.MessageId}`);

        return result.MessageId!;
    } catch(error){
        logger.error(`Erro ao enviar mensagem para ${phoneNumber}: ${error}`);
        throw error;
    }
};