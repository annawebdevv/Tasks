
export const sort = ({selectSort, posts}) => {
    switch (selectSort) {
      case "titleIncrement":
        return [...posts].sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      case "titleDecrement":
        return [...posts].sort((a, b) =>
          b.title.toLowerCase().localeCompare(a.title.toLowerCase())
        );
      case "authorIncrement":
        if(posts.author !== undefined){
        return [...posts].sort((a, b) =>
          a.author.toLowerCase().localeCompare(b.author.toLowerCase())
        )}
        return posts;
      case "authorDecrement":
        if(posts.author !==undefined){
        return [...posts].sort((a, b) =>
          b.author.toLowerCase().localeCompare(a.author.toLowerCase())
        )}
        return posts;
      case "dateIncrement":
        if(posts.dataSort !==undefined){
        return [...posts].sort((a, b) => a.dataSort - b.dataSort)}
        return posts;
      case "dateDecrement":
        if(posts.dataSort !==undefined){
        return [...posts].sort((a, b) => b.dataSort - a.dataSort)}
        return posts;
      default:
        return posts;
    }
  };