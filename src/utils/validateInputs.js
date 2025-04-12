
export const handleInputValidation = (type, value) => {

    const inputValue = value.trim();

    switch (type) {
        case "WHOISFROM":
            if (!inputValue) {
                return "Please enter the name of who the invoice is from.";
            }
            break;
        case "BILL_TITLE":
            if (!inputValue) {
                return "Please enter a title";
            }
            break;
        case "BILL":
            if (!inputValue) {
                return "Please enter receiver information";
            }
            break;
        default:
            return ""
    }
}