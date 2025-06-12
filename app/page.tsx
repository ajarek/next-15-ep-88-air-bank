import Container from '@/components/Container'
import NavigationBar from '@/components/NavigationBar'
import SignIn from '@/components/SignIn'

export default function Home() {
  return (
    <div>
      <NavigationBar label='Sign In' />
      <Container>
        <SignIn />
      </Container>
    </div>
  )
}
