import iconSolutions from '../../../assets/menu-options/solutions.png';
import iconSolutionsDark from '../../../assets/menu-options/solutions-dark.png';
import iconSupport from '../../../assets/menu-options/support.png';
import iconSupportDark from '../../../assets/menu-options/support-dark.png';
import iconForum from '../../../assets/menu-options/forum.png';
import iconForumDark from '../../../assets/menu-options/forum-dark.png';

interface Types {
    solutions: string,
    solutionsDark: string,
    support: string,
    supportDark: string,
    forum: string,
    forumDark: string
}

const Images: Types = {
    solutions: iconSolutions,
    solutionsDark: iconSolutionsDark,
    support: iconSupport,
    supportDark: iconSupportDark,
    forum: iconForum,
    forumDark: iconForumDark
};
export default Images;
