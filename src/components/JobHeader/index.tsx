import { Box, Tag, Text } from '@chakra-ui/react';

interface JobHeaderProps{
  title: string;
  isNew: boolean;
  isFeatured: boolean; 
}

const JobHeader = ({title, isNew, isFeatured}: JobHeaderProps)=>{
  return (
    <Box display='flex' gap='24px'>
      <Text color='green.500' fontWeight='bold'>
        {title}
      </Text>
      {
        isNew &&
            <Tag color='white' bg='green.400' borderRadius={16}>
              NEW!
            </Tag>
      }
      {
        isFeatured &&
            <Tag color='white' bg='blue.900' borderRadius={16}>
              Featured
            </Tag>
      }
    </Box> 
  );
};

export default JobHeader;