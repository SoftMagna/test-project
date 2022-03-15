import { RecoilRoot } from 'recoil';
import Calendar from './components/Calender';
import TodoFormModal from './features/TodoFormModal'
import TodoStatisticsModal from './features/TodoStatistisModal';

function App() {
  return (
    <RecoilRoot>
      <Calendar />
      <TodoFormModal />
      <TodoStatisticsModal />
    </RecoilRoot>

  );
}

export default App;

// const App: React.FC = () => (
//   <RecoilRoot>
//     <Global styles={globalStyle} />
//     <Container>
//       {/** Calendar */}
//       <Calendar />
//     </Container>
//     {/** Modal */}
//     <TodoFormModal />
//     <TodoStatisticsModal />
//   </RecoilRoot>
// )