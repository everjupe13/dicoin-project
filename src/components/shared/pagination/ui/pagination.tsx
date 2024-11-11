import { useState } from 'react'

import { ButtonPagination } from './buttons/button-pagination'

export interface PaginationProps {
  numPage: string
  allPages: string
}

export function Pagination({ allPages, numPage }: PaginationProps) {
  const [page, setPage] = useState(numPage)

  const pages = []
  const currentPage = Number.parseInt(page)

  function checkItem(firstNum: number, lastNum: number) {
    for (let i = firstNum; i < lastNum; i++) {
      pages.push(
        <ButtonPagination
          key={i}
          text={(i + 1).toString()}
          active={currentPage === i + 1}
          onClick={() => setPage((i + 1).toString())}
        />
      )
    }
  }

  function lastBtn() {
    pages.push(
      <ButtonPagination
        key={Number.parseInt(allPages) - 1}
        text={allPages}
        active={currentPage === Number.parseInt(allPages)}
        onClick={() => setPage(allPages)}
      />
    )
  }

  function firstBtn() {
    pages.push(
      <ButtonPagination
        key={0}
        text={'1'}
        active={currentPage === 1}
        onClick={() => setPage('1')}
      />
    )
  }

  if (currentPage <= 2) {
    checkItem(0, 3)
    pages.push(
      <ButtonPagination key="dots-1" variant="non-interactive" />,
      <ButtonPagination key="dots-2" variant="non-interactive" />,
      <ButtonPagination key="dots-3" variant="non-interactive" />
    )
    lastBtn()
  } else if (currentPage >= Number.parseInt(allPages) - 1) {
    firstBtn()
    pages.push(
      <ButtonPagination key="dots-1" variant="non-interactive" />,
      <ButtonPagination key="dots-2" variant="non-interactive" />,
      <ButtonPagination key="dots-3" variant="non-interactive" />
    )
    checkItem(Number.parseInt(allPages) - 3, Number.parseInt(allPages))
  } else if (
    currentPage >= Number.parseInt(allPages) - 2 &&
    currentPage <= Number.parseInt(allPages) - 2
  ) {
    firstBtn()
    pages.push(
      <ButtonPagination key="dots-1" variant="non-interactive" />,
      <ButtonPagination key="dots-2" variant="non-interactive" />
    )
    checkItem(Number.parseInt(allPages) - 4, Number.parseInt(allPages))
  } else if (currentPage <= 3 && currentPage >= 3) {
    checkItem(0, 4)
    pages.push(
      <ButtonPagination key="dots-1" variant="non-interactive" />,
      <ButtonPagination key="dots-2" variant="non-interactive" />
    )
    lastBtn()
  } else {
    firstBtn()
    pages.push(<ButtonPagination key="dots-1" variant="non-interactive" />)
    checkItem(currentPage - 2, currentPage + 1)
    pages.push(<ButtonPagination key="dots-2" variant="non-interactive" />)
    lastBtn()
  }

  return <div className="flex justify-center gap-3">{pages}</div>
}
