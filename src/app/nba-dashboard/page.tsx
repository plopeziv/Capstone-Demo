import ComingSoon from "../components/ComingSoon";

export default function MlbDashboard() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url('/background_images/hardwood.jpg')] bg-cover bg-center">
      <ComingSoon
        app="NBA"
        message="Thanks for sticking with us — we’re just warming up."
      />
    </div>
  );
}
