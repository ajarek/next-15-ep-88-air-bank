import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const bills = [
  {
    name: 'Add',
    description: 'Add new save online account',
    image: '/images/group490.png',
  },
  {
    name: 'Management',
    description: 'Manage your save online account',
    image: '/images/group491.png',
  },
  
]


const SaveOnline = async () => {
  return (
    <div>
      <NavigationBar label='Save online' />
      <Container>
        <div className='min-h-[400px] flex flex-col items-center justify-start p-4 gap-4'>
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
                    width={100}
                    height={78}
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

export default SaveOnline
