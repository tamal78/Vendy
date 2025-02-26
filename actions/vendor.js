"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//// 🔹 Authentication Actions 🔹 ////
export async function getSession(auth) {
  return await auth();
}

//// 🔹 Vendor CRUD Operations 🔹 ////

// ✅ Create Vendor
export async function createVendor(data) {
  try {
    const vendor = await prisma.vendor.create({ data });
    return { success: true, vendor };
  } catch (error) {
    console.error("Error creating vendor:", error);
    return { success: false, message: "Failed to create vendor" };
  }
}

// ✅ Fetch Vendors (Paginated)
export async function getVendors(page = 1, limit = 10) {
  try {
    const vendors = await prisma.vendor.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    const totalVendors = await prisma.vendor.count();
    return { vendors, total: totalVendors };
  } catch (error) {
    console.error("Error fetching vendors:", error);
    return { vendors: [], total: 0 };
  }
}

// ✅ Get Vendor by ID
export async function getVendorById(id) {
  return await prisma.vendor.findUnique({ where: { id } });
}

// ✅ Update Vendor
export async function updateVendor(id, data) {
  try {
    const updatedVendor = await prisma.vendor.update({
      where: { id },
      data,
    });
    return { success: true, vendor: updatedVendor };
  } catch (error) {
    console.error("Error updating vendor:", error);
    return { success: false, message: "Failed to update vendor" };
  }
}

// ✅ Delete Vendor
export async function deleteVendor(id) {
  try {
    await prisma.vendor.delete({ where: { id } });
    return { success: true };
  } catch (error) {
    console.error("Error deleting vendor:", error);
    return { success: false, message: "Failed to delete vendor" };
  }
}
