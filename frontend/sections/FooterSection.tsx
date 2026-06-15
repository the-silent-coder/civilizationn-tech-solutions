export default function FooterSection() {
  return (
    <footer className="border-t py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">

        <div>
          <h3 className="font-bold text-xl">
            Civilizationn Tech Solutions
          </h3>

          <p className="text-gray-600 mt-2">
            Any Tech Solutions You Need,
            We Have Your Back.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <p>
            © {new Date().getFullYear()} Civilizationn Tech Solutions
          </p>
        </div>

      </div>
    </footer>
  );
}