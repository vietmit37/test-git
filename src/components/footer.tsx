function Footer() {
  return (
    <footer className="footer text-white">
      <div className="lg:h-[200px] xl:h-[250px] sm:h-[150px] w-full" />
      <div className="container grid grid-cols-3 gap-x-4">
        <div>
          <div>
            <h1>contact</h1>
            <ul>
              <li>
                <i />
                <span>
                  1800-123-4567
                  {' '}
                  <br />
                  +91 987-654-3210
                </span
              >
              </li>
              <li>
                <span> info@example.com services@gmail.com</span>
              </li>
              <li>
                <span>
                  Demo Address #8901 Marmora Road Chi Minh City, Vietnam
                </span
                >
              </li>
            </ul>
          </div>
        </div>
        <div>Feature</div>
        <div>Support</div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>
            Copyright &copy; 2023
            . All rights
            reserved.
          </span
              >
        </div>
      </div>
    </footer>
  );
}
export default Footer;
