import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Image src="/logo.png" alt="Trackr.gl" width={200} height={200} />
      <h1 className="text-4xl font-bold">Trackr.gl</h1>
    </main>
  );
}
