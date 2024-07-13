import { Content } from './components/layout/Content/Content';
import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header';
import { ScrollButton } from './components/ui/ScrollButton/ScrollButton';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
