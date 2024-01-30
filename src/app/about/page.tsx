import Image from 'next/image'
import Link from "next/link";
import Footer from '@/components/Footer'

export default function about() {
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
          priority
        /> 
        </Link>
        
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/AIDriven.svg"
              alt="AI Driven Solutions"
              className="dark:invert"
              width={120}
              height={50}
              priority
            />
          </a>
        </div>
      </div>
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        <div className="animate-fade-in">
          <p className="mb-3">Safe Comply, LLC delivers high ROI solutions in various insurance and medical sectors.  We pride ourselves on offering tech-driven offerings and staying on the bleeding edge of the ever shfting landscape of compliance and regional fee schedule changes.</p>
          <br />
          <div>
              <ul className="list-inside list-disc indent-12">
                <li>Code Verifacation, Affidavits, Expert Witness Testimony</li>
                <li>Legal Compliance</li>
                <li>Data Informatics and Analytics Consulting</li>
                <li>AI Powered Machine Learning to identify and Mitigate Client Exposure</li>
              </ul>
            </div>
            <br />
            <p className="mb-3">This is only a fraction of the services Safe Comply, LLC provides. We invite you to get in touch with us to explore a tailored suite of solutions that can not only bolster your company&apos;s financial performance but also strategically minimize risks. Our dedicated team is ready to assess your specific needs and propose customized strategies in alignment with your business objectives, ensuring that you&apos;re not just meeting industry standards but exceeding them. Let us help you turn compliance into an asset, fortify your operations, and secure a more prosperous future for your company. Contact Safe Comply, LLC today.</p>
         </div>
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}