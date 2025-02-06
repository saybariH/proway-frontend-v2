import * as React from 'react';
import {PaginationProps} from './Projects';

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex gap-2 justify-center items-center mt-5 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-2 items-center self-stretch my-auto">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="flex flex-col justify-center items-center self-stretch my-auto rounded-md bg-slate-100 h-[25px] min-h-[25px] w-[25px]"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/998c24bdc8cce792af4c393f3d140e476ba865b9b094af14975ffc9b6479c2af?placeholderIfAbsent=true&apiKey=c954eb84ba4d40a9a189795a2cb391b3"
            alt=""
            className="object-contain aspect-[0.94] w-[17px]"
          />
        </button>
        {[1, 2, '...', 9, 10].map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            className={`self-stretch my-auto text-sm text-center whitespace-nowrap rounded-md h-[25px] min-h-[25px] w-[25px]
              ${currentPage === page ? 'bg-primary text-white' : 'bg-bg-light bg-opacity-10 text-slate-900'}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="flex flex-col justify-center items-center self-stretch my-auto rounded-md bg-slate-100 h-[25px] min-h-[25px] w-[25px]"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c201761bd971341b5234091d2d1e9bb178be39adda84897ec34cfeb71afe57ac?placeholderIfAbsent=true&apiKey=c954eb84ba4d40a9a189795a2cb391b3"
            alt=""
            className="object-contain aspect-[0.94] w-[17px]"
          />
        </button>
      </div>
    </div>
  );
};
 