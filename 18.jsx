import React, { useState } from "react";

const ElectricityBillCalculator = () => {
  const [units, setUnits] = useState("");
  const [rate, setRate] = useState("");
  const [bill, setBill] = useState(null);

  const calculateBill = () => {
    if (!units || !rate) {
      alert("Please enter both units consumed and rate per unit!");
      return;
    }
    setBill(units * rate);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-5">
      <h1 className="text-3xl font-bold mb-5">⚡ Electricity Bill Calculator</h1>

      <div className="bg-white p-5 rounded-lg shadow-lg w-80">
        <label className="block font-semibold mb-2">Units Consumed (kWh):</label>
        <input
          type="number"
          className="w-full p-2 border rounded-md"
          placeholder="Enter units..."
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        />

        <label className="block font-semibold mt-3 mb-2">Rate per Unit (₹):</label>
        <input
          type="number"
          className="w-full p-2 border rounded-md"
          placeholder="Enter rate..."
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          onClick={calculateBill}
        >
          Calculate Bill
        </button>

        {bill !== null && (
          <div className="mt-4 text-center font-bold text-lg">
            🔌 Total Bill: ₹ {bill.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectricityBillCalculator;
