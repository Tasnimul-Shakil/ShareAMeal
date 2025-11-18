import { Link } from "react-router-dom";

const Blogs = ({ card }) => {
  const {
    blog_id,
    title,
    time,
    categories,
    description,
    author_name,
    author_role,
    author_image,
    card_image,
  } = card;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Join categories array into a comma-separated string
  const categoriesString = Array.isArray(categories)
    ? categories.join(", ")
    : categories;

  return (
    <article className="card border-3 border-[#155315] shadow-xl border-2 rounded-xl">
      <figure>
        <img src={card_image} alt={title} />
      </figure>

      <div className="flex px-4 pt-4 items-center gap-x-2 text-xs">
        <time dateTime={time} className="text-gray-500">
          {time}
        </time>
        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          {categoriesString}
        </span>
      </div>

      <div className="group px-4 relative">
        <h3 className="pt-3 text-lg font-semibold line-clamp-1 leading-6 group-hover:text-gray-600">
          <Link to={`/blogDetails/${blog_id}`} onClick={scrollToTop}>
            {title}
          </Link>
        </h3>
        <p className="pt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>

      <div className="relative px-4 py-4 flex items-center gap-x-4">
        <img
          src={author_image}
          alt={author_name}
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold">
            <Link to={`/blogDetails/${blog_id}`} onClick={scrollToTop}>
              {author_name}
            </Link>
          </p>
          <p className="text-gray-600">{author_role}</p>
        </div>
      </div>
    </article>
  );
};

export default Blogs;
