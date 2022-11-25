import React from "react";
import {Oval} from "react-loader-spinner"
function Loading() {
  return (
    <div>
      <div className="w-16 absolute top-1/2 left-1/2">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    </div>
  );
}

export default Loading;
