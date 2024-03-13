import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
    return (
        <div className="my-12 featured-item bg-fixed text-white py-2">
            <SectionTitle subHeading={"Check it Out"} heading={"Featured items"}></SectionTitle>
            <div className="md:flex justify-center items-center px-20">
                <div>
                    <img src={featuredImg} className="rounded-lg" alt="" />
                </div>
                <div className="md:ml-10 space-y-4 bg-black md:px-8 md:py-8 bg-opacity-70 rounded-lg mt-4 px-2 py-2">
                    <p>Aug 29, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum, maiores cum asperiores expedita illo porro consequuntur quae quos harum blanditiis magnam repellat minus quo beatae quam id impedit laudantium?</p>
                    <button className="btn btn-outline text-white border-0 border-b-4">Order now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;