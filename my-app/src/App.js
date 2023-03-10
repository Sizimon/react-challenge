import css from './App.module.css';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Sidebar from './components/Sidebar';
import ContentHooks from './components/ContentHooks';
import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      {/* <ContentHooks /> */}
      <ContentAPI />
    </div>
  );
}

export default App;