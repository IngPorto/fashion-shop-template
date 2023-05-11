import Image from "next/image";

export default function AdTypeB() {
  return (
    <div className="py-10 relative flex items-center justify-center mb-4 text-white bg-gradient-to-r from-red-dark to-red-light min-h-[220px]">
      <div className="absolute inset-0 overflow-hidden">
        <span className="box-border block overflow-hidden">
          <Image
            alt="img"
            sizes="100vw"
            src="https://images.unsplash.com/photo-1672397251642-d6583bf11d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&h=300&q=75"
            decoding="async"
            data-nimg="fill"
            className="absolute block object-fill border-box min-w-full min-h-full m-auto"
            width={1080}
            height={300}
          />
        </span>
      </div>
      <div className="relative z-10 text-center my-2 mx-6">
        <h2 className="mb-2 text-2xl font-medium tracking-wide"></h2>
        <div className="Hero_description__qhVfY mb-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-center">Introducing</p>
            <p className="text-center m-auto text-7xl">
              afterpay
            </p>
            <p className="text-center">Chicas NOW. Pay LATER.</p>
            <p className="text-center">
              (With easy, interest-free installments)
            </p>
          </div>
        </div>
        <a
          className="uppercase font-semibold tracking-wide text-xs text-slate-900 bg-slate-200 rounded-full px-4 py-3 border border-slate-400 hover:border-black transition ease-linear duration-150"
          href="/"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
