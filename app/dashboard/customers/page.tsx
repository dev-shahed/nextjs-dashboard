import { Metadata } from "next";
import React, { Suspense } from "react";
import Table from "@/app/ui/customers/table";
import { InvoiceSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = 3;

  return (
    <>
      <Suspense fallback={<InvoiceSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </>
  );
}
