"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const getPageNumbers = () => {
        const pages = []
        const maxVisiblePages = 5

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i)
                }
                pages.push("...")
                pages.push(totalPages)
            } else if (currentPage >= totalPages - 2) {
                pages.push(1)
                pages.push("...")
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i)
                }
            } else {
                pages.push(1)
                pages.push("...")
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i)
                }
                pages.push("...")
                pages.push(totalPages)
            }
        }

        return pages
    }

    if (totalPages <= 1) return null

    return (
        <div className="flex items-center justify-center space-x-2 mt-12">
            {/* Previous button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#EAE7E3] text-[#333333] hover:bg-[#F8F5F2] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
                <ChevronLeft size={16} />
            </button>

            {/* Page numbers */}
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === "number" && onPageChange(page)}
                    disabled={page === "..."}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${page === currentPage
                            ? "bg-[#465775] text-white shadow-lg"
                            : page === "..."
                                ? "cursor-default text-[#333333] opacity-50"
                                : "bg-white border border-[#EAE7E3] text-[#333333] hover:bg-[#F8F5F2]"
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Next button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#EAE7E3] text-[#333333] hover:bg-[#F8F5F2] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
                <ChevronRight size={16} />
            </button>
        </div>
    )
}
