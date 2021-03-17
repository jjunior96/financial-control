import Header from 'components/Header';
import Summary from 'components/Summary';
import TransactionsTable from 'components/TransactionsTable';
import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Summary />
        <TransactionsTable />
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
