import logo from './logo.svg';
import './App.css';
import SummaryPage from './pages/SummaryPage';
import OrderPage from './pages/OrderPage';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(0);
  return (
    <div style={{ padding: '4rem' }}>
      {step === 0  && <OrderPage setStep={setStep} />}
      {step === 1 && <SummaryPage setStep={setStep} />}
      {step === 2 && <OrderPage setStep={setStep} />}
    </div>
  );
}

export default App;
