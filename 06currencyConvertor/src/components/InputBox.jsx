
//creting the input component,the inner container

import React ,{useId} from 'react'

//useId is a hook that generates a unique ID for the component instance.
// This is useful for accessibility purposes, such as associating labels with input fields. 


function InputBox({
    
    // The InputBox component is a functional component that renders an input field and a select dropdown for currency type.
    // It accepts props such as label, className, and others that can be passed down
    label,
    amount,

    //this is the function that will be called when the amount changes
    onAmountChange,
    //this is the function that will be called when the currency changes
    onCurrencyChange,
    // The currencyOptions prop is an array of currency options that will be displayed in the select dropdown.
    // It allows the parent component to pass in a list of currencies that the user can choose
    currencyOptions = [],
    // The selectedCurrency prop is the currently selected currency from the dropdown.
    // It allows the parent component to control which currency is selected , we intially set it to "usd" to provide a default value.
    selectedCurrency = "usd",
    // The amountDisabled prop is a boolean that determines whether the amount input field should be disabled.
    // If true, the input field will be disabled, preventing user input.
    amountDisabled = false,
    currencyDisabled = false,

    className = "",
}) {
    // useId is a hook that generates a unique ID for the component instance.
    // This is useful for accessibility purposes, such as associating labels with input fields.
    const amountInputId = useId();

    // The InputBox component is a functional component that renders an input field and a select dropdown for currency type.
    // It accepts props such as label, className, and others that can be passed down
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">

                {/*The label prop is used to display a label for the input field. */}
                    {label}
                </label>
                <input
                
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    
                    //when the amountDisabled prop is true, the input field will be disabled, preventing user input.
                    // This is useful when you want to prevent the user from changing the amount, for example, when the amount is being calculated or fetched from an API.
                    // The value prop is set to the amount prop, which is a number representing the amount cause in javasxcript, the value of an input field is always a string, so we need to convert it to a number using Number(e.target.value).
                    // The onChange event handler is triggered when the user changes the value of the input field
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"

                    // The currencyDisabled prop is used to disable the select dropdown for currency type.
                    value={selectedCurrency}
                    // The onChange event handler is triggered when the user selects a different currency from the dropdown.
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                   
                    disabled={currencyDisabled}
                >
                    
                  
                   
                    {/* The map function is used to iterate over the currencyOptions array and create an option element for each currency. */}
                    {/* The value prop of each option is set to the currency code, which will be used when the user selects a currency. */}
                    {/* The text content of each option is set to the currency code, which will be displayed in the dropdown. */}
                    {/* The key prop is used by React to identify each element in the list, and it should be unique for each element. */}
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>

                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;