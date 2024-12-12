import { Status } from '@prisma/client'
import { Badge , Text} from '@radix-ui/themes'
import React from 'react'



const statusMap : Record<Status, {label:string , color:'red'|'violet' | 'green'}>= {
OPEN:{label:'Open' , color:'red'},
IN_PROGRESS:{label:'In Progress' , color:'violet'},
CLOSED:{label:'Closed' , color:'green'},
}


const IssueStatusBadge = ({status} : {status:Status}) => {
  return ( 
    <Badge color={statusMap[status].color} className='rounded-md'>
      <Text size="3" className='p-1'>{statusMap[status].label}</Text>
    </Badge>
  )
}

export default IssueStatusBadge
