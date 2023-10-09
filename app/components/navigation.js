import Link from 'next/link'
import MobileNav from './mobile-nav'

export default function Navigation() {
  return (
    <>
      <MobileNav />
      <div className="md:px-12  bg-white text-black hidden sm:block ">
        <div>
          <Link href="/">
            <h1 className='text-6xl text-black text-center pt-16 pb-10'>The Horological Company</h1>
          </Link>
        </div>
        <div className=' md:pb-12 text-lg md:flex md:gap-3 lg:gap-8 justify-center'>
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


