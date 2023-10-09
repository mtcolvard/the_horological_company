import Link from 'next/link'
import MobileNav from './mobile-nav'

export default function Navigation() {
  return (
    <>
      <MobileNav />
      <div className="md:px-20 md:my-11 bg-white text-black hidden sm:block ">
        <div className='md:my-2 text-lg md:flex md:gap-3 lg:gap-8 justify-center'>
          <div>
            <Link className='flex-1' href="/shippinginstructions">
              Shipping Instructions
            </Link>
          </div>
          <div>
            <Link className='flex-1' href="/privateclients">
              Private Clients
            </Link>
          </div>
          <div>
            <Link className='flex-1' href="/corporateclients">
              Corporate Clients
            </Link>
          </div>
          <div>
            <Link className='flex-1' href="/inthestudio">
              In the Studio
            </Link>
          </div>
          <div>
            <Link className='flex-1' href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}


