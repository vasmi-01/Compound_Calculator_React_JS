import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CI.css';

export default function CompoundInterest() {
  const [principal, setPrincipal] = useState();
  const [rate, setRate] = useState();
  const [frequency, setFrequency] = useState();
  const [time, setTime] = useState();
  const [compoundinterest, setCompoundinterest] = useState();
  const [amount, setAmount] = useState();

  const CalculateInterest = () => {
    const r = rate / 100;
    const totamount = principal * Math.pow(1 + r / frequency, frequency * time);
    const interest = totamount - principal;
    setCompoundinterest(interest.toFixed(2));
    setAmount(totamount.toFixed(2));
  }

  return (
    <>
  
      <div className="container-fluid">
        <h2 style={{ textAlign: "center",color:"white",fontFamily:"cursive" }}>Compound Interest</h2>
        <div className="card mt-4 p-4 w-50 mx-auto">
          <div className="form-group my-2">
            <label>Principal</label>
            <input
              type="number"
              className="form-control my-2"
              value={principal}
              placeholder="Principal amount"
              onChange={(e) => setPrincipal(parseFloat(e.target.value))}
            />
          </div>

          <div className="form-group my-2">
            <label>Interest Rate (%)</label>
            <input
              type="number"
              className="form-control"
              value={rate}
              placeholder="Interest Rate"
              onChange={(e) => setRate(parseFloat(e.target.value))}
            />
          </div>

          <div className="form-group my-2">
            <label>Frequency</label>
            <select
              className="form-select"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option>Select One</option>
              <option value="1">Yearly</option>
              <option value="2">Half-yearly</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
            </select>
          </div>

          <div className="form-group my-2">
            <label>Time Period (years)</label>
            <input
              type="number"
              className="form-control"
              value={time}
              placeholder="Time Period"
              onChange={(e) => setTime(parseFloat(e.target.value))}
            />
          </div>

          <button className="btn btn-primary btn-sm mt-2 my-2 fs-5" onClick={CalculateInterest}>
            Calculate
          </button>

          {compoundinterest && amount && (
            <div className="alert alert-info mt-3 text-center">

               <h5>Total Amount: Rs {amount}</h5>
              <h5>Compound Interest: Rs {compoundinterest}</h5>
             
            </div>
          )}
        </div>
      </div>

    </>
  );
}



