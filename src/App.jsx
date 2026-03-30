
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navigation from "./components/Navigation";
import StatePage from "./pages/StatePage";
import ControlledInputPage from "./pages/ControlledInputPage";
import ConditionalRenderingPage from "./pages/ConditionalRenderingPage";
import PropsPage from "./pages/PropsPage";
import CounterPage from "./pages/CounterPage";
import ControlledFormPage from "./pages/ControlledFormPage";
import QuestionnairePage from "./pages/QuestionnairePage";
import TabsPage from "./pages/TabsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />

        <Routes>
          <Route path="/" element={<Navigate to="/state" replace />} />
          <Route path="/state" element={<StatePage />} />
          <Route path="/controlled-input" element={<ControlledInputPage />} />
          <Route path="/conditional-rendering" element={<ConditionalRenderingPage />} />
          <Route path="/props" element={<PropsPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/controlled-form" element={<ControlledFormPage />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />
          <Route path="/tabs" element={<TabsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;