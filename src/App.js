import "./App.css";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import CarouselImages from "./CarouselImages";
import Body from "./Body";
import Lists from "./Blue_list";
import Cards from "./Cards";
import Blue_Cards from "./Blue_Cards";
import Forms from "./Form";
import Contents from "./content";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <CarouselImages />
        <Body/><br></br>
        <Lists/><br></br>
        <Blue_Cards/><br></br>
        <Forms/><br></br><br></br>
        <Contents/>
      </header>
    </div>
  );
}

export default App;
