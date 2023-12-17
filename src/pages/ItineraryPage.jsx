import Banner from "../components/ItineraryPageComponets/Banner";
import ItineraryBody from "../components/ItineraryPageComponets/ItineraryBody";
import NewHeader from "../components/NewHeader";

export default function ItineraryPage() {
  return (
    <>
      <NewHeader />
      <Banner classCustomName="w-[100%] h-[350px]" />
      <ItineraryBody />
    </>
  );
}
