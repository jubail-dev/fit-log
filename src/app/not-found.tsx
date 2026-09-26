
import Link from "next/link";
import { FaArrowLeft, FaDumbbell } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0F1117] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#C2F800]/10 border border-[#C2F800]/20">
          <FaDumbbell className="text-3xl text-[#C2F800]" />
        </div>

        {/* 404 */}
        <h1 className="text-[100px] sm:text-[140px] font-black leading-none tracking-tight text-[#C2F800]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-2xl sm:text-4xl font-bold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm sm:text-base leading-7 text-gray-400">
          Looks like this workout page took a rest day.
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:bg-[#b2e600] hover:-translate-y-0.5"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

      </div>
    </main>
  );
};

export default NotFound;
