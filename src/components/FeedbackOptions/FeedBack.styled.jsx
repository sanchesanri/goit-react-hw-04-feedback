import styled from "styled-components";

export const BtnFeedBack = styled.button`
    min-width: 60px ;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid teal;

    &:not(:last-child){
        margin-right: 10px;
    }

    &:hover, focus{
        background-color: teal
    }

`