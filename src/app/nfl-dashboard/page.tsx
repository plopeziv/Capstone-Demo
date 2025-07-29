export default function NflDashboard() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url('/background_images/football_numbers.jpg')] bg-cover bg-center">
      <div className="w-[90%] min-w-[200px] max-w-[500px] aspect-[5/3] mt-10 bg-black/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 text-center flex flex-col justify-center">
        <p className="text-2xl text-gray-300 font-medium">Fantasy Football</p>
        <h2 className="text-3xl font-bold text-white mt-2">Coming Soon!</h2>
      </div>
    </div>
  );
}
