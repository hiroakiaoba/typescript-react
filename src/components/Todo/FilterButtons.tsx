import React from 'react';

import { FilterCondition } from 'services/models';

export interface FilterButtonsProps {
  handleFilterTodos: (condition: FilterCondition) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = React.memo(
  ({ handleFilterTodos }) => {
    console.log('render FilterButtons component');

    return (
      <>
        filter:
        <button type="button" onClick={() => handleFilterTodos('ALL')}>
          show all
        </button>
        <button type="button" onClick={() => handleFilterTodos('COMPLETED')}>
          completed
        </button>
        <button
          type="button"
          onClick={() => handleFilterTodos('NOT_COMPLETED')}
        >
          not completed
        </button>
      </>
    );
  },
);

export default FilterButtons;
