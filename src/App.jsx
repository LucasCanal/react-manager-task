import { Eye, EyeOff, Mail, Key } from 'lucide-react';
import logo from './assets/logo.png';
import { useState } from 'react';
import React from 'react';

function App() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 flex items-center justify-center'>
      <div className='bg-white w-full max-w-xl rounded-2xl shadow-xl p-12'>
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center mx-auto'>
            <img src={logo} alt="Logo" className='logo' />
          </div>
          <div className='text-3xl font-bold text-gray-800'>Bem vindo(a) de volta</div>
          <p className='text-3x1 text-gray-400 mt-6'>Forneça as suas credenciais de acesso</p>
        </div>
        <form className='space-y-7'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
            <div className='relative'>
              <Mail className='w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2' />
              <input
                placeholder='Digite o email do usuário'
                className='w-full pl-10 pr-4 py-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors'
              />
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Senha</label>
            <div className='relative'>
              <Key className='w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2' />
              <input
                type={showPassword ? 'text' : 'password'} // Alterna entre "text" e "password"
                placeholder='Digite a senha do usuário'
                className='w-full pl-10 pr-12 py-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)} // Alterna o estado
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500 focus:outline-none'
              >
                {showPassword ? (
                  <EyeOff className='w-5 h-5' />
                ) : (
                  <Eye className='w-5 h-5' />
                )}
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between space-x-4'>
            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                className='form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-blue-500 border-gray-300'
              />
              <span className='text-sm text-gray-700'>Lembre-me</span> {/* Texto */}
            </label>
            <a href='/forgot-password' className='text-sm text-blue-500 hover:text-blue-700'>
              Esqueci a senha
            </a>
          </div>
          <div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-400 focus:outline-none focus:ring-2'
            >
              Entrar
            </button>
          </div>
          <div className='space-y-4'>
            <a
              href="#"
              className='w-full flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-600'
            >
              <svg
                className='w-5 h-5 mr-2' // Ícone do Github
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                fill="currentColor"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 23.6 31.5 23.6 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252c0-138.7-113.3-252-251.2-252zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              Logar com Github
            </a>
          </div>
          <div>
            <p>Não tem cadastro? <a href='/forgot-password' className='text-sm text-blue-500 hover:text-blue-700'>
              Cadastre-se aqui
            </a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;