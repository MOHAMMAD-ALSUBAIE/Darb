

const ActivityCard = ({name, description, location,keyIndex,bannerImage,handlerLoader}) => {
    return (
        <div key={keyIndex} className="flex flex-col  relative top-9   bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 w-[3000px]  max-[600px]:w-[95%] mb-6">
       <img
       onLoad={handlerLoader}
       style={{height:"inherit"}}
          className=" m-2    w-full rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg "
          src={bannerImage}
          alt={"bannerImage"}
        />
      
        <div className="flex flex-col justify-between p-4 leading-normal relative">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
          <p className=" font-normal text-gray-700">
            {description}
          </p>
          <div className="flex gap-2">
          <svg className="self-center text-[#230751]" color="#230751" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#1e3050" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <a href={location} className="text-[#230751]" target="_blank">Location</a>
          </div>
          
        </div>
      </div>
    );
};



export default ActivityCard;
