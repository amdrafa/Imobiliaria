import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChanges: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;  
    })
    .filter((page) => page > 0);
}

export function PaginationContainer({
  totalCountOfRegisters,
  registersPerPage = 6,
  currentPage = 1,
  onPageChanges,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <div
    className="flex mt-8 justify-between items-center"
    >
      <div className="flex">
        
        {currentPage > (1 + siblingsCount) && (
            <>
                <PaginationItem onPageChange={onPageChanges} number={1} />
                {currentPage > (2 + siblingsCount) && <p className="text-gray-400 w-8 items-center align-middle" ></p>}
            </>
            
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return <PaginationItem onPageChange={onPageChanges} key={page} number={page} />;
          })}

        <PaginationItem onPageChange={onPageChanges} number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem onPageChange={onPageChanges} key={page} number={page} />;
          })}

        {(currentPage + siblingsCount) < lastPage && (
            <>
                {(currentPage + 1 + siblingsCount) < lastPage && <p className="text-gray-400 w-8 items-center" ></p>}
                <PaginationItem onPageChange={onPageChanges} number={lastPage} />
            </>
            
             
        )}
      </div>
    </div>
  );
}
