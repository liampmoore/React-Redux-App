import React, {useState} from 'react';
import {Box, Button, Text, Heading, Form, TextInput} from 'grommet';
import { Menu } from 'grommet-icons';

import { connect } from "react-redux";

import {getData} from '../actions/searchActions';


const AppBar = ({showSidebar, setShowSidebar, mobile, isFetching, getData}) => {
    const [value, setValue] = useState('')





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
                getData(value)
            }}/>
            
              <TextInput
              form='searchform'
      placeholder="Enter search term here."
      value={value}
      onChange={event => setValue(event.target.value)}

    />
    <Button disabled={isFetching} onClick={() => {getData(value)} } primary margin={{left: 'small'}}> <Text margin='medium'>Search</Text> </Button>
    </Box>)
    
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetchingData
    }
}

export default connect(mapStateToProps, {getData} )(AppBar);