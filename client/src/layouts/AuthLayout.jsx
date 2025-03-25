import {Outlet} from "react-router";
import AuthImage from "../assets/AuthImage.png"

export default function AuthLayout() {
  return (
    <section className="container mx-auto grid grid-cols-12 items-center">
      <div className="hidden lg:block col-span-6 mx-auto">
        <img src={AuthImage} alt="AuthImage" />
      </div>
      <div className="col-span-12 md:col-span-6">
        <Outlet />
      </div>
    </section>
  );
}
