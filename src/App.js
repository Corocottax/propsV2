
import './App.css';
import Meme from './components/Meme';

function App() {

  const meme1 = "https://i.pinimg.com/736x/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.jpg";
  const meme2 = "https://www.meme-arsenal.com/memes/77ef50b6001a7b3bce9410af12cb16b2.jpg";
  const meme3 = "https://pbs.twimg.com/media/FSG0DTtXwAENpiI.jpg";
  const meme4 = "https://pics.esmemes.com/frontend-backend-57053831.png";



  return (
    <div className="App">
      <Meme
        meme={meme1}
        color="red"
        invisible
        titulo="el titulo del meme1"
      />

      <Meme meme={meme2} color="blue" titulo="el titulo del meme2" />
      <Meme meme={meme3} color="black" invisible={true} titulo="el titulo del meme3" />
      <Meme meme={meme4} color="green" titulo="el titulo del meme4" />
    </div>
  );
}

export default App;
