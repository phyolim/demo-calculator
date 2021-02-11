import React, { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(undefined);

  const onFirstInputChange = (event) => {
    const value = event.target.value;
    setFirstNumber(Number(value));
  };
  const onSecondInputChange = (event) => {
    const value = event.target.value;
    setSecondNumber(Number(value));
  };
  const onOperatorChange = (event) => {
    console.log(event.target);
    const value = event.target.value;
    setOperator(value);
  };

  const doCalculate = () => {
    switch (operator) {
      case "+":
        setResult(firstNumber + secondNumber);
        break;
      case "-":
        setResult(firstNumber - secondNumber);
        break;
      case "/":
        setResult(firstNumber / secondNumber);
        break;
      case "x":
        setResult(firstNumber * secondNumber);
        break;
      default:
        console.log("error");
    }
  };

  return (
    <div className="max-w-7xl bg-gray-200 mx-auto sm:px-6 lg:px-8 flex h-screen justify-center items-center">
      <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col items-center flex-row">
        <div className="flex flex-row">
          <div className="px-4 py-5 sm:p-6">
            <div>
              <label
                htmlFor="firstNumber"
                className="block text-sm font-medium text-gray-700"
              >
                First Number
              </label>
              <div className="mt-1">
                <input
                  value={firstNumber ?? ""}
                  onChange={onFirstInputChange}
                  type="number"
                  name="firstNumber"
                  id="firstNumber"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter first number"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <label
              htmlFor="operator"
              className="block text-sm font-medium text-gray-700"
            >
              Operator
            </label>
            <select
              id="operator"
              name="operator"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={onOperatorChange}
              value={operator}
            >
              <option>+</option>
              <option>-</option>
              <option>/</option>
              <option>x</option>
            </select>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div>
              <label
                htmlFor="secondNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Second Number
              </label>
              <div className="mt-1">
                <input
                  value={secondNumber ?? ""}
                  onChange={onSecondInputChange}
                  type="number"
                  name="secondNumber"
                  id="secondNumber"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter second number"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <button
            type="button"
            onClick={doCalculate}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Calculate
          </button>
        </div>
        {result ? (
          <div className="px-4 py-5 sm:p-6">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Result
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {result}
                </dd>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
