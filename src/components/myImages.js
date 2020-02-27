import React from 'react';
import {Box, Image, defaultProps} from 'grommet';

import { connect } from 'react-redux';
import {removeImage} from '../actions/myImagesActions';

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
            {  props.images.map((item, index) => {return (
                    <Image style={{position: 'relative'}} key={item.id} src={item.webformatURL} width={props.mobile ? '320px':'240px'} onDoubleClick={() => props.removeImage(item.id)}/>
                )}) }
            
            { ( props.images.length < 4 && dummyData.slice(0, 4 - props.images.length ).map((item, index) => {return (
                    <Image style={{position: 'relative'}} key={index} src={item} width={props.mobile ? '320px':'240px'}/>
                )})) }
                
                
    </Box>)
        
}

const mapStateToProps = state => {
    return {
        images: state.myImagesReducer.images
    }
}

export default connect(mapStateToProps)(MyImages);