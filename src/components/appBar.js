import React, {useState, useEffect} from 'react';
import {Box, Button, Text, Heading, Form, TextInput} from 'grommet';
import { Menu } from 'grommet-icons';

import { connect } from "react-redux";

import {getData} from '../actions/searchActions';


const AppBar = ({showSidebar, setShowSidebar, mobile, isFetching, getData}) => {
    const [value, setValue] = useState('')
    const [disableSearch, setDisableSearch]= useState(false);

    useEffect(() => {
      setDisableSearch(false)
    }, [value])


   return ( <Box
      tag='header'
      gap='small'
      direction='row'
      align='center'
      justify='start'
      background='brand'
      pad={{ left: 'large', right: mobile ? '60px':'70px', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
    >

            <Button  icon={<Menu />} onClick={() => { setShowSidebar(!showSidebar) }} />
              <Heading level='3' margin={{vertical: 'none', horizontal: 'none'}}>Search Pixabay</Heading>
            <Form id='searchform'
            onSubmit={() => {
                 !disableSearch && getData(value)
                 setDisableSearch(true)
            }}/>
            
              <TextInput
              form='searchform'
      placeholder="Enter search term here."
      value={value}
      onChange={event => setValue(event.target.value)}

    />
    <Button onClick={() => {getData(value)} } primary margin={{left: 'small'}}> <Text margin='medium'>Search</Text> </Button>
    </Box>)
    
}

const mapStateToProps = state => {
    return {
        isFetching: state.searchReducer.isFetchingData
    }
}

export default connect(mapStateToProps, {getData} )(AppBar);