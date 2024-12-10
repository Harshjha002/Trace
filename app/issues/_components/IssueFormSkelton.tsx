import { Box } from '@radix-ui/themes'
import React from 'react'
import { Skeleton } from '@/app/components'

const IssueFormSkelton = () => {
  return (
    <Box className="max-w-xl mx-auto mt-8 p-6 bg-gradient-to-b from-[#A8D3DA] to-[#F3ECB8] text-[#4A4A4A] rounded-xl shadow-lg space-y-6">
    <Skeleton height='2rem'/>
    <Box className="space-y-6">
      <Skeleton height='3rem'/>
      <Skeleton height='20rem'/>
      <Skeleton/>
    </Box>
  </Box>
  )
}

export default IssueFormSkelton
