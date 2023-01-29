import iconSolutions from './solutions.png';
import iconSolutionsDark from './solutions-dark.png';
import iconSupport from './support.png';
import iconSupportDark from './support-dark.png';
import iconForum from './forum.png';
import iconForumDark from './forum-dark.png';

interface Types {
    solutions: string,
    solutionsDark: string,
    support: string,
    supportDark: string,
    forum: string,
    forumDark: string
}

const Image: Types = {
    solutions: iconSolutions,
    solutionsDark: iconSolutionsDark,
    support: iconSupport,
    supportDark: iconSupportDark,
    forum: iconForum,
    forumDark: iconForumDark
};
export default Image;
