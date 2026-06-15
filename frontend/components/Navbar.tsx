export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">
            Civilizationn Tech Solutions
          </h2>
        </div>

        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#testimonials">Feedback</a></li>
          <li><a href="#payments">Payments</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}