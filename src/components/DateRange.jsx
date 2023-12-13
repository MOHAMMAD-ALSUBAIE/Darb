import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DateRange = (props) => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        props.handelDateValue(newValue);
        setValue(newValue);
    };

    return (
       <div className="mt-1">
       <label className="font-IBMPlexSans font-bold mb-3">Trip Date</label>
       <div className="    ">
            <Datepicker   inputClassName="w-[200px] h-[45px] min-[390px]:w-[350px]  min-[375px]:w-[375px] bg-[#ffffff] px-2 border border-1 border-gray-600 bg-[#fff] border text-sm rounded-lg    focus:ring-blue-500 focus:border-blue-500 dark:bg-[#fff]"  primaryColor={""} value={value} onChange={handleValueChange} />
        </div></div>
    );
};

export default DateRange;