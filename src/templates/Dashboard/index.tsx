import { useState } from 'react';
import Modal from 'react-modal';

import Header from 'components/Header';
import Summary from 'components/Summary';
import TransactionsTable from 'components/TransactionsTable';
import * as S from './styles';

/**
 * Como, ao abrir o modal, ele fica por cima da tela inteira,
 * devemos ocultar os elementos que estão dentro do elemento raíz.
 * Por questão de acessibilidade, passamos para o
 * Modal, qual é o elemento root, que no caso do Next.js
 * "#__next"
 */
Modal.setAppElement('#__next');

const Dashboard: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <S.Container>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <S.Content>
        <Summary />
        <TransactionsTable />

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
