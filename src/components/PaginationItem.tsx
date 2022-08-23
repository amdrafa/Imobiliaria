
interface PaginationItemProps{
    isCurrent?: boolean;
    number: number;
    onPageChange: (page: number) => void;
}

export function PaginationItem({isCurrent = false, number, onPageChange}: PaginationItemProps){
    
    if(isCurrent){
        return (
            <button
                className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white mx-2`}
                disabled
                >
                    {number}
            </button>
        )
    }

    return (
        <button 
            className="mx-1.5 inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`"
            onClick={() => onPageChange(number)}
            >
                {number}
        </button>
    )


}