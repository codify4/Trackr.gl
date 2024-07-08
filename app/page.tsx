import { auth, signIn } from "@/auth";
import SignOut from "../components/signout";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";


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
            <Image src={user.image} priority={true} alt={user.name} width={100} height={100} className="rounded-full"/>
            <p>Email: {user.email}</p>
            <SignOut />
          </div>
        ) : signInForm()
      }
    </main>
  );
}

function signInForm(){
  return (
    <>
      <h1 className="flex flex-col items-center text-3xl font-bold">Sign In
        <span className="font-bold text-2xl">with</span>
      </h1>
      <section className="flex flex-row items-center justify-center gap-4 w-[350px] h-[200px] bg-neutral-900 rounded-2xl">
        <form 
          action={async () => {
            "use server"
            await signIn("google")
          }} 
        >
          <button type="submit" className="flex flex-row items-center bg-neutral-700 hover:bg-neutral-600 p-5 rounded-xl gap-1">
            <FcGoogle size={30}/>
            <span className="text-lg">Google</span>
          </button>
        </form>
      </section>
    </>
  );
}


{/* <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-5">
<div className="flex flex-col items-center">
  <Image src="/logo.png" alt="Trackr.gl" width={200} height={200} />
  <h1 className="text-4xl font-bold">Trackr.gl</h1>
</div>
<div className="flex flex-col items-center justify-center md:text-xl text-md">
  <p>Still in the works...</p>
  <p>A web app for tracking your progress on your goals.</p>
</div>
</main> */}