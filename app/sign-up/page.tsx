import Container from '@/components/Container'
import NavigationBar from '@/components/NavigationBar'
import SignUpForm from '@/components/SignUp'

const SignUp = () => {
  return (
    <div>
      <NavigationBar label='Sign Up' />
      <Container>
        <SignUpForm />
      </Container>
    </div>
  )
}

export default SignUp
