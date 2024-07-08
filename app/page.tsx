import Image from "next/image";

export default function Home() {
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
    </main>
  );
}
