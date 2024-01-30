import Image from 'next/image'
import Link from "next/link";
import Footer from '@/components/Footer'


export default function learn() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
      <Link href="/" className="relative flex items-baseline before:absolute left-2 top-0 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/safecomplylogo.svg"
          alt="SafeComply Logo"
          width={300}
          height={100}
          priority /> 
        </Link>
        
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/about" >
            {" "}
            <Image
              src="/AIDriven.svg"
              alt="AI Driven Solutions"
              className="dark:invert"
              width={120}
              height={70}
              priority
            />
          </Link>
        </div>
      </div>
      
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        
      <div className="relative flex items-baseline before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[260px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/COMINGIN2024.svg"
          alt="Coming in 2024 !"
          width={700}
          height={250}
          priority
        />
      </div>

      </div>
        <div>
            <Footer />
        </div>
    </main>
  );
}