import React from 'react'
import { Skeleton } from '@/app/components'
import { Box, Flex, Card } from '@radix-ui/themes'

const loading = () => {
  return (
    <Box className='max-w-xl'>
    <Skeleton/>
    <Flex gap='5' my='3' >
    <Skeleton width='5rem'/>
    <Skeleton width='8rem'/>
    </Flex>
    <Card className="prose lg:prose-xl" mt='4'>
    <Skeleton count={3}/>
  </Card>
  </Box>
  )
}

export default loading
