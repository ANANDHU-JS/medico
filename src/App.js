import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function App() {

  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home')
  }, []);
  return (
    <div>

    </div>
  );
}

export default App;
