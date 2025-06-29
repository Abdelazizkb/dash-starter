import React from "react";
import {
  Pagination as BasePagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface IProps {
  currentPage: string;
  totalPages: number;
  onPageChange: (v: string | number) => void;
}

const Pagination: React.FC<IProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <BasePagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => onPageChange(parseInt(currentPage) - 1)}
          />
        </PaginationItem>

        {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, i) => (
          <PaginationItem key={i + 1}>
            <PaginationLink
              href="#"
              isActive={parseInt(currentPage) === i + 1}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => onPageChange(parseInt(currentPage) + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </BasePagination>
  );
};

export default Pagination;
