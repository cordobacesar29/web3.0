import { useState, useEffect } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import {Flex, Button} from "@chakra-ui/react";
import logo from '../../images/logo.png';

const titles = ["Market", "Exchange", "Tutorials", "Wallets"];
const NavbarItem = ({ title }) => {
  return (
    <Flex mx="1rem" my=".5rem">
      {title}
    </Flex>
  );
}

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [widthDisplay, setWidthDisplay] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidthDisplay(window.innerWidth);
    });
  }, []);
  return (
    widthDisplay < 480 ? (
      <Flex 
        color="white" 
        p="1rem" 
        alignContent="space-between" 
        width="100%"
      >
        <HiMenuAlt4 
          fontSize={28} 
          color="white" 
          cursor="pointer" 
          onClick={() => setToggleMenu(!toggleMenu)} 
        />
        <Flex 
          bg="#2952e3" 
          fontSize={16} 
          cursor="pointer" 
          rounded="full" 
          px="1rem" mx="1rem" 
          _hover={{background:"#2546bd"}}
        >
          Login
        </Flex>
        {toggleMenu && widthDisplay < 480 && (
           <Flex 
            display="row" 
            color="white" 
            position="absolute" 
            top={0} right={0} p="1rem"
            w="60vw" h={window.innerHeight / 2}
            bg="blackAlpha.600"
          >
            <AiOutlineClose onClick={() => setToggleMenu(false)} />  
            {titles.map((item, index)=> (
              <NavbarItem key={item + index} title={item} my="1rem" />
            ))}
           </Flex>
         )}
      </Flex>
    ) : (
      <Flex justify="space-around" alignItems="center" p="1rem" cursor="pointer">
        <div>
          <img src={logo} alt="logo" width="200px"/>
        </div>
        <Flex color='white' justify="center" alignItems="center" >
          {titles.map((item, index)=> (
           <NavbarItem key={item + index} title={item} />
          ))}
         <Button 
          border='2px'
          borderColor='red.400'
          colorScheme="blackAlpha"
          color="whiteAlpha.600"
          mx="3rem"
        >
          Login
        </Button>
        </Flex>
      </Flex>
    )
  )
}