import ComingSoon from "../components/ComingSoon";

export default function NflDashboard() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url('/background_images/football_numbers.jpg')] bg-cover bg-center">
      <ComingSoon
        app="NFL"
        message="Thank you for your patience — we’re gearing up for kickoff"
      />
    </div>
  );
}
