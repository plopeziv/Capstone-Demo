import ComingSoon from "../components/ComingSoon";

export default function MlbDashboard() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url('/background_images/home_plate.jpg')] bg-cover bg-center">
      <ComingSoon
        app="MLB"
        message="Thank you for your patience as we step up to the plate."
      />
    </div>
  );
}
