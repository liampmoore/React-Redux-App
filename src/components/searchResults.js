import React, {useState} from 'react';
import {Box, Image} from 'grommet';
import {BeatLoader} from 'react-spinners';
import { defaultProps } from 'grommet';

import {connect } from 'react-redux';   
import {addImage} from '../actions/myImagesActions';



const SearchResults = (props) => {
// Implement image size slider
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
                        onDoubleClick={() => props.addImage(item)}
                        elevation='small'
                        margin={{vertical: 'small'}}
                        width={props.mobile ? '320px' : imageSize}
                        src={item.largeImageURL}
                        key={item.id}
                        alt={index}/>
                )
            }) : <Box flex justify='center' align='center'>{props.error || (props.isFetching && <BeatLoader size={32} color={defaultProps.theme.global.colors.focus} />) || 'Enter a search term above to find some images. Double click an image to add it to your list in the sidebar to the left.'}</Box>

            }
    </Box>
    )
}

const mapStateToProps = state => {
    return {
        results: state.searchReducer.results,
        error: state.searchReducer.error,
        isFetching: state.searchReducer.isFetchingData

    }
}

export default connect(mapStateToProps, {addImage})(SearchResults);