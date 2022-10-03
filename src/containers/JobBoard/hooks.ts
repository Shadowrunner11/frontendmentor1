import { useMemo } from 'react';
import { IJOb } from '../../types/job';
import { objectFlip } from '../../utils';

export const useFilterjobs =(filters: Set<string | undefined | null>, jobs: IJOb[])=>{
  return useMemo(()=>
    filters.size? 
      jobs
        .filter(({languages, tools, role, level})=>          
          [...filters]
            .every((filter)=>(
              objectFlip([...languages, ...tools, role, level])[filter as string]
            )
            )
        ) :
      jobs
  ,[filters]);
};