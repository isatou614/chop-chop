function Footer() {
  return (
    <footer className="bg-ink border-t border-dark-line">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-lg font-semibold text-on-dark rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light"
            >
              <img src="/assets/logo.svg" alt="" className="h-8 w-8" />
              Chop Chop
            </a>
            <p className="mt-2 text-sm text-on-dark-soft">
              Hot food from the Kombos, at your door. Built in Manjai Kunda.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-12 gap-y-8">
            <div>
              <p className="text-sm font-semibold text-on-dark">Chop Chop</p>
              <ul className="mt-2 flex flex-col gap-2 text-sm">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-on-dark-soft transition duration-200 hover:text-chop-light rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#areas"
                    className="text-on-dark-soft transition duration-200 hover:text-chop-light rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light"
                  >
                    Delivery areas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-on-dark-soft transition duration-200 hover:text-chop-light rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light"
                  >
                    Get the app
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-on-dark">Kitchens</p>
              <ul className="mt-2 flex flex-col gap-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-on-dark-soft transition duration-200 hover:text-chop-light rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light"
                  >
                    Join as a kitchen
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-on-dark-soft transition duration-200 hover:text-chop-light rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light"
                  >
                    Ride with us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-on-dark">Help</p>
              <ul className="mt-2 flex flex-col gap-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-on-dark-soft transition duration-200 hover:text-chop-light rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-on-dark-soft transition duration-200 hover:text-chop-light rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-dark-line pt-6">
          <p className="text-sm text-on-dark-soft">
            © 2026 Chop Chop. A fictional company, built for CS200.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
