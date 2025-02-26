"use client";

import { deleteVendor } from "@/actions/serverActions";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function VendorDeleteButton({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this vendor?");
    if (confirmed) {
      await deleteVendor(id);
      router.refresh();
    }
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete
    </Button>
  );
}
