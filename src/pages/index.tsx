// import { createServer } from 'miragejs';

import Dashboard from 'templates/Dashboard';

// createServer({
//   routes() {
//     this.get('/api/transactions', () => ({
//       transactions: [
//         {
//           id: 1,
//           title: 'Transaction 1',
//           amount: 400,
//           type: 'deposit',
//           category: 'Food',
//           createdAt: new Date()
//         }
//       ]
//     }));
//   }
// });

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
