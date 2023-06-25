import Link from "next/link";
import Example from "./components/example";

export default function Home() {
  return (
    <body className="p-0 m-0 bg-slate-100">
      <div className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-32 pt-32">
        <div className="col-span-6">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row">
              <h1 className="text-4xl font-bold">S</h1>
              <h1 className="text-4xl font-medium">potify</h1>
              <h1 className="pl-2 text-4xl font-bold">S</h1>
              <h1 className="text-4xl font-medium">tatus</h1>
              <h1 className="pl-2 text-4xl font-bold">V</h1>
              <h1 className="text-4xl font-medium">ia</h1>
              <h1 className="pl-2 text-4xl font-bold">Lanyard</h1>
            </div>
            <p className="text-lg font-medium pt-2">Display what ur currently listening to with ur Spotify integration inside of Discord using Lanyard</p>
            <p className="pt-4 text-base font-medium">GitHub: <a href='https://github.com/v4ltages/ssvlanyard'>https://github.com/v4ltages/ssvlanyard</a></p>
            <p className="text-base font-medium">Getting started with Lanyard: <a href='https://github.com/Phineas/lanyard#get-started-in--10-seconds'>https://github.com/Phineas/lanyard#get-started-in--10-seconds</a></p>
            <Link href="/api/218972931701735424" className="pt-4 text-base font-medium">Example: https://ssvlanyard.vercel.app/api/218972931701735424</Link>
            <Example/>
          </div>
        </div>
      </div>
    </body>
  )
}
