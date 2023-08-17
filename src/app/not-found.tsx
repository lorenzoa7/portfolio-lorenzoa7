export default async function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-around bg-amaranth-600 rounded-lg shadow-2xl relative p-8 text-center gap-5">
        <h1 className="text-9xl font-extrabold text-white">404</h1>
        <span className="uppercase text-gray-100 text-4xl font-semibold">
          Page not found
        </span>
      </div>
    </div>
  )
}
