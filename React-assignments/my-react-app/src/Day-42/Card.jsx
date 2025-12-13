import Card from "./Task5";

function App() {
  return (
    <div>
      <Card>
        <h2>Title</h2>
        <p>This content is inside the card.</p>
        <button>Action</button>
      </Card>

      <Card>
        <Message message="Cards can wrap any component!" />
      </Card>
    </div>
  );
}

export default App;
