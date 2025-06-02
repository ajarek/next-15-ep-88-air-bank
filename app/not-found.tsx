import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className='w-full min-h-[calc(100vh-32px)] flex flex-col items-center justify-center gap-4 p-2'>
      <h1 className='text-center text-3xl font-semibold tracking-widest '>
        404 Page not found
      </h1>
      <p className='text-center'>
        The page you visited was not found. You can go to the home page.
      </p>
      <div className=''>
        <Link
          href='/dashboard'
          className='w-full rounded-sm px-4 py-2 bg-primary text-white hover:bg-primary/80 '
        >
          Back to dashboard
        </Link>
      </div>
    </div>
  )
}
export default NotFoundPage
