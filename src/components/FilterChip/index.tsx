import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';

interface FilterChipProps{
  label?: string;
  onClose?: (event: string)=>void 
}

const FilterChip = ({label, onClose}:FilterChipProps)=>{
  const _handleClose = ()=>{
    onClose && label && onClose(label);
  };

  return(
    <Tag>
      <TagLabel>
        {label}
      </TagLabel>
      <TagCloseButton 
        opacity={1}
        _hover={{bg:'blue.900'}}
        transform='translateX(5px)'
        bg='green.500'
        borderRadius={0}
        color='white'
        onClick={_handleClose}/>
    </Tag>
  );
};

export default FilterChip;