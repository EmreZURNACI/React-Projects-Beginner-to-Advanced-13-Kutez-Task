import { createContext, useContext, memo } from "react";
import EG009_R from '../Images/Products/EG009/EG009-R.jpg'
import EG009_W from '../Images/Products/EG009/EG009-W.jpg'
import EG009_Y from '../Images/Products/EG009/EG009-Y.jpg'
import EG012_R from '../Images/Products/EG012/EG012-R.jpg'
import EG012_W from '../Images/Products/EG012/EG012-W.jpg'
import EG012_Y from '../Images/Products/EG012/EG012-Y.jpg'
import EG020_200P_R from '../Images/Products/EG020/EG020-200P-R.jpg'
import EG020_200P_W from '../Images/Products/EG020/EG020-200P-W.jpg'
import EG020_200P_Y from '../Images/Products/EG020/EG020-200P-Y.jpg'
import EG022_100P_R from '../Images/Products/EG022/EG022-100P-R.jpg'
import EG022_100P_W from '../Images/Products/EG022/EG022-100P-W.jpg'
import EG022_100P_Y from '../Images/Products/EG022/EG022-100P-Y.jpg'
import EG074_R from '../Images/Products/EG074/EG074-200P-R.jpg'
import EG074_W from '../Images/Products/EG074/EG074-100P-W.jpg'
import EG074_Y from '../Images/Products/EG074/EG074-200P-Y.jpg'
import EG075_R from '../Images/Products/EG075/EG075-200P-R.jpg'
import EG075_W from '../Images/Products/EG075/EG075-200P-W.jpg'
import EG075_Y from '../Images/Products/EG075/EG075-200P-Y.jpg'
import EG094_R from '../Images/Products/EG094/EG094-200P-R.jpg'
import EG094_W from '../Images/Products/EG094/EG094-200P-W.jpg'
import EG094_Y from '../Images/Products/EG094/EG094-200P-Y.jpg'
import EG115_R from '../Images/Products/EG115/EG115-100P-R.jpg'
import EG115_W from '../Images/Products/EG115/EG115-100P-W.jpg'
import EG115_Y from '../Images/Products/EG115/EG115-100P-Y.jpg'
const ImageCon = createContext();
const ImageProvider = ({ children }) => {
    const EG009 = [EG009_R, EG009_W, EG009_Y]
    const EG012 = [EG012_R, EG012_W, EG012_Y]
    const EG115 = [EG115_R, EG115_W, EG115_Y]
    const EG094 = [EG094_R, EG094_W, EG094_Y]
    const EG074 = [EG074_R, EG074_W, EG074_Y]
    const EG075 = [EG075_R, EG075_W, EG075_Y]
    const EG020 = [EG020_200P_R, EG020_200P_W, EG020_200P_Y]
    const EG022 = [EG022_100P_R, EG022_100P_W, EG022_100P_Y]
    const datas = {
        EG009, EG012, EG115, EG094, EG074, EG075, EG020, EG022
    }
    return (
        <ImageCon.Provider value={datas}>
            {
                children
            }
        </ImageCon.Provider>
    )
};
export default memo(ImageProvider);
export const useImageCon = () => useContext(ImageCon);