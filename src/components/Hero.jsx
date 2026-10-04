function Hero() {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-5 py-16 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:gap-16">
        <div className="lg:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-wide text-chop-dark">
            Now delivering in Serrekunda, Bakau and Brusubi
          </p>
          <h1 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-ink">
            Dinner is one tap away.
          </h1>
          <p className="mt-5 max-w-prose text-base text-ink-2">
            Benachin, domoda, afra, yassa. Order from forty kitchens across the Kombos, pay on
            delivery or by mobile money, and watch your rider all the way to the gate.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-chop px-5 py-2.5 font-semibold text-on-dark transition duration-200 hover:-translate-y-0.5 hover:bg-chop-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
            >
              Get the app
            </a>
            <a
              href="#popular"
              className="group inline-flex items-center gap-1 font-semibold text-chop-dark rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
            >
              See what's popular
              <span className="transition duration-200 group-hover:translate-x-1" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className="relative mt-12 lg:mt-0 lg:w-1/2">
          <img
            src="/assets/phone.svg"
            alt="The Chop Chop app showing a kitchen menu and an order in progress"
            className="mx-auto w-56 lg:w-72"
          />
          <div className="absolute bottom-8 left-0 lg:left-8 rounded-lg border border-line bg-surface px-5 py-4">
            <p className="text-2xl font-semibold text-ink">28 min</p>
            <p className="text-sm text-ink-3">average delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
