import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface FooterProps {
  info: string[] | ReactNode[]
}

const Footer = ({info}: FooterProps)=>{
  return (
    <Box display='flex' gap={4}>
      {
        info.map((infoItem, index)=>(
          <Text color='gray.500' key={'info1'+index}>
            {infoItem}.    
          </Text>
        ))
      }
    </Box>
  );
};

export default Footer;