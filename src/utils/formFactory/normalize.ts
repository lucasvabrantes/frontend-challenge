import { IFormData } from "../../pages/FormPage/interfaces";

export const backEndNormalizeData = (data: IFormData) => {
    data.birthdate = data.birthdate.replace("/", "").replace("/", "");

    data.phoneNumber = data.phoneNumber
        .replace("(", "")
        .replace(")", "")
        .replace("-", "");

    data.documentNumber = data.documentNumber
        .replace(".", "")
        .replace(".", "")
        .replace("-", "");

    data.zipcode = data.zipcode.replace("-", "");

    const newMinimumWage = parseFloat(
        data.minimumWage.replace(/[^\d,]/g, "").replace(",", ".")
    );

    const newObject = {
        ...data,
        minimumWage: newMinimumWage,
    };
    delete newObject.confirmPassword;

    return newObject;
};
