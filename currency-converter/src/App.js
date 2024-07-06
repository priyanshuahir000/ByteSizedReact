import { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";
import Loading from "./Loading";
import "./app.css";
import { LinearProgress } from "@mui/material";

const ApiKey = "de9f32536677b2f56605d2cb";

function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [rate, setRate] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState(false);
  const [amount, setAmount] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function convert() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${ApiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`,
          { signal: controller.signal }
        );
        const data = await response.json();
        setRate(data.conversion_result);
        setExchangeRate(data.conversion_rate);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    if (!amount || amount <= 0) {
      setAmount("");
      return;
    }
    convert();
    setConvertedAmount(true);
    return function () {
      controller.abort();
    };
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">
          <img src="./dollar-coin.png" alt="dollar-coin" width={48} /> Currency
          Converter
        </h1>
        <p className="subtitle">Convert between currencies</p>
        <div className="table">
          <div className="row">
            <div className="column">
              <label>Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div className="column">
              <label>From</label>

              <CurrencyRow
                currency={fromCurrency}
                setCurrency={setFromCurrency}
              />
            </div>
            <div className="column">
              <label>To</label>

              <CurrencyRow currency={toCurrency} setCurrency={setToCurrency} />
            </div>
          </div>

          {convertedAmount && loading ? (
            <LinearProgress color="success" />
          ) : (
            <div className="row answer-row">
              <h2>
                {amount} {fromCurrency} = {rate} {toCurrency}
              </h2>
              <p>
                1 {fromCurrency} = {exchangeRate} {toCurrency}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
