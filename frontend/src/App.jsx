import {Route, Routes} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster/>
        <button onClick={()=> toast.error("congrats")} className="text-red-500 p-4 bg-pink-300"> 
          CLICK ME 
        </button>
        <Routes>
            <Route path ="/" element={<HomePage />} />
            <Route path ="/create" element={<CreatePage />} />
            <Route path ="/note/:id" element={<NoteDetailPage />} />
        </Routes>

    </div>
  )
}

export default App