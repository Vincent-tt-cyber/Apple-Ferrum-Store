import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={280}
    viewBox="0 0 150 210"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="120" />
    <rect x="0" y="132" rx="3" ry="3" width="150" height="10" />
    <rect x="0" y="147" rx="3" ry="3" width="93" height="15" />
    <rect x="0" y="190" rx="3" ry="3" width="80" height="15" />
    <rect x="118" y="175" rx="9" ry="9" width="32" height="32" />
  </ContentLoader>
);

export default Loader;
