import React from 'react';

import {Box, Image, defaultProps} from 'grommet';

const dummyData = ['https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga']


const MyImages = (props) => {
return (
    <Box
        gap='medium'
        pad={{
            top: props.mobile ? '400px' : '200px',
            bottom: props.mobile ? '30px' : '26px'
        }}
        width='medium'
        fill={props.mobile}
        background='light-2'
        elevation='small'
        align='center'
        justify='center'
        overflow={{vertical: 'scroll', horizontal: 'hidden'}}
        >
            {dummyData.map((item, index) => {return (
                    <Image key={index} src={item} width={props.mobile ? '320px':'240px'}/>
                )})}
    </Box>)
        
}

export default MyImages;