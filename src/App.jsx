import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SharedLAyouts} from "./components";
import {Hero, ChatbotKit, About, Error, PlayWithMax, Gallery } from "./page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLAyouts />}>
          <Route index element={<Hero />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="chatbot" element={<ChatbotKit />}></Route>
          <Route path="gallery" element={<Gallery />}></Route>
          <Route path="playMax" element={<PlayWithMax />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
