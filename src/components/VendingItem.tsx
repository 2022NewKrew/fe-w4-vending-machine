import { IProductStock } from '@types';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    product: IProductStock;
    isSelectable: boolean;
    isOnLoading: boolean;
    onClick: (product: IProductStock) => void;
}

export const VendingItem = ({ product, isSelectable, isOnLoading, onClick }: Props) => {
    const isItemActive = useMemo(
        () => isSelectable && !!product.stock,
        [product.stock, isSelectable],
    );

    return (
        <Wrapper isActive={isItemActive} onClick={() => onClick(product)}>
        <Wrapper isActive={isItemActive} onClick={selectProduct}>
            <Title>{product.name}</Title>
            <Price>
                <span>{product.price}</span>
                <span className="txt__unit">원</span>
            </Price>

            <Stock isActive={!!product.stock}>
                {product.stock}
                <span className="txt__unit">개 남음</span>
            </Stock>
        </Wrapper>
    );
};

const Wrapper = styled.div<{ isActive: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: var(--content-bg);
    border-radius: 14px;
    border: 1px solid var(--theme-bg-color);
    padding: 1rem;
    user-select: none;

    ${({ isActive }) =>
        isActive
            ? css`
                  cursor: pointer;
                  transition: transform 300ms ease-in-out;
                  &:hover {
                      transform: scale(1.02);
                      background-color: var(--theme-bg-color);
                  }
              `
            : css`
                  pointer-events: none;
                  cursor: default;
                  opacity: 0.5;
              `}
`;

const Title = styled.div`
    word-break: keep-all;
`;

const Price = styled.div`
    margin-top: auto;
    .txt__unit {
        font-size: 12px;
        margin-left: 2px;
        opacity: 0.8;
    }
`;

const Stock = styled.div<{ isActive: boolean }>`
    transition: opacity 200ms ease-in-out;
    ${({ isActive }) =>
        !isActive &&
        css`
            opacity: 0;
        `}

    .txt__unit {
        font-size: 12px;
        margin-left: 2px;
        opacity: 0.8;
    }
`;
