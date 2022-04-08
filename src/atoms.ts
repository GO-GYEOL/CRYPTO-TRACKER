import {atom} from "recoil";

export const isDarkAtom = atom({
    key:"isDark",
    default:true,
    // default가 false이므로 라이트테마가 기본이다.
});