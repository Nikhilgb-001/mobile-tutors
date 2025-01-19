import { Route, Routes } from "react-router-dom";
import MultiStepForm from "../components/MultiStepForm";

const Router = () => {
  return (
    <Routes>
      <Route path="/get-started" element={<MultiStepForm />} />
    </Routes>
  );
};

export default Router;
