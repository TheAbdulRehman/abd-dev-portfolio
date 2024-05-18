import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-white" />
      <h2 className="text-2xl font-semibold text-white">Oops</h2>
      <p className="text-white">Could not find the requested page.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-white px-4 py-2 text-sm text-black transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}
