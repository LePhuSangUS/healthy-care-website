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

const HEADER_DATA = [
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
const FOOTER_DATA = [
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

const EATING_DATA_LIST_MOCK = [
    {
        id: "1",
        image: m01,
        type: "Morning",
        date:"05.21"
    },
    {
        id: "2",
        image: l03,
        type:"Lunch",
        date:"05.21"
        
        

    },
    {
        id: "3",
        image: d01,
        type:"Dinner",
        date:"05.21"

        
        
    },  
    {
        id: "4",
        image: l01, 
        type: "Snack",
        date:"05.21"
        
        
    },  
    {
        id: "5",
        image: m01,
        type: "Morning",
        date:"05.20"
        
    },
    {
        id: "6",
        image: l02,
        type:"Lunch",
        date:"05.20"

        

    },
    {
        id: "7",
        image: d02,
        type:"Dinner",
        date:"05.20"

        
        
    },  
    {
        id: "8",
        label: "Snack",
        image: s01, 
        type:"Snack",
        date:"05.20"
        
    }, 
    
]
const RECORD_DATA_LIST = [
    {
        id: "1",
        title: "BODY RECORD",
        description: "自分のカラダの記録",
        image:myRecommend1

    },
        {
            id: "2",
            title: "MY EXERCISE",
            description:"自分のカラダの記録",
            image:myRecommend2
    
    },
    {
        id: "3",
        title: "MY DIARY",
        description:"自分のカラダの記録",
        image:myRecommend3

    },
    
]
const RECOMMEND_DATA_LIST = [
    {
        id: "1",
        title: "RECOMMENDED COLUMN",
        description: "オススメ",

    },
        {
            id: "2",
            title: "RECOMMENDED DIET",
            description:"ダイエット",
    
    },
    {
        id: "3",
        title: "RECOMMENDED BEAUTY",
        description:"美容",

    },
    {
        id: "4",
        title: "RECOMMENDED HEALTHY",
        description:"健康",

    },
    
]
const RECOMMEND_IMAGES_DATA_LIST = [
    {
        id: "1",
        date:"2021.05.17   23:25",

        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tag: "#魚料理 #和食 #DHA",
         image:column1,
    },
    {
        id: "2",
        date:"2021.05.17   23:25",

        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tag: "#魚料理 #和食 #DHA",
         image:column2,
    },
    {
        id: "3",
        date:"2021.05.17   23:25",

        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tag: "#魚料理 #和食 #DHA",
         image:column3,
    },
    {
        id: "4",
        date:"2021.05.17   23:25",

        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tag: "#魚料理 #和食 #DHA",
         image:column4,
    },
    {
        id: "5",
        date:"2021.05.17   23:25",

        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tag: "#魚料理 #和食 #DHA",
         image:column5,
    },
    {
        id: "6",
        date:"2021.05.17   23:25",

        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tag: "#魚料理 #和食 #DHA",
         image:column6,
    },
    {
        id: "7",
        date:"2021.05.17   23:25",

        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tag: "#魚料理 #和食 #DHA",
         image:column7,
    },
    {
        id: "8",
        date:"2021.05.17   23:25",

        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tag: "#魚料理 #和食 #DHA",
         image:column8,
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
const CHART_DATA_LIST=[
    {
      "time": "6月",
      "value": 277,
      "category": "GREEN"
    },
    {
      "time": "7月",
      "value": 258,
      "category": "GREEN"
    },
    {
      "time": "8月",
      "value": 215,
      "category": "GREEN"
    },
    {
      "time": "9月",
      "value": 207,
      "category": "GREEN"
    },
    {
      "time": "10月",
      "value": 165,
      "category": "GREEN"
    },
    {
      "time": "11月",
      "value": 161,
      "category": "GREEN"
    },
    {
      "time": "12月",
      "value": 135,
      "category": "GREEN"
    },
    {
      "time": "1月",
      "value": 128,
      "category": "GREEN"
    },
    {
      "time": "2月",
      "value": 114,
      "category": "GREEN"
    },
    {
      "time": "3月",
      "value": 79,
      "category": "GREEN"
    },
    {
      "time": "4月",
      "value": 68,
      "category": "GREEN"
    },
    {
      "time": "5月",
      "value": 57,
      "category": "GREEN"
    },
  //YELLOW
  {
    "time": "6月",
    "value": 277,
    "category": "YELLOW"
  },
  {
    "time": "7月",
    "value": 269,
    "category": "YELLOW"
  },
  {
    "time": "8月",
    "value": 198,
    "category": "YELLOW"
  },
  {
    "time": "9月",
    "value": 225,
    "category": "YELLOW"
  },
  {
    "time": "10月",
    "value": 211,
    "category": "YELLOW"
  },
  {
    "time": "11月",
    "value": 181,
    "category": "YELLOW"
  },
  {
    "time": "12月",
    "value": 211,
    "category": "YELLOW"
  },
  {
    "time": "1月",
    "value": 172,
    "category": "YELLOW"
  },
  {
    "time": "2月",
    "value": 152,
    "category": "YELLOW"
  },
  {
    "time": "3月",
    "value": 143,
    "category": "YELLOW"
  },
  {
    "time": "4月",
    "value": 131,
    "category": "YELLOW"
  },
  {
    "time": "5月",
    "value": 143,
    "category": "YELLOW"
  },
]
  
const BODY_RECORD_FILTER_DATA_LIST = [
    {
    id: "1",
    label: "日",
    value: "日",
    
},
    {
    id: "2",
    label: "週",
    value: "週",
    
},
    {
    id: "3",
    label: "月",
    value: "月",
    
},
    {
    id: "4",
    label: "年",
    value: "年",
    
},

]


const MY_EXERCISE_DATA_LIST = [{
    id: "1",
    label: "家事全般（立位・軽い）",
    value: "26kcal",
    time:"10 min"
},
{
    id: "2",
    label: "家事全般（立位・軽い）",
    value: "26kcal",
    time:"10 min"
    },
    {
        id: "3",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },
    {
        id: "4",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },
    {
        id: "5",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },
    {
        id: "6",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },
    {
        id: "7",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },
    {
        id: "8",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },
    {
        id: "9",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },
    {
        id: "10",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },
    {
        id: "11",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },
    {
        id: "12",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },

    {
        id: "13",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },
    {
        id: "14",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },

        {
        id: "15",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },    {
        id: "16",
        label: "家事全般（立位・軽い）",
        value: "26kcal",
        time:"10 min"
    },

    
]

const MY_DIARY_DATA_LIST = [
    {
    id: "1",
    label: "私の日記の記録が一部表示されます。",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    time:"2021.05.21 23:25"
},
{
    id: "2",
    label: "私の日記の記録が一部表示されます。",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    time:"2021.05.21 23:25"
    },
   {
    id: "3",
    label: "私の日記の記録が一部表示されます。",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    time:"2021.05.21 23:25"
    },
    {
        id: "4",
        label: "私の日記の記録が一部表示されます。",
        content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        time:"2021.05.21 23:25"
    },
    {
        id: "5",
        label: "私の日記の記録が一部表示されます。",
        content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        time:"2021.05.21 23:25"
    },
    {
        id: "6",
        label: "私の日記の記録が一部表示されます。",
        content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        time:"2021.05.21 23:25"
    },
    {
        id: "7",
        label: "私の日記の記録が一部表示されます。",
        content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        time:"2021.05.21 23:25"
    },
    {
        id: "8",
        label: "私の日記の記録が一部表示されます。",
        content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        time:"2021.05.21 23:25"
    },
]
export {
    HEADER_DATA,
    FOOTER_DATA,
    FILTER_DATA_LIST,
    EATING_DATA_LIST_MOCK,
    RECOMMEND_DATA_LIST,
    MENU_DATA_LIST,
    RECORD_DATA_LIST,
    RECOMMEND_IMAGES_DATA_LIST,
    CHART_DATA_LIST,
    BODY_RECORD_FILTER_DATA_LIST,
    MY_EXERCISE_DATA_LIST,
    MY_DIARY_DATA_LIST
}