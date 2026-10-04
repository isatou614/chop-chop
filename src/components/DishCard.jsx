const badgeClasses = {
  chop: "bg-chop-soft text-chop-dark",
  leaf: "bg-leaf-soft text-leaf",
};

function DishCard({ image, name, badge, badgeVariant, vendor, price }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-line bg-surface transition duration-200 hover:-translate-y-1">
      <img src={image} alt="" className="aspect-3/2 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-ink">{name}</h3>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeClasses[badgeVariant]}`}
          >
            {badge}
          </span>
        </div>
        <p className="mt-1 text-sm text-ink-3">{vendor}</p>
        <div className="pt-5 flex items-center justify-between">
          <p className="text-lg font-semibold text-ink">{price}</p>
          <button
            type="button"
            className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink transition duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-on-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default DishCard;
