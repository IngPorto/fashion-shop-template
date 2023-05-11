import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center text-center mb-4 bg-red min-h-[467px]">
      <div className="absolute inset-0 overflow-hidden">
        <span className="box-border block overflow-hidden">
          <Image
            alt="img"
            width={1470}
            height={1000}
            src="https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="absolute object-cover object-center min-w-full min-h-full"
          />
        </span>
      </div>
      <div className="bg-white bg-opacity-90 p-10 m-6 max-w-2xl z-10">
        <h2 className="text-2xl font-bold px-12 mb-2">SUIT YOURSELF</h2>
        <div className="mb-6">
          <p>
            New swim is in! Our best-selling quilted jacket chases away
            <br />
            the chill in new colors and prints, with
            <br />
            contrasting details.
          </p>
        </div>
        <a
          className="uppercase font-semibold tracking-wide text-xs text-slate-100 bg-slate-900 rounded-full px-4 py-3 hover:bg-black transition-colors ease-in duration-150"
          href="/"
        >
          SHOP SWIM
        </a>
      </div>
    </div>
  );
}
