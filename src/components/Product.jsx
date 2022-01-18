import React, { useEffect, useState, useCallback, useContext } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { ContextStore, RETURN_CHANGE, SELECT_PRODUCT } from "../store";

let timer = 0;

const Product = ({ productInfo: { name, price, stock } }) => {
  const {
    progressInfo: { inputMoney },
    dispatch,
    insertMode,
  } = useContext(ContextStore);

  const [productStock, setProductStock] = useState(stock);
  const [selectable, setSelectable] = useState(false);
  const [returnMode, setReturnMode] = useState(false);

  const titleClass = classNames("title", { selectable });

  const handleClick = useCallback(() => {
    if (!selectable) return;
    if (timer) clearTimeout(timer);
    dispatch({
      actionType: SELECT_PRODUCT,
      payload: { name, price },
    });

    setProductStock((prev) => prev - 1);

    timer = setTimeout(() => {
      setReturnMode(true);
    }, 2000);
  }, [selectable, dispatch, name, price]);

  useEffect(() => {
    if (returnMode && inputMoney) {
      dispatch({
        actionType: RETURN_CHANGE,
      });
      setReturnMode(false);
    }
  }, [returnMode]);

  useEffect(() => {
    if (insertMode) clearTimeout(timer);
  }, [insertMode]);

  useEffect(() => {
    setSelectable(price <= inputMoney && productStock > 0);
  }, [price, inputMoney, productStock]);

  return (
    <Wrapper soldOut={!productStock} onClick={handleClick}>
      <div className={titleClass}>{name}</div>
      <div className="price">
        {price}
        {!productStock && <span>X</span>}
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
  .selectable {
    border: 4px dashed skyblue;
    cursor: pointer;
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
  ${({ soldOut }) =>
    soldOut
      ? `
  cursor: not-allowed;
  .price {
    text-decoration: line-through;
  }`
      : null}
`;
