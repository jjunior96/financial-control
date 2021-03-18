// import { useEffect } from 'react';
// import api from 'services/api';
import * as S from './styles';

const TransactionsTable = () => {
  // useEffect(() => {
  //   api.get('/transactions').then((response) => console.log(response.data));
  // }, []);

  return (
    <S.Container>
      <S.Table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>17/03/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>17/03/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>17/03/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>17/03/2021</td>
          </tr>
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default TransactionsTable;
