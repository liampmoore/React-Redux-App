import React, {useState} from 'react';
import {Box, Image} from 'grommet';

import SearchBar from './searchBar';

const dummyData = ['https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga','https://dummyimage.com/vga',]


const SearchResults = (props) => {
const [imageSize, setImageSize] = useState('320px')
return (<Box flex direction='row' wrap='true' pad='large' justify='around'>{dummyData.map((item, index) => {return (<Image elevation='small' margin='small' width={imageSize} src={item} alt={index}/>)})}</Box>)
}


export default SearchResults;