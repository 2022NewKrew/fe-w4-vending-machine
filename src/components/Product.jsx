import React, { useCallback, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import useToggle from "../hooks/useToggle";

const Product = ({ info }) => {
  const [stock, setStock] = useState(info.stock);
  const [select, toggleSelect] = useToggle(false);

  const titleClass = classNames("title", { select }, { soldout: !stock });

  const handleClick = useCallback(() => {
    if (!stock) return;
    toggleSelect();
  }, [stock, toggleSelect]);

  return (
    <Wrapper>
      <div className={titleClass} onClick={handleClick}>
        {info.name}
      </div>
      <div className="price">
        {info.price}
        {!stock && <span>X</span>}
      </div>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.article`
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 100%;
  .title {
    border: 4px solid gray;
    padding: 20px 5px;
    cursor: pointer;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .select {
    border: 4px dashed skyblue;
  }
  .price {
    margin-top: 10px;
    position: relative;
    span {
      color: red;
      font-size: 14px;
      font-weight: bold;
      position: absolute;
      left: 20px;
    }
  }
  .soldout {
    cursor: not-allowed;
    .price {
      text-decoration: line-through;
    }
  }
`;
