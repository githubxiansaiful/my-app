import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-10 my-10">
        <h1>Welcome to My App</h1>
        <p>This is the home page of my Next.js application.</p>
      </div>
      <div>
        <Link href="/booking-form">Go to Booking Form</Link>
      </div>
    </>
  );
}
