import { enUS } from "date-fns/locale/en-US";
import { arSA } from "date-fns/locale/ar-SA";
import { de } from "date-fns/locale/de";

export const getValueByKey = (language: string) => {
  switch (language) {
    case "en":
      return enUS;
    case "ar":
      return arSA;
    case "de":
      return de;
    default:
      return enUS;
  }
};
