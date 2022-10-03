import { Box, keyframes, ListItem } from '@chakra-ui/react';
import {ReactNode, memo} from 'react';

interface JobListItemProps {
  icon: ReactNode;
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  onHover?: ()=>void;
  index?: number
}

const JobListItem = ({icon, header, content, footer, onHover, index}:JobListItemProps )=>{
  const enter = keyframes`
    0%{
      transform: translateX(-10px);
    }
    50%{
      transform: translateX(10px)
    }
  `;

  return(
    <ListItem
      animation={`${enter} ${1.2+(((index?? 1)-1))/4}s ease-in ${(((index?? 1)-1))/4}s`}
      onMouseOver={onHover}
      padding={4} 
      display='flex'
      gap='48px'
      alignItems='center'
      justifyContent='space-between'
      boxShadow='4px 9px 20px 0px #739772'>
      {icon}
      <Box width='100%' display='flex' flexDirection='column' gap='8px'>
        {header}
        {content}
        {footer}
      </Box>
    </ListItem>
  );
};




export  default memo(JobListItem);