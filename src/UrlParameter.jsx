import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  console.log(search);
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>パラメータは{id}です。</p>
      <p>クエリパラメータは{query.get("name")}です。</p>
    </div>
  );
};
