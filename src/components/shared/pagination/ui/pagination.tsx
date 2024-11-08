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

  if (currentPage <= 2) {
    for (let i = 0; i < 3; i++) {
      pages.push(
        <ButtonPagination
          key={i}
          text={(i + 1).toString()}
          active={currentPage === i + 1}
          onClick={() => setPage((i + 1).toString())}
        />
      )
    }
    pages.push(
      <ButtonPagination key="dots-1" variant="non-interactive" />,
      <ButtonPagination key="dots-2" variant="non-interactive" />,
      <ButtonPagination key="dots-3" variant="non-interactive" />
    )
    pages.push(
      <ButtonPagination
        key={Number.parseInt(allPages) - 1}
        text={allPages}
        active={currentPage === Number.parseInt(allPages)}
        onClick={() => setPage(allPages)}
      />
    )
  } else if (currentPage >= Number.parseInt(allPages) - 1) {
    pages.push(
      <ButtonPagination
        key={0}
        text={'1'}
        active={currentPage === 1}
        onClick={() => setPage('1')}
      />,
      <ButtonPagination key="dots-1" variant="non-interactive" />,
      <ButtonPagination key="dots-2" variant="non-interactive" />,
      <ButtonPagination key="dots-3" variant="non-interactive" />
    )
    for (
      let i = Number.parseInt(allPages) - 3;
      i < Number.parseInt(allPages);
      i++
    ) {
      pages.push(
        <ButtonPagination
          key={i}
          text={(i + 1).toString()}
          active={currentPage === i + 1}
          onClick={() => setPage((i + 1).toString())}
        />
      )
    }
  } else if (
    currentPage >= Number.parseInt(allPages) - 2 &&
    currentPage <= Number.parseInt(allPages) - 2
  ) {
    pages.push(
      <ButtonPagination
        key={0}
        text={'1'}
        active={currentPage === 1}
        onClick={() => setPage(allPages)}
      />,
      <ButtonPagination key="dots-1" variant="non-interactive" />,
      <ButtonPagination key="dots-2" variant="non-interactive" />
    )

    for (
      let i = Number.parseInt(allPages) - 4;
      i < Number.parseInt(allPages);
      i++
    ) {
      pages.push(
        <ButtonPagination
          key={i}
          text={(i + 1).toString()}
          active={currentPage === i + 1}
          onClick={() => setPage((i + 1).toString())}
        />
      )
    }
  } else if (currentPage <= 3 && currentPage >= 3) {
    for (let i = 0; i < 4; i++) {
      pages.push(
        <ButtonPagination
          key={i}
          text={(i + 1).toString()}
          active={currentPage === i + 1}
          onClick={() => setPage((i + 1).toString())}
        />
      )
    }

    pages.push(
      <ButtonPagination key="dots-1" variant="non-interactive" />,
      <ButtonPagination key="dots-2" variant="non-interactive" />
    )

    pages.push(
      <ButtonPagination
        key={Number.parseInt(allPages) - 1}
        text={allPages}
        active={currentPage === Number.parseInt(allPages)}
        onClick={() => setPage(allPages)}
      />
    )
  } else {
    pages.push(
      <ButtonPagination
        key={0}
        text={'1'}
        active={currentPage === 1}
        onClick={() => setPage(allPages)}
      />,
      <ButtonPagination key="dots-1" variant="non-interactive" />
    )

    for (let i = currentPage - 1; i < currentPage + 2; i++) {
      pages.push(
        <ButtonPagination
          key={i}
          text={i.toString()}
          active={currentPage === i}
          onClick={() => setPage(i.toString())}
        />
      )
    }

    pages.push(<ButtonPagination key="dots-2" variant="non-interactive" />)
    pages.push(
      <ButtonPagination
        key={Number.parseInt(allPages) - 1}
        text={allPages}
        active={currentPage === Number.parseInt(allPages)}
        onClick={() => setPage(allPages)}
      />
    )
  }

  return <div className="flex justify-center gap-3">{pages}</div>
}
