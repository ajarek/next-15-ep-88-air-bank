import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpDown, Droplet, FolderSync, Plug, Receipt } from 'lucide-react'
import Image from 'next/image'

const bills = [
  {
    name: 'Water bill',
    description: 'Unsuccessfully',
    icon: <Droplet  className="text-indigo-700 w-6 h-6" />,
    price:'-$280'
  },
  {
    name: 'Salary Oct',
    description: 'Income',
    icon: <Receipt  className="text-pink-700 w-6 h-6" />,
    price:'+$1200'
  },
  {
    name: 'Electric bill',
    description: 'Successfully',
    icon: <Plug className="text-sky-700 w-6 h-6" />,
    price:'-$480'
  },
  {
    name: 'Jane transfers',
    description: 'Income',
    icon: <FolderSync className="text-yellow-400 w-6 h-6" />,
    price:'+$500'
  },
  {
    name: 'Internet Bill',
    description: 'Successfully',
    icon:<ArrowUpDown className="text-green-400 w-6 h-6" />,
    price:'-$100'
  },
]


const TransactionReport = async () => {
  return (
    <div>
      <NavigationBar label='Transaction report' />
      <Container>
        <div className=' flex flex-col items-center justify-start p-4 gap-4'>
          {bills.map((bill) => {
            return (
              <Card
                key={bill.name}
                className='w-full flex items-center justify-between border border-primary px-2 py-4 rounded-sm shadow-xl hover:bg-primary hover:text-white transition-transform duration-200'
              >
                <CardContent className='flex items-center justify-between w-full '>
                  <div className=' flex items-center justify-start gap-4'>
                  <div>
                    {bill.icon}
                  </div>
                  <div>
                    <h1 className='text-xl font-semibold'>{bill.name}</h1>
                    <p>{bill.description}</p>
                  </div>
                  </div>
                  <div className='w-1/4 flex items-center justify-center'>
                    <p>{bill.price}</p>
                  </div>
                  
                </CardContent>
                
              </Card>
            )
          })}

        </div>
        <FooterNavigation />
      </Container>
    </div>
  )
}

export default TransactionReport
