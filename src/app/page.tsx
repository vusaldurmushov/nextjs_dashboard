import Link from "next/link";

export default function Home() {
  return (

    <div>
      <main className="flex flex-col justify-center text-center">
        <div>
          <h1>Dan&apos;s Compyuter <br/> Repair Shop</h1>
          <address> 555 Gatway Lane <br/></address>
          <p>Open Daily: 9am to 5 pm</p>
          <Link href="tel:55555555" className="hover:underline">555-5555-555 </Link>
        </div>
      </main>
    </div>
 
  );
}
