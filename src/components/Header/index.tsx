import Image from 'next/image';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <Image src="/assets/logo.svg" width="140" height="140" alt="Logo" />
        </S.Logo>

        <S.Button>Nova transação</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default Header;
