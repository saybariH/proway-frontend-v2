import * as React from 'react';
import { StatusBadgeProps } from './InvitationManagement';

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    Registred: 'bg-green-100 text-emerald-700',
    Pending: 'bg-[#FFD9BF] text-[#EC8200]',
    Incomplet: 'bg-[#E51638] bg-opacity-10 text-[#FC5185]'
  };

  return (
    <div className="flex flex-col text-xs font-semibold text-center w-[148px]">
      <div className={`font-lufga text-[14px] font-regular min-h-[30px] p-[10px] rounded-[40px] w-[85px] ${styles[status]}`}>
        {status}
      </div>
    </div>
  );
};