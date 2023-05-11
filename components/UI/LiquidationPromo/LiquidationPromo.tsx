import Image from "next/image";
import Link from "next/link";

export default function LiquidationPromo() {
  return (
    <div className="min-h-[467px] flex flex-row relative mb-4">
      <div className="absolute inset-0 overflow-hidden">
        <span className="box-border block opacity-80 relative top-0 left-0">
          <Image
            alt="img"
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            decoding="async"
            className="absolute block object-cover object-center min-w-full min-h-full"
            sizes="100vw"
            width={900}
            height={900}
          />
        </span>
      </div>
      <div className="flex-1"></div>
      <div className="flex flex-1 flex-col items-center justify-center z-10 bg-gray-50 md:bg-transparent px-6 m-6 md:p-0 md:m-0">
        <div className="max-w-md py-4">
          <p></p>
          <p className="text-center">
            <strong>
              <br />
            </strong>
          </p>
          <p className="text-center">
            <strong>
              Our best-selling quilted jacket chases away the chill in new
              colors and prints, with contrasting details.
            </strong>
          </p>
          <p></p>
        </div>
        <Link
          className="uppercase font-semibold tracking-wide text-xs text-slate-100 bg-slate-900 rounded-full px-4 py-3 hover:bg-black transition-colors ease-in duration-150"
          href="/"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
