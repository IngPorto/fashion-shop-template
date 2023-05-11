import { iCategory } from "@type/components/Category.type";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function CategoryGrid({
  categories,
}: {
  categories: iCategory[];
}) {
  return (
    <section>
      <div className="text-center my-12">
        <h2 className="mb-2 text-4xl font-semibold tracking-wide uppercase">
          FALL READY NOW!
        </h2>
        <p className="">Everything you need to greet the season in style.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 overflow-hidden mb-4">
        {!!categories &&
          categories.map((category) => (
            <CategoryCard key={category.key} categoryData={category} />
          ))}
      </div>
    </section>
  );
}
