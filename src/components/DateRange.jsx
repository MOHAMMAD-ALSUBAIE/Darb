import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DateRange = (props) => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        props.handelDateValue(newValue);
        setValue(newValue);
    };

    return (
       <div className="mt-1">
       <label className="font-IBMPlexSans font-bold">Trip Date</label>
       <div className="   self-center ">
            <Datepicker   inputClassName="w-[400px] min-[390px]:w-[350px]  min-[375px]:w-[375px] bg-[#ffffff] w-[300px] border border-1 bg-[#fff] border text-sm rounded-lg border-gray-600 h-[44px] pl-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#fff]"  primaryColor={"blue"} value={value} onChange={handleValueChange} />
        </div></div>
    );
};

export default DateRange;