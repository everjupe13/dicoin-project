import { DOTS_CODE, usePagination } from '../hooks/usePagination'
import { ButtonPagination } from './buttons/button-pagination'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: PaginationProps) {
  const paginationPagesList = usePagination({ totalPages, currentPage })

  const determineButtonVariant = (page: string | number) => {
    return page === DOTS_CODE ? 'non-interactive' : 'interactive'
  }

  const handlePageChange = (page: string | number) => {
    if (page === DOTS_CODE) {
      return
    }

    if (Number.isInteger(Number(page))) {
      onPageChange?.(Number(page))
    }
  }

  if (totalPages < 2) {
    return null
  }

  return (
    <div className="flex justify-center gap-3">
      {paginationPagesList.map((page, index) => (
        <ButtonPagination
          key={index}
          active={Number(page) === currentPage}
          variant={determineButtonVariant(page)}
          text={page}
          onClick={() => handlePageChange(page)}
        />
      ))}
    </div>
  )
}
