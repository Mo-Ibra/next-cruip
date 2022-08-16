interface TitleInterface {
    header: string;
    hasSpan: boolean;
}

const Title = ({ header, hasSpan }: TitleInterface) => {
    return (
        <div className='py-5 text-center'>
            {
                hasSpan && (
                    <span className='bg-green-200 text-green-500 font-bold p-1 px-4 rounded-2xl'>Reach goals that matter</span>
                )
            }
            <h3 className='text-lg md:text-2xl lg:text-4xl font-bold header-color w-2/4 mx-auto my-5'>{header}</h3>
            <p className='text-color my-5 w-2/4 mx-auto text-sm md:text-lg'>
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.
            </p>
        </div>
    )
};

export default Title;