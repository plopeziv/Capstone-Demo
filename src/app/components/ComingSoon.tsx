export default function ComingSoon({ app, message }) {
  return (
    <div className="flex flex-col justify-center bg-gray-900/80  backdrop-blur-sm border border-gray-700 shadow-xl rounded-2xl max-w-[95vw] w-[500px] aspect-[16/11] text-center p-8">
      <h4 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-4">
        New {app} Experience Coming Soon!
      </h4>
      <p className="text-md md:text-lg">{message}</p>
    </div>
  );
}
