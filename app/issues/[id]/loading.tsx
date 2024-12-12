import { Box, Card, Flex, Grid } from '@radix-ui/themes'
import {Skeleton} from '@/app/components'

const IssueDetailLoadingPage = () => {
  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#A8D3DA] to-[#F3ECB8] rounded-2xl shadow-xl border border-gray-300">
        <Grid
          columns={{ initial: '1', sm: '5' }}
          gap="6"
  
          >
          <Box className="p-6 border-r  border-[#B590CA] md:col-span-4 max-lg:border-none">
          <Skeleton height="8rem"/>
          <Skeleton height="100rem"/>
          </Box>
          <Box className="p-6">
            <Skeleton height="10"/>
            <Skeleton height="10"/> 
          </Box>
        </Grid>
      </div>
  )
}

export default IssueDetailLoadingPage
