import Table from "./Components/Table";
import { enterPlayersPositions } from "./Components/playersMatchData";

function App() {
  return (
    <div>
      <Table matchesPlayed={enterPlayersPositions}/>
    </div>
  );
}

export default App;
