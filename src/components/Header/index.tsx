import Image from 'next/image';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <Image src="/assets/logo.svg" width="120" height="120" />
        </S.Logo>

        <S.Button>Nova transação</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default Header;
