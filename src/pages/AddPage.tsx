import { Box } from "@mui/material";
import { useState } from "react";
import ButtonNav from "../componetns/common/ButtonNav";
import AddInput from "../componetns/mainComponent/AddInput";
import AddContainer from "../containers/addContainer/AddContainer";
import ListContainer from "../containers/listContainer/ListContainer";



export default function AddPage() {
    const [value, setValue] = useState<number>(0);

    return(
        <div >
            <AddContainer />                  
        </div>
    )
}