import React from 'react'
import { IconButton, useColorMode, Box } from "@chakra-ui/core"

export const ThemeSelector = () => {
    const { colorMode, toggleColorMode} = useColorMode()
     return (
         <Box textAlign="right" py={4}>
             <IconButton
              icon={colorMode === "light" ? 'moon':'sun'} 
              onClick={toggleColorMode}
              //variant="ghost"
               />
         </Box>
      )
 }

 