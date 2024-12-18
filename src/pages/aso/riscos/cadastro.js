import React, { useState } from "react";
function Cadastro (){
  function handleSave() {}

  return <div className="bg-gradient-to-r from-black via-pink-500 to-black min-h-screen flex">
      <div className="w-64 min-h-screen fixed bg-black/80 text-white flex flex-col p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Menu</h2>
         
        <ul className="space-y-4">
          <li>
            <button
              className="w-full text-left font-semibold"
              id="info-basicas-btn"
              onClick={() => navigateTo("/")}
            >
              1. Informações Básicas
            </button>
          </li>
          <li>
            <button
              className="w-full text-left font-semibold"
              id="riscos-btn"
              disabled
            >
              1.1. Riscos
            </button>
          </li>
          <li>
            <button
              className="w-full text-left ml-8 font-semibold text-gray-500"
              id="exames-btn"
              disabled
            >
              1.1.1. Exames
            </button>
          </li>
          <li>
            <button
              className="w-full text-left font-semibold text-gray-500"
              id="resumo-btn"
              disabled
            >
              2. Resumo
            </button>
          </li>
        </ul>
      </div>

      <div className="w-full h-full flex ml-64 items-center justify-center">
        <div className="w-full max-w-xl my-10 rounded-lg bg-black/70 p-8 shadow-lg">
          <h1 className="mb-8 text-center text-3xl font-bold text-white">
            Seleção de Riscos
          </h1>
          div
          <div className="text-center">
            <button
              className="rounded-lg bg-pink-600 px-6 py-3 font-bold text-white hover:scale-110 focus:outline-none"
              onClick={handleSave}
            >
              Salvar Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  
};

export default Cadastro;
