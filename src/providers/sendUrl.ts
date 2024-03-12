import { TFormSchema } from "../pages/ Home/formSchema";
import { api } from "../services/api";

export const sendUrl = async (formData: TFormSchema) => {
    try {
        const { data } = await api.post("", formData);
        return data.newUrl;
    } catch (error) {
        console.log(error);
    } finally {
    }
};
