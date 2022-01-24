import { Box } from "@mui/material";
import { useState } from "react";
import ButtonNav from "../componetns/common/ButtonNav";
import AddInput from "../componetns/mainComponent/AddInput";
import AddContainer from "../containers/addContainer/AddContainer";
import ListContainer from "../containers/listContainer/ListContainer";



export default function Main() {
    const [value, setValue] = useState<number>(0);

    return(
        <div style={{margin:'200px auto', borderRadius:12, border:'1px solid #eee', height:'700px', width:'500px', position:'relative'}}>
            <div>
                {value === 0 &&
                    <div>
                        1
                    </div>
                }
                {value === 1 &&
                    <ListContainer/>
                }
                {value === 2 &&
                    <AddContainer />                  
                }
                <ButtonNav setState={setValue} state={value}/>
            </div>
        </div>
    )
}