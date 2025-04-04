


const Navbar = () => {

  return (
    <div className="w-full h-24 border-b border-neutraltext bg-gradient-to-r from-base to-base2 py-4 px-8">
      <nav className="flex flex-row w-full h-full">
      
        <div className="grid grid-cols-1 h-full w-16 cursor-pointer">
          <div className="col-start-1 row-start-1 h-full w-full bg-orange-950/30 rounded-full" />
          <svg className="col-start-1 row-start-1" viewBox="0 0 176.23 176.23">
            <defs>
              <style>{`
                .a { fill: url(#a); }
                .b { fill: url(#b); }
                .c { fill: url(#c); }
              `}</style>
              <linearGradient id="a" x1="96.34" y1="135.3" x2="130.01" y2="76.98" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ee513f" />
                <stop offset="0.4" stopColor="#ee543f" />
                <stop offset="0.65" stopColor="#ee5c3f" />
                <stop offset="0.86" stopColor="#ee6b3f" />
                <stop offset="1" stopColor="#ee793f" />
              </linearGradient>
              <linearGradient id="b" x1="95.17" y1="154.47" x2="103.8" y2="139.52" xlinkHref="#a" />
              <linearGradient id="c" x1="25.81" y1="25.81" x2="150.42" y2="150.42" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ee513f" />
                <stop offset="0.28" stopColor="#ee613f" />
                <stop offset="0.7" stopColor="#ee733f" />
                <stop offset="1" stopColor="#ee793f" />
              </linearGradient>
            </defs>
            <path className="a" d="M88.85,83.71A367.12,367.12,0,0,1,68.48,41.46,275.64,275.64,0,0,0,78.74,72.25c20.34,50.94,52.31,88.59,79.72,97.54C135.13,151.55,109.92,121.23,88.85,83.71Z" />
            <path className="b" d="M132.86,176.23c-21.75-30.42-46.8-51.09-67.94-56.42C85.78,129.91,109.88,149.68,132.86,176.23Z" />
            <path className="c" d="M88.12,0a88.12,88.12,0,1,0,88.11,88.12A88.12,88.12,0,0,0,88.12,0ZM92,168.13A76.12,76.12,0,1,1,168.13,92,76.12,76.12,0,0,1,92,168.13Z" />
          </svg>
        </div>

        <ul className="flex flex-row ml-auto my-auto gap-6 text-3xl">
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>
        
      </nav>
    </div>
  )
}

export default Navbar;