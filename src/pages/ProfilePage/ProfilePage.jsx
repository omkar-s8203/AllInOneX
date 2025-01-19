import LeftSection from "./LeftSection";
import ProfileHome from "./ProfileHome";
import RightSection from "./RightSection";
function ProfilePage() {
    

    return <>
     
     <div className="container mt-5">
        <div className="row">
        <div className="col-4">
        <LeftSection/>
        </div>
        <div className="col-8">
        <RightSection/>
        </div>

        </div>
        
     
     </div>
   
    </>
}

export default ProfilePage;