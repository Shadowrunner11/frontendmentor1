import { Box, Tag, Text } from '@chakra-ui/react';

interface JobContentProps{
  title: string;
  tags: string[];
  onClick?: (data: any)=>void
}

const JobContent = ({title, tags, onClick=()=>void(0)}: JobContentProps)=>{

  return(
    <Box display='flex' justifyContent='space-between'>
      <Text _hover={{color:'green.500', cursor:'pointer'}} fontWeight='bold'>
        {title}
      </Text>
      <Box display='flex' gap='4px'>
        {
          tags.map((tag, index)=>{
            const handleclick= ()=>{
              onClick(tag);
            };
            return (
              <Tag
                color='green.500'
                _hover={{bg:'green.500',color:'white', cursor:'pointer'}}
                onClick={handleclick} 
                key={'tag'+index}>
                {tag}
              </Tag>
            );})
        }
      </Box>
    </Box>
  );
};

export default JobContent;