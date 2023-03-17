
import _ from "lodash"
import { Button, Tag } from "antd";
const STORAGE_PREFIX = import.meta.env.VITE_STORAGE_PREFIX;
import { Link } from "react-router-dom"
import moment from "moment";

export const renderText = (text) => {

    if (_.isString(text) || _.isNumber(text)) {
        return text ?? "-"
    }
    return "-"
}
export const renderLink = (text,to,config) => {

    if (!_.isEmpty(text)) {
        return <Link style={{textDecoration:"underline"}} to={to}>{text}</Link>  ?? "-"
    }
    return "-"
}

export const renderTag = (value, option) => {
    const item=option?.find(item=>item.id === value)
    return <Button color={item?.color||"default"}>{item?.name||"-"}</Button>
}

export const renderTextWithOption = (value, option) => {
    const item=option?.find(item=>item.id === value)
    return item?.name||"-"
}

export const genImagePath = (key, prefix,w,q,isCache=false) => {
    return w ?
       (q? `${prefix || STORAGE_PREFIX}/${key}?w=${w}&q=${q}`:
       `${prefix || STORAGE_PREFIX}/${key}?w=${w}`) :
        `${prefix || STORAGE_PREFIX}/${key}` 
}

export const localeCompare = (a="", b="") => {
    return a.localeCompare(b)
}

export const compareDate = (before, after) => {
    return (moment(before).unix() > moment(after).unix())
}