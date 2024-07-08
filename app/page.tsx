import { auth } from "@/auth";
import SignOut from "../components/signout";

import Image from "next/image";
import SignInForm from "../components/signin";


export default async function Home() {
  const session = await auth();
  const user = session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-5">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" alt="Trackr.gl" width={200} height={200} />
        <h1 className="text-4xl font-bold">Trackr.gl</h1>
      </div>
      <div className="flex flex-col items-center justify-center md:text-xl text-md">
        <p>Still in the works...</p>
        <p>A web app for tracking your progress on your goals.</p>
      </div>

      {
        user ? (
          <div className="flex flex-col items-center justify-center gap-4 w-[300px] h-[400px] bg-neutral-900 rounded-xl">
            <h1 className="text-2xl">Welcome 
              <span className="font-extrabold text-red-600"> {user.name}</span>
            </h1>
            <Image src={user.image || '/user-circle.svg'} priority={true} alt="User profile" width={100} height={100} className="rounded-full"/>
            <p>Email: {user.email}</p>
            <SignOut />
          </div>
        ) : <SignInForm />
      }
    </main>
  );
}