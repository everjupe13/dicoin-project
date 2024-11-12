import { useMemo } from 'react'

export interface UsePaginationProps {
  currentPage: number
  totalPages: number
  siblingsCount?: number
}

export const DOTS_CODE = '...'

/**
 * Create an array from startNumber to endNumber
 * @param startNumber - number from
 * @param endNumber - number to
 * @example buildIncrementedNumbersArray(1, 5) // [1, 2, 3, 4, 5]
 * @example buildIncrementedNumbersArray(3, 5) // [3, 4, 5]
 */
function buildIncrementedNumbersArray(startNumber: number, endNumber: number) {
  const length = endNumber - startNumber + 1
  return Array.from({ length }, (_, i) => i + startNumber)
}

export function usePagination({
  currentPage,
  totalPages,
  siblingsCount = 1
}: UsePaginationProps) {
  const paginationPagesList = useMemo(() => {
    const maxButtonsCount = siblingsCount + 5 // first + last + current + 2 dots

    if (maxButtonsCount >= totalPages - 1) {
      return buildIncrementedNumbersArray(1, totalPages)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingsCount, totalPages)

    const isLeftEdgeCollapsed = leftSiblingIndex > 2
    const isRightPageCollapsed = rightSiblingIndex < totalPages - 2

    if (!isLeftEdgeCollapsed && isRightPageCollapsed) {
      const leftEdgeLastNumber = 3 + 2 * siblingsCount
      const rightEdgeFirstNumber = totalPages

      return [
        ...buildIncrementedNumbersArray(1, leftEdgeLastNumber),
        DOTS_CODE,
        ...buildIncrementedNumbersArray(rightEdgeFirstNumber, totalPages)
      ]
    }

    if (isLeftEdgeCollapsed && isRightPageCollapsed) {
      const leftEdgeLastNumber = 1
      const rightEdgeFirstNumber = totalPages
      return [
        ...buildIncrementedNumbersArray(1, leftEdgeLastNumber),
        DOTS_CODE,
        ...buildIncrementedNumbersArray(leftSiblingIndex, rightSiblingIndex),
        DOTS_CODE,
        ...buildIncrementedNumbersArray(rightEdgeFirstNumber, totalPages)
      ]
    }

    if (isLeftEdgeCollapsed && !isRightPageCollapsed) {
      const leftEdgeLastNumber = 1
      const rightEdgeFirstNumber = 3 + 2 * siblingsCount
      return [
        ...buildIncrementedNumbersArray(1, leftEdgeLastNumber),
        DOTS_CODE,
        ...buildIncrementedNumbersArray(
          totalPages - rightEdgeFirstNumber + 1,
          totalPages
        )
      ]
    }

    return []
  }, [totalPages, currentPage, siblingsCount])

  return paginationPagesList
}
