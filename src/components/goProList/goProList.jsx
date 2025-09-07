import { goProDataList } from "../../data/goProData";
import { GoProItem } from "../goProItem/goProItem";

export const GoProList = () => {
    console.log(goProDataList);
    return <ul>
        {goProDataList.map((GoProInfo) => {
            return <GoProItem info={GoProInfo} test={5}/>
        })}
    </ul>
}