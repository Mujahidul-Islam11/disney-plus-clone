/* eslint-disable react/prop-types */


const HeaderItem = ({name, Icon}) => {
    return (
        <div className="flex  text-white text-[15px] mb-2 font-semibold gap-3 items-center">
            <div className="flex items-center md:ml-4 gap-3 hover:underline underline-offset-8">
            <Icon></Icon>
            <h2 className="">{name}</h2>
            </div>
        </div>
    );
};

export default HeaderItem;