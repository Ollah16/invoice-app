
export const handleInputValidation = (type, value) => {

    switch (type) {
        case "WHOISFROM":
            if (!value.trim()) {
                return "Please enter the name of who the invoice is from.";
            }
            break;
        case "BILL_TITLE":
            if (!value.trim()) {
                return "Please enter receiver information";
            }
            break;
        case "BILL":
            if (!value.trim()) {
                return "Please enter receiver information";
            }
            break;
        default:
            return ""
    }
}