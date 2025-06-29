import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const usePagination = (key?: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    searchParams.get(key ?? "page") ?? "1"
  );

  useEffect(() => {
    setSearchParams({ [key ?? "page"]: currentPage });
  }, [currentPage]);

  return {
    currentPage,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onPageChange: (v: any) => setCurrentPage(String(v)),
  };
};
