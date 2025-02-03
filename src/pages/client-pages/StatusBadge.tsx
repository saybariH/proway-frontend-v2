import * as React from 'react';
import { StatusBadgeProps } from './InvitationManagement';

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    Registred: 'bg-bg-green text-green',
    Pending: 'bg-bg-orange text-orange',
    Incomplet: 'bg-[#E51638] bg-opacity-10 text-red'
  };

  return (
    <div className="flex flex-col text-xs font-semibold text-center w-[148px]">
      <div className={`font-lufga text-[14px] font-regular min-h-[30px] p-[10px] rounded-[40px] w-[85px] ${styles[status]}`}>
        {status}
      </div>
    </div>
  );
};