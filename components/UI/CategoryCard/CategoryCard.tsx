import { iCategory } from "@type/components/Category.type";
import Image from "next/image";

export default function CategoryCard({
  categoryData,
}: {
  categoryData: iCategory;
}) {
  return (
    <div className="flex flex-col items-center text-center mb-10 overflow-hidden">
      <div className="mb-2">
        <span className="box-border block overflow-hidden relative w-[365px] h-[365px]">
          <Image
            alt="hp_holidaycloset1.jpg"
            src={categoryData.src}
            decoding="async"
            data-nimg="fixed"
            className="absolete m-auto block min-w-full min-h-full"
            width={365}
            height={365}
          />
        </span>
      </div>
      <h2 className="mb-2 text-lg font-medium tracking-wide uppercase">
        {categoryData.title}
      </h2>
      <div className="mb-2 px-4">{categoryData.description}</div>
      <a
        className="mt-4 uppercase font-semibold tracking-wide text-xs text-slate-900 bg-white rounded-full px-4 py-3 border border-slate-400 hover:border-black transition ease-linear duration-150"
        href="/"
      >
        {!!categoryData.textButton ? categoryData.textButton : "Shop Now"}
      </a>
    </div>
  );
}
