import { Content } from './components/layout/Content/Content';
import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      {/* TODO: add ScrollButton */}
    </>
  );
}

export default App;
