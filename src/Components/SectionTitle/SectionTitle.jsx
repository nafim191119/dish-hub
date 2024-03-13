
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-12">
            <p className="text-yellow-600 mb-2">--------{subHeading}---------</p>
            <h1 className="text-2xl mx-20 md:mx-8 md:text-3xl uppercase border-y-4 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;