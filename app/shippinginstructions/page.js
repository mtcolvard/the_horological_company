import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/navigation.js'
// import ImageArray from './components/images-array.js'
// import tempLanding from '../public/tempLanding.webp';

export default function Home() {
  return (
    <main className="bg-white text-black relative min-h-screen">
      {/* <div className="absolute inset-0 flex items-center justify-center z-10">
        <Link href="/showcase">
          <div className="border-2 border-black p-7 text-black text-xl tracking-widest uppercase bg-clip-border bg-transparent bg-origin-padding">
            From Audemars to Zenith
          </div>
        </Link>
      </div> */}

      <Navigation />
      {/* <div className='md:px-20'> */}
      <div className='grid grid-cols-4 gap-4'>
        <div></div>
        <div className="col-span-2">
          <h2 className="text-4xl">Shipping Instructions</h2>
          <br/>
          <ul className="list-disc">
            <li>
              Package the watch carefully and place in a sturdy, disposable box.
              Please do not send your watch in the original branded box.</li>
            <br/>
            <li>Print your name and return address on the box, as well as on all correspondence you send to us. Describe the service that you would like to have performed, and include your daytime phone number, fax number, and e-mail address.</li>
            <br/>
            <li>If applicable, please include a copy of the validated warranty or a sales receipt.</li>
            <br />
            <li>We recommend you use a carrier that has the ability to track and insure your package throughout the delivery process.</li>
            <br />
          </ul>
          <br />
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-4 gap-4 pb-12">
        <div></div>
        <div classNamer="col-span-2">
          <h2 className="text-3xl">Contact Information</h2>
          <br />
          <ul>
            <li>Address:</li>
            <br />
            <li>Telephone:</li>
            <br />
            <li>Email:</li>
          </ul>
        </div>
        <div></div>
      </div>
    

      {/* <div className="relative flex justify-center">
        <Link href="/">
          <Image
            priority
            alt=''
            src={tempLanding}
            style={{
              width: '100%',
              height: '100vh',
            }}
          />
        </Link>
      </div> */}
    </main>
  );
}