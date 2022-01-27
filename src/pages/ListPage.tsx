import React from "react";
import ListContainer from "../containers/listContainer/ListContainer";
import ListPopupContainer from "../containers/listContainer/ListPopupContainer";



function ListPage() {
    return(
        <div >
            <ListContainer/>
            <ListPopupContainer/>
        </div>
    )
}
export default React.memo(ListPage);