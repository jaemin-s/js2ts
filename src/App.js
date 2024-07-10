import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import './App.css';
import LazyLoadingImage from './components/card/LazyLoadingImage';

function App() {

  const posterUrl1 = "https://d1h3jce690ir5k.cloudfront.net/images/poster/141945/141945.jpg"
  const posterUrl2 = "https://d1h3jce690ir5k.cloudfront.net/images/poster/114894/114894.jpg"
  const posterUrl3 = "https://d1h3jce690ir5k.cloudfront.net/images/poster/140302/140302.jpg"
  const posterUrl4 = "https://d1h3jce690ir5k.cloudfront.net/images/poster/128225/128225.jpg"
  const posterUrl5 = "https://d1h3jce690ir5k.cloudfront.net/images/poster/126940/126940.jpg"
  const posterUrl6 = "https://d1h3jce690ir5k.cloudfront.net/images/poster/141671/141671.jpg"

  return <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
}

export default App;
