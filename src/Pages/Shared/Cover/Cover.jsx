import { Parallax } from 'react-parallax';


const Cover = ({ img, title, subTitle }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div className="hero h-[300px] md:h-[450px]">
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-black bg-opacity-60 p-6 md:p-12 rounded-lg text-white">
                        <h1 className="mb-5 text-4xl md:text-6xl font-bold">{title}</h1>
                        <p className="mb-5 uppercase text-sm">{subTitle}</p>
                    </div>
                </div>
            </div>
            </Parallax>

            
        </div>
    );
};

export default Cover;