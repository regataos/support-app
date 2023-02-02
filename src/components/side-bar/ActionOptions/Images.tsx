import iconReturn from '../../../assets/actions-options/return.png';
import iconReturnOff from '../../../assets/actions-options/return-off.png';
import iconReturnDark from '../../../assets/actions-options/return-dark.png';
import iconReturnOffDark from '../../../assets/actions-options/return-off-dark.png';
import iconMenu from '../../../assets/actions-options/menu.png';
import iconMenuDark from '../../../assets/actions-options/menu-dark.png';

interface Types {
    return: string,
    returnOff: string,
    returnDark: string,
    returnOffDark: string,
    hideMenu: string,
    hideMenuDark: string
}

const Images: Types = {
    return: iconReturn,
    returnOff: iconReturnOff,
    returnDark: iconReturnDark,
    returnOffDark: iconReturnOffDark,
    hideMenu: iconMenu,
    hideMenuDark: iconMenuDark
};
export default Images;
