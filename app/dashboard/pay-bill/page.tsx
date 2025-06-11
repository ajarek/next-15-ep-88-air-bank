import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const bills = [
  {
    name: 'Electric bill',
    description: 'Pay electric bill this month',
    image: '/images/group547.png',
  },
  {
    name: 'Water bill',
    description: 'Pay water bill this month',
    image: '/images/group553.png',
  },
  {
    name: 'Mobile bill',
    description: 'Pay mobile bill this month',
    image: '/images/group552.png',
  },
  {
    name: 'Internet bill',
    description: 'Pay internet bill this month',
    image: '/images/group551.png',
  },
]


const PayBill = async () => {
  return (
    <div>
      <NavigationBar label='Pay the bill' />
      <Container>
        <div className=' flex flex-col items-center justify-start p-4 gap-4'>
          {bills.map((bill) => {
            return (
              <Card
                key={bill.name}
                className='w-full flex items-center justify-between border border-primary px-2 py-4 rounded-sm shadow-xl hover:bg-primary hover:text-white transition-transform duration-200'
              >
                <CardContent className='flex items-center justify-between w-full '>
                  <div>
                    <h1 className='text-xl font-semibold'>{bill.name}</h1>
                    <p>{bill.description}</p>
                  </div>
                  <Image
                    src={bill.image}
                    alt={bill.name}
                    width={90}
                    height={83}
                  />
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

export default PayBill
