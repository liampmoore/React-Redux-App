import React, {useState} from 'react';
import {Box, Image} from 'grommet';



const dummyData = ['https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga',]


const SearchResults = (props) => {
const [imageSize, setImageSize] = useState('400px')
return (
    <Box
        flex
        direction='row'
        wrap='true'
        pad={{left: 'medium', right: 'medium', top: 'small', bottom: 'small'}}
        justify='around'>

            
            {dummyData.map((item, index) => {
                return (
                    <Image
                        elevation='small'
                        margin={{vertical: 'small'}}
                        width={props.mobile ? '320px' : imageSize}
                        src={item}
                        alt={index}/>
                )
            })}
    </Box>
    )
}


export default SearchResults;