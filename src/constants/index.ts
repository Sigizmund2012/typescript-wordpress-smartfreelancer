const perPage = 100;
const portfolioCategory = "5";
const blogCategory = "3";

const portfolioRoute = `https://smartfreelancer.ru//wp-json/wp/v2/posts?per_page=${perPage}&categories=${portfolioCategory}`;

const blogRoute = `https://smartfreelancer.ru//wp-json/wp/v2/posts?per_page=${perPage}&categories=${blogCategory}`;

export { portfolioRoute, blogRoute };
