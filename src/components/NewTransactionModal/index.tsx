import Modal from 'react-modal';
import { RiCloseFill as CloseButton } from 'react-icons/ri';

import * as S from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" // Sobrescreve os styles default
      className="react-modal-content" // Classe para estilização do conteúdo do modal
    >
      <button type="button" onClick={onRequestClose}>
        <CloseButton size={26} />
      </button>
      <S.Container>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
};

export default NewTransactionModal;
