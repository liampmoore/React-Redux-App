import React, {useState} from 'react';
import {Box, Image} from 'grommet';

import {connect } from 'react-redux'


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

            
            {props.results.length > 0 ? props.results.map((item, index) => {
                return (
                    <Image
                        elevation='small'
                        margin={{vertical: 'small'}}
                        width={props.mobile ? '320px' : imageSize}
                        src={item.largeImageURL}
                        key={item.id}
                        alt={index}/>
                )
            }) : <Box flex justify='center' align='center'>{props.error || 'Enter a search term above to find some images. Double click an image to add it to your list in the sidebar to the left.'}</Box>

            }
    </Box>
    )
}

const mapStateToProps = state => {
    return {results: state.results,
    error: state.error}
}

export default connect(mapStateToProps)(SearchResults);