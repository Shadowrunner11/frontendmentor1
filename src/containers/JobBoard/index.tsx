import { Avatar, Box, List, Text } from '@chakra-ui/react';
import { memo, useCallback, useState } from 'react';
import FilterChip from '../../components/FilterChip';
import JobContent from '../../components/JobContent';
import Footer from '../../components/JobFooter';
import JobHeader from '../../components/JobHeader';
import { IJOb as IJob } from '../../types/job';
import JobListItem from '../JobListItem';
import { useFilterjobs } from './hooks';

interface JobBoardProps{
  jobs: IJob[]
}

const JobBoard = ({jobs}: JobBoardProps)=>{
  const [filters, setFilters] = useState(new Set<string | undefined>([]));
  console.log('render');
  const filteredJobs = useFilterjobs(filters, jobs);

  const _handleClick = useCallback((newFilter: string)=>{
    setFilters(prev=> {
      if(prev.size === prev.add(newFilter).size)
        return prev;
      return new Set(prev.add(newFilter));
    }
    );
  },[]);

  const _handleCloseChip = useCallback((filter: string)=>{
    setFilters(prev => {
      prev.delete(filter);
      return new Set(prev);
    });
  },[]);

  return (
    <Box display='flex' flexDirection='column' gap={8}>
      <Box 
        display='flex' 
        justifyContent='space-between'
        height={10}
        padding={8}
        alignItems='center'
        boxShadow='4px 9px 20px 0px #739772'>
        <Box 
          display='flex'
          gap={4} 
        >
          {
            [...filters].map((filter,i)=>(
              <FilterChip onClose={_handleCloseChip} label={String(filter)} key={i} />
            ))
          }
        </Box>
        <Text _hover={{cursor: 'pointer'}} onClick={()=>{setFilters(new Set([]));}}>
          Clear
        </Text>
      </Box>
      <List display='flex' flexDirection='column' gap='24px'>
        {filteredJobs.map((job, index)=>(
          <JobListItem 
            header={<JobHeader title={job.company} isFeatured={job.featured} isNew={job.new}/>}
            index={index}
            content={
              <JobContent
                onClick={_handleClick} 
                title={job.position}
                tags={[job.role, job.level, ...job.languages, ...job.tools]}
              />
            }
            footer={<Footer info={[job.postedAt, job.contract, job.location]}/>}
            icon={<Avatar src={job.logo} />}
            key={'jobitem'+job.id+index}
          />
        ))}
      </List>
    </Box>
  );
};

export default memo(JobBoard);