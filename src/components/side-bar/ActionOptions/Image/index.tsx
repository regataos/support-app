import iconReturn from './return.png';
import iconReturnOff from './return-off.png';
import iconReturnDark from './return-dark.png';
import iconReturnOffDark from './return-off-dark.png';
import iconMenu from './menu.png';
import iconMenuDark from './menu-dark.png';

interface Types {
    return: string,
    returnOff: string,
    returnDark: string,
    returnOffDark: string,
    menu: string,
    menuDark: string
}

const Image: Types = {
    return: iconReturn,
    returnOff: iconReturnOff,
    returnDark: iconReturnDark,
    returnOffDark: iconReturnOffDark,
    menu: iconMenu,
    menuDark: iconMenuDark
};
export default Image;
