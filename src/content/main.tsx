import "./main.css";
import ProPage from "../component/proPage";

const Main = () => {
  return (
    <div className="header">
      <ProPage
        id={42301}
        phone="03323032532"
        email="mohammadquadri.androiddeve.com"
        firstName="Mohammad"
        lastName="Quadri"
        companyName="Android Development"
        address="new dehli India"
        emailVerified={undefined}
        phoneVerified={undefined}
        subscription={undefined}
        isMember={true}
        member="male"
      />
    </div>
  );
};

export default Main;
