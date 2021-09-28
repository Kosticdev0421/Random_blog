import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Compose from "./pages/write/Compose";

export default function App() {
  return (
    <div>
      <TopBar />
      <Compose />
    </div>
  )
}

// for some reason the terminal wanted the export default within the function instead of separately.  Look up why but do it their way, for now. 