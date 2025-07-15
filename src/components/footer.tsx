

const Footer = ({activePage, noContact}:{
  activePage?: number,
  noContact?: boolean
}) => {

  return (
    <footer className="flex justify-center items-end w-full md:h-[40vh] md:pt-0 pt-[8vh] bg-black border-t-2 border-[#e2e3e4] text-[#e2e3e4]">
      <div className="grid md:grid-cols-2 md:gap-0 gap-20 h-3/4 w-2/3">
        
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-4">
            <svg className="fill-[#e2e3e4] w-12 h-12" viewBox="0 0 176.23 176.23">
              <path d="M88.85,83.71A367.12,367.12,0,0,1,68.48,41.46,275.64,275.64,0,0,0,78.74,72.25c20.34,50.94,52.31,88.59,79.72,97.54C135.13,151.55,109.92,121.23,88.85,83.71Z"/>
              <path d="M132.86,176.23c-21.75-30.42-46.8-51.09-67.94-56.42C85.78,129.91,109.88,149.68,132.86,176.23Z"/>
              <path d="M88.12,0a88.12,88.12,0,1,0,88.11,88.12A88.12,88.12,0,0,0,88.12,0ZM92,168.13A76.12,76.12,0,1,1,168.13,92,76.12,76.12,0,0,1,92,168.13Z"/>
            </svg>
            <p className="font-ysabeau text-4xl text-[#e2e3e4]">WrynnDev</p>
          </div>

          <ul className="flex flex-col gap-1 mt-8 text-lg">
            <li className={activePage == 1 ? 'underline cursor-default' : 'hover:underline cursor-pointer'}>{ activePage != 1 ? <a href="./">Home</a> : <>Home</>}</li>
            <li className={activePage == 2 ? 'underline cursor-default' : 'hover:underline cursor-pointer'}>{ activePage != 2 ? <a href="./services">Services</a> : <>Services</>}</li>
            <li className={activePage == 3 ? 'underline cursor-default' : 'hover:underline cursor-pointer'}>{ activePage != 3 ? <a href="./about">About</a> : <>About</>}</li>
            <li className={activePage == 4 ? 'underline cursor-default' : 'hover:underline cursor-pointer'}>{ activePage != 4 ? <a href="./contact">Contact</a> : <>Contact</>}</li>
          </ul>
        </div>

        { noContact ? <></> :
          <div className="flex flex-col">
            <p className="font-montserrat font-bold text-[#e2e3e4] md:text-5xl text-3xl">WANT TO WORK<br/>WITH US?</p>
            <a className="md:w-1/4 w-2/3 md:mt-20 mt-8 md:mb-0 mb-12 md:px-6 px-4 md:py-4 py-2 border-2 border-[#e2e3e4] hover:bg-[#e2e3e4]/10 active:bg-[#e2e3e4]/30 text-center cursor-pointer" href="./contact">
              <p className="font-jost md:text-xl text-lg text-[#e2e3e4]">Get in touch</p>
            </a>
          </div>
        }

      </div>
    </footer>
  )
}

export default Footer;

