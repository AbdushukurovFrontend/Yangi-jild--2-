import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import TruckDriver from "./components/TruckDriver";
import Comment from "./components/Camment";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";

function App() {
  return (
    <StyledApp>
      {/* Abdulaziz */}
      <Header />

      {/* Doniyor */}
      <TruckDriver />

      {/* Abdulaziz */}
      <Comment />

      {/* Sardor */}
      <Sponsor />

      {/* Nurbek */}
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div``;

export default App;
