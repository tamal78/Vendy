import { getVendors } from "@/actions/vendor";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardPage() {
  const { vendors } = await getVendors();

  return (
    <div>
      <h1>Dashboard</h1>
      <Button>+ Add Vendor</Button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bank Account</th>
            <th>Bank Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.bankAccount}</td>
              <td>{vendor.bankName}</td>
              <td>
                {/* <Button onClick={() => alert(`Edit Vendor ${vendor.id}`)}>
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => alert(`Delete Vendor ${vendor.id}`)}
                >
                  Delete
                </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
