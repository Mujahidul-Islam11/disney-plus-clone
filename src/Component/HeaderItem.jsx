

const HeaderItem = ({name, Icon}) => {
    return (
        <div className="flex text-white text-[15px] font-semibold gap-3 items-center">
            <div className="flex items-center ml-4 gap-3 hover:underline underline-offset-8">
            <Icon></Icon>
            <h2>{name}</h2>
            </div>
        </div>
    );
};

export default HeaderItem;