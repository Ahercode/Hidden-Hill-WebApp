import { useEffect, useState } from "react";
import "./searchItem.css";
import axios from "axios"

const SearchItem = () => {


  const [dataSource, setData]= useState("")

  const loadSearchItem = async () => {
    // setLoading(true)
    try {
     
      const response = await axios.get("http://localhost:4000/searchItems")
      setData(response.data)
      // setLoading(false)
      console.log(dataSource)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadSearchItem()
  }, [])
  return (
    <>

    {
      Object.values(dataSource).map((value, id)=>(
        <div className="searchItem" key={id}>
          <img
            src={value.image}
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">{value.siTitle}</h1>
            <span className="siDistance">{value.siDistance}</span>
            <span className="siTaxiOp">{value.siTaxiOp}</span>
            <span className="siSubtitle">
              Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
              Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">{value.siCancelOp}</span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>{value.siRatingNum}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">$112</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
            </div>
          </div>
        </div>
      ))
    }


    
    </>
  );
};

export default SearchItem;
