import { isValidPhoneNumber } from '../../src/helpers/validatePhoneNumber';

describe('Validação de números de telefone', () => {
  it('Deve retornar true para números válidos no formato E.164', () => {
    expect(isValidPhoneNumber('+5511999998888')).toBe(true);
  });

  it('Deve retornar false para números inválidos', () => {
    expect(isValidPhoneNumber('11999998888')).toBe(false);
    expect(isValidPhoneNumber('+55abc')).toBe(false);
    expect(isValidPhoneNumber('+')).toBe(false);
  });
});
