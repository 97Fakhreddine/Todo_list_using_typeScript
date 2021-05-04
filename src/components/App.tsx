import "../index.css";
import { Todos } from "./Todos";
// import mockData from "../mock-data/data.js";

const App: React.FC<{}> = () => {
  return (
    <div>
      <div className='App h-screen flex justify-center items-center bg-gray-100'>
        <Todos />
      </div>
    </div>
  );
};
export default App;
