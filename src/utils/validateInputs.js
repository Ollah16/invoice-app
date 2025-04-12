
export const handleInputValidation = (type, value) => {

    switch (type) {
        case "WHOISFROM":
            if (!value.trim()) {
                return "Please enter the name of who the invoice is from.";
            }
            break;
        default:
            return ""
    }
}