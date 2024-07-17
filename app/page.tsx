import { auth } from "@/auth";

import Image from "next/image";
import HabitPage from "@/components/habitPage/habitpage";
import SignInForm from "@/components/signin";


export default async function Home() {
  const session = await auth();
  const user = session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-4 px-1 gap-5">
      {user ? (
        <HabitPage />
      ): (
        <div>
          <section>
            <div className="flex flex-col items-center">
              <Image src="/logo.png" alt="Trackr.gl" width={200} height={200} />
              <h1 className="text-4xl font-bold">Trackr.gl</h1>
            </div>
            <div className="flex flex-col items-center justify-center md:text-xl text-md">
              <p>Track your daily habits.</p>
            </div>
          </section>

          <section>
            <SignInForm />
          </section>
        </div>
      )}

      
    </main>
  );
}