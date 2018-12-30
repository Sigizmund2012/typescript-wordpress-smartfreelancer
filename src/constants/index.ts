const perPage = 100;
const portfolioCategory = "5";
const blogCategory = "3";
const aboutMePage = "1729";
const contactsPage = "1731";

const portfolioRoute = `https://smartfreelancer.ru/wp-json/wp/v2/posts?per_page=${perPage}&categories=${portfolioCategory}`;

const blogRoute = `https://smartfreelancer.ru/wp-json/wp/v2/posts?per_page=${perPage}&categories=${blogCategory}`;

const aboutMePageRoute = `https://smartfreelancer.ru/wp-json/wp/v2/pages/${aboutMePage}`;

const contactsPageRoute = `https://smartfreelancer.ru/wp-json/wp/v2/pages/${contactsPage}`;

export { portfolioRoute, blogRoute, aboutMePageRoute, contactsPageRoute };
