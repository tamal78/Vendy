"use client";

import { useEffect, useState } from "react";
import { getVendors, deleteVendor } from "@/actions/vendor";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import VendorDialog from "@/components/VendorDialogue";
import VendorDeleteDialog from "@/components/VendorDeleteButton";

export default function DashboardPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const vendorsPerPage = 5;
  const currentPage = Number(searchParams.get("page")) || 1;
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchVendors(currentPage);
  }, [currentPage]);

  const fetchVendors = async (page) => {
    setLoading(true);
    const { vendors, total } = await getVendors(page, vendorsPerPage);
    setVendors(vendors);
    setTotal(total);
    setLoading(false);
  };

  const updatePage = (newPage) => {
    router.push(`${pathname}?page=${newPage}`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400 
          hover:underline underline-offset-4 transition-all duration-300"
        >
          Vendors List
        </h1>
        <VendorDialog
          vendorId={null}
          onDone={() => fetchVendors(currentPage)}
        />
      </div>

      <div className="overflow-x-auto bg-background rounded-lg shadow-md border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted">
              <TableHead className="text-center">Vendor Name</TableHead>
              <TableHead className="text-center">Bank Account No.</TableHead>
              <TableHead className="text-center">Bank Name</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              [...Array(vendorsPerPage)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center">
                    <Skeleton className="h-4 w-[120px] mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Skeleton className="h-4 w-[140px] mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Skeleton className="h-4 w-[120px] mx-auto" />
                  </TableCell>
                  <TableCell className="text-center flex justify-center gap-3">
                    <Skeleton className="h-8 w-8 rounded-md" />
                    <Skeleton className="h-8 w-8 rounded-md" />
                  </TableCell>
                </TableRow>
              ))
            ) : vendors.length > 0 ? (
              vendors.map((vendor) => (
                <TableRow key={vendor.id}>
                  <TableCell className="text-center">{vendor.name}</TableCell>
                  <TableCell className="text-center">
                    {vendor.bankAccount}
                  </TableCell>
                  <TableCell className="text-center">
                    {vendor.bankName}
                  </TableCell>
                  <TableCell className="text-center flex justify-center gap-3">
                    <VendorDialog
                      vendorId={vendor.id}
                      onDone={() => fetchVendors(currentPage)}
                    />
                    <VendorDeleteDialog
                      vendorId={vendor.id}
                      onDone={() => fetchVendors(currentPage)}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center p-4">
                  No vendors found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end items-center mt-4">
        <Pagination>
          <PaginationContent className="ml-auto flex gap-1">
            <PaginationItem>
              <PaginationPrevious
                href={`${pathname}?page=${currentPage - 1}`}
                onClick={(e) => {
                  if (currentPage === 1) e.preventDefault();
                  else updatePage(currentPage - 1);
                }}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {Array.from({
              length: Math.min(3, Math.ceil(total / vendorsPerPage)),
            }).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    href={`${pathname}?page=${pageNumber}`}
                    isActive={currentPage === pageNumber}
                    onClick={(e) => {
                      if (currentPage === pageNumber) e.preventDefault();
                      else updatePage(pageNumber);
                    }}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {Math.ceil(total / vendorsPerPage) > 3 &&
              currentPage < Math.ceil(total / vendorsPerPage) - 1 && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href={`${pathname}?page=${Math.ceil(
                        total / vendorsPerPage
                      )}`}
                      isActive={
                        currentPage === Math.ceil(total / vendorsPerPage)
                      }
                      onClick={(e) => {
                        if (currentPage === Math.ceil(total / vendorsPerPage))
                          e.preventDefault();
                        else updatePage(Math.ceil(total / vendorsPerPage));
                      }}
                    >
                      {Math.ceil(total / vendorsPerPage)}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

            <PaginationItem>
              <PaginationNext
                href={`${pathname}?page=${currentPage + 1}`}
                onClick={(e) => {
                  if (currentPage * vendorsPerPage >= total) e.preventDefault();
                  else updatePage(currentPage + 1);
                }}
                disabled={currentPage * vendorsPerPage >= total}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
