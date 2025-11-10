import React, { useState } from "react";
import { Coffee, Sparkles } from "lucide-react";

export default function CoffeeRoller() {
  const [drinkType, setDrinkType] = useState("latte");
  const [temperature, setTemperature] = useState("hot");
  const [milkType, setMilkType] = useState("whole");
  const [result, setResult] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const syrups = [
    "Brown Sugar Cinnamon",
    "Irish Cream",
    "Toasted Coconut",
    "Ahadu Flavoring",
    "Lavendar",
    "Pumpkin Pie",
    "Buttered Rum",
    "Caramel",
    "Mint",
    "Almond",
    "Madagascar Vanilla",
    "Hazelnut",
    "Mocha",
    "White Chocolate",
    "Salted Caramel",
    "Bourbon Caramel",
    "Peppermint",
    "Toasted Marshmellow",
    "Blueberry",
    "Raspberry",
    "Blackberry",
    "Cherry",
  ];

  const milkOptions = [
    "Whole Milk",
    "Oat Milk",
    "Almond Milk",
    "Skim Milk",
    "Half & Half",
  ];

  const getRandomFlavors = () => {
    const numFlavors = Math.random() < 0.5 ? 2 : 3;
    const shuffled = [...syrups].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numFlavors);
  };

  const handleRoll = () => {
    setIsRolling(true);

    setTimeout(() => {
      const flavors = getRandomFlavors();
      const selectedMilk =
        milkOptions.find((m) =>
          m.toLowerCase().includes(milkType.toLowerCase())
        ) || milkType;

      setResult({
        drink: drinkType,
        temp: temperature,
        milk: selectedMilk,
        flavors: flavors,
      });
      setIsRolling(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-emerald-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Coffee className="w-10 h-10 text-teal-700" />
              <h1 className="text-4xl font-bold text-teal-900">
                Coffee Roller
              </h1>
            </div>
            <p className="text-gray-600">
              Roll for your next delicious drink combination!
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {/* Drink Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Drink Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setDrinkType("latte")}
                  className={`p-4 rounded-lg border-2 font-medium transition-all ${
                    drinkType === "latte"
                      ? "border-teal-600 bg-teal-50 text-teal-900"
                      : "border-gray-200 hover:border-teal-300"
                  }`}
                >
                  Latte
                </button>
                <button
                  onClick={() => setDrinkType("chai")}
                  className={`p-4 rounded-lg border-2 font-medium transition-all ${
                    drinkType === "chai"
                      ? "border-teal-600 bg-teal-50 text-teal-900"
                      : "border-gray-200 hover:border-teal-300"
                  }`}
                >
                  Chai
                </button>
              </div>
            </div>

            {/* Temperature Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Temperature
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTemperature("hot")}
                  className={`p-4 rounded-lg border-2 font-medium transition-all ${
                    temperature === "hot"
                      ? "border-orange-500 bg-orange-50 text-orange-900"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  ☕ Hot
                </button>
                <button
                  onClick={() => setTemperature("iced")}
                  className={`p-4 rounded-lg border-2 font-medium transition-all ${
                    temperature === "iced"
                      ? "border-cyan-500 bg-cyan-50 text-cyan-900"
                      : "border-gray-200 hover:border-cyan-300"
                  }`}
                >
                  🧊 Iced
                </button>
              </div>
            </div>

            {/* Milk Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Milk Type
              </label>
              <select
                value={milkType}
                onChange={(e) => setMilkType(e.target.value)}
                className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none font-medium"
              >
                <option value="whole">Whole Milk</option>
                <option value="oat">Oat Milk</option>
                <option value="almond">Almond Milk</option>
                <option value="soy">Soy Milk</option>
                <option value="coconut">Coconut Milk</option>
                <option value="2%">2% Milk</option>
                <option value="skim">Skim Milk</option>
                <option value="half">Half & Half</option>
              </select>
            </div>
          </div>

          {/* Roll Button */}
          <button
            onClick={handleRoll}
            disabled={isRolling}
            className={`w-full py-5 rounded-xl font-bold text-lg transition-all transform ${
              isRolling
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 active:scale-95 shadow-lg hover:shadow-xl"
            } text-white flex items-center justify-center gap-3`}
          >
            <Sparkles
              className={`w-6 h-6 ${isRolling ? "animate-spin" : ""}`}
            />
            {isRolling ? "Rolling..." : "Roll for Flavors!"}
          </button>

          {/* Result Display */}
          {result && !isRolling && (
            <div className="mt-8 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border-2 border-teal-200 animate-fade-in">
              <h2 className="text-2xl font-bold text-teal-900 mb-4 text-center">
                Your Drink
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-700">Type:</span>
                  <span className="text-teal-900 font-bold capitalize">
                    {result.temp} {result.drink}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-semibold text-gray-700">Milk:</span>
                  <span className="text-teal-900 font-bold">{result.milk}</span>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <span className="font-semibold text-gray-700 block mb-2">
                    Flavors:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {result.flavors.map((flavor, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-medium text-sm"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-6 text-gray-600 text-sm">
          <p>Can't decide? Let fate choose your perfect drink! ☕✨</p>
        </div>
      </div>
    </div>
  );
}
