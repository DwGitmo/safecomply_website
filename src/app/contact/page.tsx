import Image from 'next/image'
import Link from "next/link";
import Footer from '@/components/Footer'

export default function contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
                <Link href="/" className="relative flex items-baseline left-2 -top-12  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
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
            </div> 

         

            <div className="z-10 max-w-5xl -top-12 w-full grid grid-flow-col gap--1 ">

                <div className="bg-gradient-to-r col-span-4 from-transparent to-gray-900 shadow-md rounded-md border-single border-2 border-gray-600">
                    <form className="container max-w-md mx-auto my-12 p-6 bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg  rounded-md border-double border-4 border-sky-500">
                        <h1 className="text-2xl font-bold mb-4 from-gray-200 ">Let's Talk About Your Project: </h1>
                        <div className="mb-4">
                            <label htmlFor="frm-email" className="blockfrom-gray-200 text-sm font-bold mb-2">Email</label>
                            <input
                                id="frm-email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none dark:invert focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="frm-phone" className="blockfrom-gray-200 text-sm font-bold mb-2">Phone: </label>
                            <input
                                id="frm-phone"
                                type="text"
                                name="phone"
                                autoComplete="tel"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline dark:invert"
                            />
                        </div>
                        <div className="mb-4 grid grid-cols-1 gap-4">
                            <div>
                                <label htmlFor="frm-first" className="block from-gray-200 text-sm font-bold mb-2">Name</label>
                                <input
                                    id="frm-name"
                                    type="text"
                                    name="first"
                                    autoComplete="given-name"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:invert leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                        </div>
                        <div className="mb-6">
                            <label htmlFor="frm-message" className="block from-gray-200 text-sm font-bold mb-2">Message</label>
                            <textarea id="frm-message" rows="6" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 from-gray-200 leading-tight focus:outline-none focus:shadow-outline text-black dark:invert"></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-span-1 my-6 p-6 bg-gradient-to-r from-transparent to-gray-900 shadow-md rounded-md border-single border-2 border-gray-700">
                    
                    <div className="mx-auto mb-6 text-center p-5 mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <h6 className="font-medium">418 Broadway #8206</h6><h6>Albany, NY 12207</h6>
                    </div>
                    <div className="mx-auto mb-6 text-center p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <h6 className="font-medium">212-222-4444</h6>
                    </div>
                    <div className="mx-auto text-center p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                        <h6 className="font-medium">Tax ID: 273 384</h6>
                    </div>
                </div>
            </div>

            
        </main>
    );
}