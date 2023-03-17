import _ from "lodash";
import moment from "moment"


export const formatDate = (date, format, origin = false) => {
    
    if (date && moment(date).isValid()) {
        return moment(date).format(format||"DD/MM/YYYY - HH:mm:ss");
    } 
    return origin ? date:"-"
}

export const formatCurrency = (number) => {
    if (_.isNumber(number)) {        
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');  
    }   
    else {        
        return 0    
    }
}
