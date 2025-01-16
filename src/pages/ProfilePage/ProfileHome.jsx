import AddressPage from "./ProfileTypes/AddressPage";
import MedicalPage from "./ProfileTypes/MedicalPage";
import EducationPage from "./ProfileTypes/EducationPage";

function ProfileHome() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <AddressPage />
        <MedicalPage />
        <EducationPage />

      </div>
    </>
  );
}

export default ProfileHome;
