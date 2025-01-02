/**
 * Valida se o número de telefone está no formato E.164.
 * @param phoneNumber - Número de telefone a ser validado
 * @returns boolean - True se for válido, False caso contrário
 */
export const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const e164Regex = /^\+[1-9]\d{1,14}$/;
    return e164Regex.test(phoneNumber);
  };
  