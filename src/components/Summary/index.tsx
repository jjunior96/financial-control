import Image from 'next/image';
import * as S from './styles';

const Summary = () => {
  return (
    <S.Container>
      <S.Card>
        <header>
          <p>Entradas</p>
          <Image
            src="/assets/income.svg"
            width="28"
            height="28"
            alt="Entradas "
          />
        </header>
        <strong>R$ 1000,00</strong>
      </S.Card>

      <S.Card>
        <header>
          <p>Saídas</p>
          <Image
            src="/assets/outcome.svg"
            width="28"
            height="28"
            alt="Saidas"
          />
        </header>
        <strong>-R$ 500,00</strong>
      </S.Card>

      <S.Card>
        <header>
          <p>Total</p>
          <Image src="/assets/total.svg" width="28" height="28" alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </S.Card>
    </S.Container>
  );
};

export default Summary;
