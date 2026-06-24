export default function AdminDashboard() {
  return (
    <main className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="p-6 rounded-xl border">
          <h2 className="font-semibold">
            Contact Requests
          </h2>

          <p className="text-sm text-foreground/70">
            Manage customer inquiries
          </p>
        </div>

        <div className="p-6 rounded-xl border">
          <h2 className="font-semibold">
            Articles
          </h2>

          <p className="text-sm text-foreground/70">
            Manage employee articles
          </p>
        </div>

        <div className="p-6 rounded-xl border">
          <h2 className="font-semibold">
            Testimonials
          </h2>

          <p className="text-sm text-foreground/70">
            Manage client feedback
          </p>
        </div>

        <div className="p-6 rounded-xl border">
          <h2 className="font-semibold">
            Employees
          </h2>

          <p className="text-sm text-foreground/70">
            Manage company users
          </p>
        </div>

      </div>

    </main>
  );
}