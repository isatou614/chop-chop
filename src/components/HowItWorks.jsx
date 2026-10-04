import { steps } from "../data/steps.js";
import Step from "./Step.jsx";

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">How it works</h2>
        <p className="mt-3 max-w-prose text-lg text-ink-2">
          Three steps, and none of them is a phone call.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <Step key={step.label} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
