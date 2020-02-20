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

            
            {props.results.length && props.results.map((item, index) => {
                return (
                    <Image
                        elevation='small'
                        margin={{vertical: 'small'}}
                        width={props.mobile ? '320px' : imageSize}
                        src={item.largeImageURL}
                        key={item.id}
                        alt={index}/>
                )
            })
            }
    </Box>
    )
}

const mapStateToProps = state => {
    return {results: state.results}
}

export default connect(mapStateToProps)(SearchResults);