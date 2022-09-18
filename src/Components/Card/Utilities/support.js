import {
    faFile,
    faUniversity,
    faHeart,
    faListAlt,
    faHippo,
    faBasketShopping,
} from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIconCont,
} from './styled';

export const staticOptionList = [{
    icon: <FontAwesomeIconCont 
            icon={faBasketShopping} 
            color="#16bbbb" 
            size="2x"/>,
    option: 'shop',
    giverOnly: false,
    dataListName: 'shopItemList'
},{
    icon: <FontAwesomeIconCont 
            icon={faFile} 
            color="#4c0303d1" 
            size="2x"/>,
    option: 'quests',
    giverOnly: false,
    dataListName: 'questItemList'
},{
    icon: <FontAwesomeIconCont 
            icon={faHeart} 
            color="#b50011" 
            size="2x"/>,
    option: 'daily tasks',
    giverOnly: false,
    dataListName: 'dailyQuestItemList'
},{
    icon: <FontAwesomeIconCont 
            icon={faListAlt} 
            color="#704cb6"                
            size="2x"/>,
    option: 'trade pending',
    giverOnly: false,
    dataListName: 'tradePending'
},{
    icon: <FontAwesomeIconCont 
            icon={faListAlt} 
            color="#c3b800"                
            size="2x"/>,
    option: 'complete pending',
    giverOnly: false,
    dataListName: 'completePending'
},{
    icon: <FontAwesomeIconCont 
            icon={faUniversity} 
            color="#007aff" 
            size="2x"/>,
    option: 'history',
    giverOnly: false,
    dataListName: 'historyList'
},{
    icon: <FontAwesomeIconCont 
            icon={faHippo} 
            color="#307d00" 
            size="2x"/>,
    option: 'points',
    giverOnly: true,
    dataListName: 'points'
}];