import { dishes } from "../data/dishes.js";
import DishCard from "./DishCard.jsx";

function Popular() {
  return (
    <section id="popular" className="bg-cream">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">Popular this week</h2>
        <p className="mt-3 max-w-prose text-lg text-ink-2">
          What the Kombos ordered most in the last seven days.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <DishCard key={dish.name} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
