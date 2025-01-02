import AWS from 'aws-sdk';
import dotenv from 'dotenv';

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
    const params = {
        Message: message,
        PhoneNumber: phoneNumber,
    };

    try {
        const result = await sns.publish(params).promise();
        console.log(`Mensagem enviada ID: ${result.MessageId}`);

        return result.MessageId!;
    } catch(error){
        console.error('Erro ao enviar mensagem: ', error);
        throw error;
    }
};