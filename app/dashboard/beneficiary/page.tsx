import Container from '@/components/Container'
import FooterNavigation from '@/components/FooterNavigation'
import NavigationBar from '@/components/NavigationBar'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const bills = [
  {
    name: 'Peter',
    description: 'developer',
    images: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'John',
    description: 'developer',
    images: 'https://randomuser.me/api/portraits/men/81.jpg',
  },
  {
    name: 'Jane',
    description: 'designer',
    images: 'https://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    name: 'Eva',
    description: 'designer',
    images: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Alice',
    description: 'interior',
    images: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
]

const Beneficiary = async () => {
  return (
    <div>
      <NavigationBar label='Beneficiary' />
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
                    <Image
                      src={bill.images}
                      alt={bill.name}
                      width={60}
                      height={60}
                      className='rounded-full'
                    />
                  </div>
                  <div>
                    <h1 className='text-xl font-semibold'>{bill.name}</h1>
                    <p>{bill.description}</p>
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

export default Beneficiary
