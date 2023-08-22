export default async function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative flex flex-col items-center justify-around gap-5 rounded-lg bg-amaranth-600 p-8 text-center shadow-2xl">
        <h1 className="text-9xl font-extrabold text-white">404</h1>
        <span className="text-4xl font-semibold uppercase text-gray-100">
          Page not found
        </span>
      </div>
    </div>
  )
}
