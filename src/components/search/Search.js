import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConText } from "../../context/AppConText";

const Search = ({setShowSearch}) => {
  const value = useContext(ConText);
  const [products] = value.products;
  const [filter, setFilter] = useState("");
  const searchText = (e) => {
    setFilter(e.target.value);
  };
  let dataSearch = products.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLocaleLowerCase())
    )
  });

  return (
    <div className="search">
      <div className="form">
        <input
          type="text"
          autoFocus
          placeholder="Search for Products"
          value={filter}
          onChange={searchText.bind(this)}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      {dataSearch.map((item, index) => {
        return(
        <div className="search-result-content">
          <div className="search-results">
            <div className="search-result-item">
              <div className="img-container">
                <img src={item.img} alt="" />
              </div>
              <div className="prod-details">
                <span className="name">{item.title}</span>
                <span className="desc">{item.title1}</span>
              </div>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
};
export default Search;
