import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Заголовок */}
      <header className="text-center py-4">
        <h1 className="text-3xl font-bold text-blue-600">Адаптивна сторінка</h1>
      </header>

      {/* Форма */}
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 my-6">
        <h2 className="text-xl font-semibold text-gray-700">Форма зворотного зв’язку</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Ім’я
            </label>
            <input type="text" id="name" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ваше ім’я" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Електронна пошта
            </label>
            <input type="email" id="email" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ваша електронна пошта"/>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Відправити
          </button>
        </form>
      </div>

      {/* Список карток */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-gray-800">Картка {item}</h3>
            <p className="text-gray-600 mt-2">
              Картка {item}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
