import Cover from "../../Shared/Cover/Cover";
import contactImg from "../../../assets/contact/banner.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Contact = () => {
    return (
        <div>
            <Cover img={contactImg} title={"Contact Us"} subTitle={"Let's Start a Conversation"}></Cover>
            <SectionTitle heading={"Our Location"} subHeading={"Visit Us"}></SectionTitle>
            <div className="flex gap-4 my-12 justify-center items-center">
                <div className="card w-96 bg-primary shadow-2xl">
                    <div className="card-body text-white">
                        <p className="card-title">Phone logo</p>
                        <p className="text-center text-3xl font-bold uppercase">Phone</p>
                        <div className="card-actions justify-center">
                            <h1 className="my-8">+8801844662344</h1>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-secondary shadow-2xl">
                    <div className="card-body text-white">
                        <p className="card-title">Location logo</p>
                        <p className="text-center text-3xl font-bold uppercase">Location</p>
                        <div className="card-actions justify-center">
                            <h1 className="my-8">XYZ</h1>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-primary shadow-2xl">
                    <div className="card-body text-white">
                        <p className="card-title">Time logo</p>
                        <p className="text-center text-3xl font-bold uppercase">Working Hours</p>
                        <div className="card-actions justify-center">
                            <h1 className="my-8">Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;