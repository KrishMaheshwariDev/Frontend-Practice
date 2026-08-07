// Text - #e3e0ee
// Background - #0f0c18
// Primary - #b2a6d4
// Secondary - #443474
// Accent - #7258ba
import Card from "./components/Card.jsx"
import MyImage from "./assets/me_anime.png"


export default function App() {
  return (
    <div className="App bg-[#0f0c18] text-[#e3e0ee] min-h-screen flex flex-col items-center justify-center">
      <Card />
    </div>
  );
}