import { useState } from 'react';

const Navbar = () => {
  const [lang, setLang] = useState('EN');

  const navLinks = (
    <>
      <li><a className="hover:text-sky-400 font-medium">Home</a></li>
      <li>
        <details>
          <summary className="hover:text-sky-400 font-medium">Donate</summary>
          <ul className="bg-slate-900/90 backdrop-blur-md rounded-lg p-2 w-40 z-20 border border-slate-700">
            <li><a>Option 1</a></li>
            <li><a>Option 2</a></li>
          </ul>
        </details>
      </li>
      <li><a className="hover:text-sky-400 font-medium">Events</a></li>
      <li>
        <details>
          <summary className="hover:text-sky-400 font-medium">About Us</summary>
          <ul className="bg-slate-900/90 backdrop-blur-md rounded-lg p-2 w-40 z-20 border border-slate-700">
            <li><a>Our Mission</a></li>
            <li><a>Team</a></li>
          </ul>
        </details>
      </li>
      <li><a className="hover:text-sky-400 font-medium">Gallery</a></li>
      <li>
        <details open>
          <summary className="hover:text-sky-400 font-medium underline underline-offset-8 decoration-2 decoration-sky-400">
            News & Articles
          </summary>
          <ul className="bg-slate-900/90 backdrop-blur-md rounded-lg p-2 w-40 z-20 border border-slate-700">
            <li><a>Latest News</a></li>
            <li><a>Blogs</a></li>
          </ul>
        </details>
      </li>
      <li><a className="hover:text-sky-400 font-medium">Partnership</a></li>
    </>
  );

  return (
    
    <div className="w-full max-w-7xl p-4 fixed top-0 left-1/2 -translate-x-1/2 z-[9999]">
      
      <div className="navbar bg-slate-900/40 backdrop-blur-md border border-white/20 text-white rounded-full px-6 py-2 shadow-lg flex justify-between items-center">
        
       
        <div className="navbar-start w-auto">
          <a className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Logo" />
            </div>
          </a>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-sm">
            {navLinks}
          </ul>
        </div>

        
        <div className="navbar-end hidden lg:flex items-center gap-3 w-auto">
          <div className="bg-white/10 p-1 rounded-full flex items-center border border-white/10 text-xs font-semibold">
            <button
              onClick={() => setLang('EN')}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === 'EN' ? 'bg-sky-500 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('BN')}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === 'BN' ? 'bg-sky-500 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              BN
            </button>
          </div>

          <button className="btn btn-outline border-white/40 text-white hover:bg-white/10 rounded-full min-h-0 h-10 px-6 font-normal">
            Sign in
          </button>

          <button className="btn bg-sky-500 hover:bg-sky-600 text-white border-none rounded-full min-h-0 h-10 px-6 font-medium shadow-md shadow-sky-500/30">
            Donate
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-sky-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-900/95 backdrop-blur-lg border border-slate-700 text-white rounded-2xl z-50 mt-3 w-64 p-4 shadow-xl gap-2"
            >
              {navLinks}
              <hr className="border-slate-700 my-2" />
              
              <div className="flex flex-col gap-3 pt-1">
                <div className="flex justify-between items-center bg-white/10 p-1 rounded-full">
                  <button
                    onClick={() => setLang('EN')}
                    className={`flex-1 py-1 rounded-full text-xs font-semibold ${
                      lang === 'EN' ? 'bg-sky-500 text-white' : 'text-slate-300'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang('BN')}
                    className={`flex-1 py-1 rounded-full text-xs font-semibold ${
                      lang === 'BN' ? 'bg-sky-500 text-white' : 'text-slate-300'
                    }`}
                  >
                    BN
                  </button>
                </div>
                
                <button className="btn btn-outline border-white/30 text-white rounded-full btn-sm">
                  Sign in
                </button>
                <button className="btn bg-sky-500 text-white border-none rounded-full btn-sm">
                  Donate
                </button>
              </div>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;