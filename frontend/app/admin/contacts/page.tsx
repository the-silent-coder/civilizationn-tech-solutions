export default function ContactsPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Contact Requests
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border">

          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="p-4">Demo User</td>
              <td className="p-4">
                demo@example.com
              </td>
              <td className="p-4">
                NEW
              </td>
              <td className="p-4">
                2026-06-25
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}