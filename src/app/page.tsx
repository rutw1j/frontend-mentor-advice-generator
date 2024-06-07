'use client'

import { Box, Button, Divider, Flex, Skeleton, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {

    const isMobile = useBreakpointValue({base: true, md: false});

    const [advice, setAdvice] = useState({
        slip: {
            id: null,
            advice: '',
        }
    });

    async function handleSubmit() {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            setAdvice(data);
        } catch(error) {
            console.log('ERROR', error);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []);


    return (
        <Flex h={'100vh'} alignItems={'center'} justifyContent={'center'} bgColor={'var(--custom-dark-blue)'}>
            <Flex position={'relative'} flexDir={'column'} alignItems={'center'} justifyContent={'end'}>
                <Box bgColor={'var(--custom-dark-grayish-blue)'} textAlign={'center'} w={isMobile ? '90vw' : '40vw'} borderRadius={10} p={10} pb={14}>
                    {
                        advice.slip.id != null ? (
                            <Box>
                                <Text fontSize={'xs'} color={'var(--custom-neon-green)'} fontWeight={'600'} letterSpacing={3}>ADVICE #{advice.slip.id}</Text>
                                <Text fontSize={'2xl'} color={'var(--custom-light-cyan)'} fontWeight={'600'} my={6}>
                                    &quot;{advice.slip.advice}&quot;
                                </Text>
                            </Box>
                        ) : (
                            <Skeleton height={'100px'}/>
                        )
                    }
                    <Flex flexDir={'row'} alignItems={'center'} justifyContent={'center'} gap={1} mt={10}>
                        <Divider mr={1}/> 
                        <Box bgColor={'var(--custom-light-cyan)'} h={4} w={3} borderRadius={10} ml={1} mr={0.5}/>
                        <Box bgColor={'var(--custom-light-cyan)'} h={4} w={3} borderRadius={10} ml={0.5} mr={1}/>
                        <Divider ml={1}/>
                    </Flex>
                </Box>
                <Box h={7}></Box>
                <Box w={'fit-content'} bgColor={'var(--custom-neon-green)'} borderRadius={'100%'} p={4} onClick={handleSubmit} _hover={{cursor: 'pointer', boxShadow: '0 0 30px 0px var(--custom-neon-green)'}} position={'absolute'} >
                    <Image src={'icon-dice.svg'} alt={'Dice Icon'} height={23} width={23} />
                </Box>
            </Flex>
        </Flex>
    );
}
