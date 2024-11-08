import { useState } from 'react'

import { BtnPagination } from './Btn-pagination'
import { BtnSpredPagination } from './Btn-spred-pagination'

interface PaginationProps {
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
        <BtnPagination
          key={i}
          text={(i + 1).toString()}
          color={currentPage === i + 1 ? 'opacity-50' : undefined}
          onClick={() => setPage((i + 1).toString())}
        />
      )
    }
    pages.push(
      <BtnSpredPagination key="dots-1" />,
      <BtnSpredPagination key="dots-2" />,
      <BtnSpredPagination key="dots-3" />
    )
    pages.push(
      <BtnPagination
        key={Number.parseInt(allPages) - 1}
        text={allPages}
        color={
          currentPage === Number.parseInt(allPages) ? 'opacity-50' : undefined
        }
        onClick={() => setPage(allPages)}
      />
    )
  } else if (currentPage >= Number.parseInt(allPages) - 1) {
    pages.push(
      <BtnPagination
        key={0}
        text={'1'}
        color={currentPage === 1 ? 'opacity-50' : undefined}
        onClick={() => setPage('1')}
      />,
      <BtnSpredPagination key="dots-1" />,
      <BtnSpredPagination key="dots-2" />,
      <BtnSpredPagination key="dots-3" />
    )
    for (
      let i = Number.parseInt(allPages) - 3;
      i < Number.parseInt(allPages);
      i++
    ) {
      pages.push(
        <BtnPagination
          key={i}
          text={(i + 1).toString()}
          color={currentPage === i + 1 ? 'opacity-50' : undefined}
          onClick={() => setPage((i + 1).toString())}
        />
      )
    }
  } else if (
    currentPage >= Number.parseInt(allPages) - 2 &&
    currentPage <= Number.parseInt(allPages) - 2
  ) {
    pages.push(
      <BtnPagination
        key={0}
        text={'1'}
        color={currentPage === 1 ? 'opacity-50' : undefined}
        onClick={() => setPage(allPages)}
      />,
      <BtnSpredPagination key="dots-1" />,
      <BtnSpredPagination key="dots-2" />
    )

    for (
      let i = Number.parseInt(allPages) - 4;
      i < Number.parseInt(allPages);
      i++
    ) {
      pages.push(
        <BtnPagination
          key={i}
          text={(i + 1).toString()}
          color={currentPage === i + 1 ? 'opacity-50' : undefined}
          onClick={() => setPage((i + 1).toString())}
        />
      )
    }
  } else if (currentPage <= 3 && currentPage >= 3) {
    for (let i = 0; i < 4; i++) {
      pages.push(
        <BtnPagination
          key={i}
          text={(i + 1).toString()}
          color={currentPage === i + 1 ? 'opacity-50' : undefined}
          onClick={() => setPage((i + 1).toString())}
        />
      )
    }

    pages.push(
      <BtnSpredPagination key="dots-1" />,
      <BtnSpredPagination key="dots-2" />
    )

    pages.push(
      <BtnPagination
        key={Number.parseInt(allPages) - 1}
        text={allPages}
        color={
          currentPage === Number.parseInt(allPages) ? 'opacity-50' : undefined
        }
        onClick={() => setPage(allPages)}
      />
    )
  } else {
    pages.push(
      <BtnPagination
        key={0}
        text={'1'}
        color={currentPage === 1 ? 'opacity-50' : undefined}
        onClick={() => setPage(allPages)}
      />,
      <BtnSpredPagination key="dots-1" />
    )

    for (let i = currentPage - 1; i < currentPage + 2; i++) {
      pages.push(
        <BtnPagination
          key={i}
          text={i.toString()}
          color={currentPage === i ? 'opacity-50' : undefined}
          onClick={() => setPage(i.toString())}
        />
      )
    }

    pages.push(<BtnSpredPagination key="dots-2" />)
    pages.push(
      <BtnPagination
        key={Number.parseInt(allPages) - 1}
        text={allPages}
        color={
          currentPage === Number.parseInt(allPages) ? 'opacity-50' : undefined
        }
        onClick={() => setPage(allPages)}
      />
    )
  }

  return <div className="flex justify-center gap-3">{pages}</div>
}
