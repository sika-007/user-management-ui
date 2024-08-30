import Header from "./components/Header";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="bg-slate-700 h-screen">
      <Header />
      <div className="w-full h-full flex justify-center mt-32 px-2 md:px-4">
        <UserTable />
      </div>
    </div>
  );
}

export default App;
