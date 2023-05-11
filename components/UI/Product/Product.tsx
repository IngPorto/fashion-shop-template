import { iProduct } from "@type/components/Product.type";
import Image from "next/image";

export default function Product({ productData }: { productData: iProduct }) {
    return (
      <div className="flex flex-col items-center text-center mb-10">
        <div className="mb-2">
          <span className="box-border inline-block overflow-hidden w-[263px] h-[365px] relative">
            <Image
              alt="hp_cat_tops.jpg"
              src={productData.src}
              decoding="async"
              data-nimg="fixed"
              className="absolute m-auto block min-w-full min-h-full"
              width={263}
              height={365}
            />
          </span>
        </div>
        <a
          className="mt-4 uppercase font-semibold tracking-wide text-xs text-slate-900 bg-white rounded-full px-4 py-3 border border-slate-400 hover:border-black transition ease-linear duration-150"
          href="/"
        >
          {productData.name}
        </a>
      </div>
    );
  }