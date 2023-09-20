import { TextField } from '@/components/Fields'
import { Button } from '@/components/Button'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative py-20 overflow-hidden bg-gray-900 sm:py-28"
    >
      <div className="absolute -translate-y-1/2 left-20 top-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="max-w-md mx-auto sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Be Among the First! 
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join our closed beta now and start exploring.
          </p>
          <div className="flex justify-center mt-8">
            <form className="flex justify-center w-full md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="min-w-0 w-60 shrink"
            />
            <Button type="submit" color="cyan" className="flex-none ml-4">
              <span className="hidden lg:inline">Join closed beta </span>
              <span className="lg:hidden">Join closed beta</span>
            </Button>
          </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
