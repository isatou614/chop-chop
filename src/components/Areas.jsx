import { areas } from "../data/areas.js";
import AreaRow from "./AreaRow.jsx";

function Areas() {
  return (
    <section id="areas" className="bg-surface">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">Where we deliver</h2>
        <p className="mt-3 max-w-prose text-lg text-ink-2">
          Typical time from the kitchen to your gate. Lamin and Banjul open at lunch and dinner
          only.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <AreaRow key={area.name} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;
