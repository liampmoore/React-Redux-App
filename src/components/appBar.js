import React, {useState} from 'react';
import {Box, Button, Text, Heading, TextInput} from 'grommet';
import { Menu } from 'grommet-icons';


const AppBar = ({showSidebar, setShowSidebar, mobile}) => {
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

            <Button icon={<Menu />} onClick={() => { setShowSidebar(!showSidebar) }} />
              <Heading level='3' margin={{vertical: 'none', horizontal: 'none'}}>Search Unsplash</Heading>
              <TextInput
      placeholder="Enter search term here."
      value={value}
      onChange={event => setValue(event.target.value)}
    />
    <Button primary margin={{left: 'small'}}> <Text margin='medium'>Search</Text> </Button>

    </Box>)
    
}

export default AppBar;