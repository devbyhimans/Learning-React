import { useState } from 'react'
import usecurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'
import './App.css'

function App() {
  
  // Using useState hook to create state variables for amount, To, From, and convertedAmount
  // These state variables will be used to store the amount to be converted, the target currency (To), the source currency (From), and the converted amount respectively.
  // The initial values are set to 0 for amount and convertedAmount, and "usd" for To and "inr" for From.
  const [amount, setAmount] = useState(0);
  const [To , setTo] = useState("usd");
  const [From, setFrom] = useState("inr");
  // The convertedAmount state variable will store the result of the currency conversion.
  const [convertedAmount, setConvertedAmount] = useState(0);

  //using the custom hook usecurrencyInfo to fetch currency data for the currency passed from the state variable From.
  const CurrencyInfo = usecurrencyInfo(From);
  //we are getting the currency options from the useCurrencyInfo object, which contains the currency information fetched by the custom hook
  // // The Object.keys() method is used to get an array of the keys (currency codes) from the CurrencyInfo object.
  const options = Object.keys(CurrencyInfo);
  //holding these keys in a state variable called options, which will be used to populate the currency dropdowns in the InputBox component.


  const swap = () => {
    // This function is used to swap the currencies between the From and To state variables.
    // It simply sets the From state to the current value of To and vice versa.
    setFrom(To);
    setTo(From);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    // This function is used to perform the currency conversion.
    // It calculates the converted amount by multiplying the amount by the exchange rate from the CurrencyInfo
  setConvertedAmount(amount* CurrencyInfo[To]);
}

  return (
    <div
        className="fixed inset-0 w-full h-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2023/06/03/15/01/finance-8037839_1280.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
    >
            <div className="w-full ">
                <div className="w-full max-w-md mx-auto border border-teal-60 rounded-lg p-5 backdrop-blur-sm bg-white/20 px-3 py-4">
                    <form
                    //prevetning the default form submission behavior
                        onSubmit={(e) => {
                            e.preventDefault();

                            // The convert function is called when the form is submitted.
                            // It will perform the currency conversion based on the amount and selected currencies.
                            convert();

                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                // The InputBox component is used to render the input fields for the currency conversion.
                                // It takes props such as label, amount, currencyOptions, onCurrencyChange, selectedCurrency, and onAmountChange.
                                // The label prop is used to display the label for the input field.
                                // The amount prop is the amount to be converted, which is set to the amount state variable.
                                // The currencyOptions prop is the array of currency options fetched from the usecurrencyInfo hook.
                                // The onCurrencyChange prop is a function that will be called when the user selects a currency from the dropdown.
                                // The selectedCurrency prop is the currently selected currency,
                                // which is set to the From state variable.
                                // The onAmountChange prop is a function that will be called when the user changes the amount input field.
                                // This allows the parent component to update the amount state variable when the user
                                // changes the value in the input field.  
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectedCurrency={From}
                                onAmountChange={(amount)=>setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectedCurrency={To}
                                amountDisabled={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        onClick={convert}
                        >
                            Convert {From.toUpperCase()} to {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }

export default App

