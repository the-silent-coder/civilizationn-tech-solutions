import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 border-r p-6">

      <h2 className="text-xl font-bold mb-8">
        CTS Admin
      </h2>

      <nav className="space-y-4">

        <Link
          href="/admin"
          className="block hover:text-cyan-500"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/contacts"
          className="block hover:text-cyan-500"
        >
          Contacts
        </Link>

        <Link
          href="/admin/articles"
          className="block hover:text-cyan-500"
        >
          Articles
        </Link>

        <Link
          href="/admin/testimonials"
          className="block hover:text-cyan-500"
        >
          Testimonials
        </Link>

        <Link
          href="/admin/employees"
          className="block hover:text-cyan-500"
        >
          Employees
        </Link>

      </nav>
    </aside>
  );
}