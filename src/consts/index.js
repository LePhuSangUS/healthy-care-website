import {
    iconChallenge,
    iconInfo,
    iconKnife,
    iconMemo,
    iconMenu,
    iconCount,
    iconCup
} from "@Assets/icons";
import {
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    column7,
    column8,
    d01,
    d02,
    l01,
    l02,
    l03,
    m01,
    m02,
    m03,
    s01,
    myRecommend1,
    myRecommend2,
    myRecommend3,
} from "@Assets/images";
import { ROUTES_NAME } from "../appRoute/routes-name";

const HEADER_DATA_LIST = [
    {
        id: "1",
        label: "自分の記録",
        icon: iconMemo,
         path:ROUTES_NAME.MY_RECORD
    },
    {
        id: "2",
        label: "チャレンジ",
        icon:iconChallenge,
        path:ROUTES_NAME.DEFAULT

    },
    {
        id: "3",
        label: "お知らせ",
        icon: iconInfo,
        subIcon:iconCount,
        path:ROUTES_NAME.DEFAULT
        
    },
]
const FOOTER_DATA_LIST = [
    {
        id: "1",
        label: "会員登録",
        path:"#"

    },
    {
        id: "2",
        label: "会社",
        path:"#"


    },
    {
        id: "3",
        label: "利用規約",
        path:"#"

        
    },
    {
        id: "4",
        label: "個人情報の取扱について",
        path:"#"

        
    },
    {
        id: "5",
        label: "特定商取引法に基づく表記",
        path:"#"

        
    },
    {
        id: "6",
        label: "お問い合わせ",
        path:"#"

        
    },
]
const FILTER_DATA_LIST = [
    {
        id: "1",
        label: "Morning",
        icon: iconKnife,
    },
    {
        id: "2",
        label: "Lunch",
        icon:iconKnife,

    },
    {
        id: "3",
        label: "Dinner",
        icon: iconKnife,
        
    },  
    {
        id: "4",
        label: "Snack",
        icon: iconCup,        
    },  
]

const MENU_DATA_LIST = [
    {
        id: "1",
        key: "1",
        label: "自分の記録",
        path:ROUTES_NAME.MY_RECORD

    },
    {
        id: "2",
        key: "2",
        label: "体重グラフ",
        path:ROUTES_NAME.DEFAULT

    },
    {
        id: "3",
        id: "3",
        label: "目標",
        path:ROUTES_NAME.DEFAULT

    },
    {
        id: "4",
        key: "4",
        label: "選択中のコース",
        path:ROUTES_NAME.DEFAULT


    },
    {
        id: "5",
        key: "5",
        label: "コラム一覧",
        path:ROUTES_NAME.RECOMMENDED_LIST

    },
    {
        id: "6",
        key: "6",
        label: "設定",
        path:ROUTES_NAME.DEFAULT

    },
    
]


export {
    HEADER_DATA_LIST,
    FOOTER_DATA_LIST,
    MENU_DATA_LIST,
    FILTER_DATA_LIST
}