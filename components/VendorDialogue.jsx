"use client";

import { useState } from "react";
import { createVendor, updateVendor } from "@/actions/serverActions";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function VendorDialog({ vendor = null }) {
  const router = useRouter();
  const [formData, setFormData] = useState(
    vendor || { name: "", bankAccount: "", bankName: "" }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (vendor) {
      await updateVendor(vendor.id, formData);
    } else {
      await createVendor(formData);
    }
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{vendor ? "Edit Vendor" : "+ Add Vendor"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{vendor ? "Edit Vendor" : "Create Vendor"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Vendor Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Bank Account No"
            required
            value={formData.bankAccount}
            onChange={(e) =>
              setFormData({ ...formData, bankAccount: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Bank Name"
            required
            value={formData.bankName}
            onChange={(e) =>
              setFormData({ ...formData, bankName: e.target.value })
            }
          />
          <Button type="submit">
            {vendor ? "Update Vendor" : "Create Vendor"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
