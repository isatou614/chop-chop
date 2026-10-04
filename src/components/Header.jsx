function Header() {
  return (
    <header className="border-b border-line">
      <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-lg font-semibold text-ink rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
        >
          <img src="/assets/logo.svg" alt="" className="h-8 w-8" />
          Chop Chop
        </a>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-2">
          <a
            href="#how-it-works"
            className="border-b-2 border-transparent pb-1 transition duration-200 hover:-translate-y-0.5 hover:border-chop hover:text-ink rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
          >
            How it works
          </a>
          <a
            href="#popular"
            className="border-b-2 border-transparent pb-1 transition duration-200 hover:-translate-y-0.5 hover:border-chop hover:text-ink rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
          >
            Popular
          </a>
          <a
            href="#areas"
            className="border-b-2 border-transparent pb-1 transition duration-200 hover:-translate-y-0.5 hover:border-chop hover:text-ink rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
          >
            Areas
          </a>
        </nav>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg bg-chop px-4 py-2 font-semibold text-on-dark transition duration-200 hover:-translate-y-0.5 hover:bg-chop-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}

export default Header;
