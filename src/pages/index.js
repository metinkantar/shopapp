import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import { selectedValue } from "../redux/features/countSlice";
import Slider from "../components/home/Slider";

const Anasayfa = () => {
  const value = useSelector(selectedValue);
  return (
    <>
      <div className="main-content">
        <div className="container">
          <div className="row mt-4">
            <div className="col-3">
              Kategoriler
            </div>
            <div className="col-9">
              <Slider />
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Anasayfa;
