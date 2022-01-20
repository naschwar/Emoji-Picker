import './styles/app.scss'
import EmojiPicker from './components/EmojiPicker';
import EmojiDisplay from './components/EmojiDisplay';
 
function App() {

  return (
    <div className="appContainer">
      <EmojiDisplay/>
      <EmojiPicker/>
    </div>
      
  );
}

export default App;
