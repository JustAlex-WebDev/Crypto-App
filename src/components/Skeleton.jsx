import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Skeleton = () => {
  return (
    <tr className="rounded-div h-[973px] my-4 flex justify-center items-center">
      <td>
        <ImSpinner9 className=" w-8 h-8 rounded-full flex items-center justify-center animate-spin" />
      </td>
    </tr>
  );
};

export default Skeleton;
