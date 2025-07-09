import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Spreadsheet from "./components/Spreadsheet";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Tabs />
      <Spreadsheet />
    </div>
  );
}
