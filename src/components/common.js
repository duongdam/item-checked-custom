import styled from "styled-components";
import { Avatar, Tooltip } from "antd";
import { ReactComponent as TickSvg } from "../tick.svg";
import "antd/lib/avatar/style/css";
import "antd/lib/tooltip/style/css";

export const TickCustom = styled(TickSvg)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
`;

export const DivItems = styled.div(props => ({
  position: "relative",
  width: `${props.otherprops.width}`,
  maxWidth: `${props.otherprops.maxWidth}`,
  height: `${props.otherprops.height}`,
  margin: `${props.otherprops.margin}`,
  padding: `${props.otherprops.padding}`,
  borderRadius: `${props.otherprops.borderRadius}`,
  border: `${props.otherprops.border} ${props.otherprops.borderType} ${props.otherprops.borderColor}`,
  "&:hover": {
    background: "#F1F1F1",
    cursor: "pointer"
  },
  "&:hover span": {
    background: "#807A7A"
  },
  "&:hover img": {
    background: "none",
    cursor: "pointer"
  },
  "& .ant-tooltip-arrow-content": {
    backgroundColor: props.otherprops.color
  },
  "& .ant-tooltip-inner": {
    backgroundColor: props.otherprops.color
  }
}));

export const DivBox = styled.div(props => ({
  position: "relative",
  borderRadius: "5px",
  width: "20px",
  height: "20px",
  margin: props.otherprops.iconMargin,
  backgroundColor: props.color,
  "& img": {
    position: "absolute",
    left: "50%",
    right: 0,
    bottom: 0,
    top: "50%",
    maxWidth: "100%",
    transform: "translate(-50%, -50%)"
  }
}));

export const TitleStyled = styled.h1(props => ({
  padding: 0,
  display: "block",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  fontSize: "1.1rem",
  marginBottom: "unset",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: `${props.isBold ? "bold !important" : "normal"}`,
  color: `${props.isTextColor ? props.color : ""}`
}));

export const DivNested = styled.div`
  padding: 0;
  height: 100%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.otherprops.isRevert ?
    "row-reverse" :
    "unset"};

  &:focus {
    outline: none;
  }

  &.ant-avatar-string {
    font-size: 15px;
  }
`;

export const DivName = styled.div`
  margin: 0;
  flex: 1 1 auto;
  min-width: 0;
  width: ${props => props.isWidth ?
    "calc(100% - 30px)" :
    "calc(100% - 65px)"};

  & h1 {
    text-align: left;
    margin: 0 3px;
    //display: flex;
    //justify-content: left;
    //margin-bottom: unset !important;
  }
`;

export const AvatarCustom = styled(Avatar)`
  width: ${props => props.sizeLeft ? `${props.sizeLeft}px` : "28px"};
  height: ${props => props.sizeLeft ? `${props.sizeLeft}px` : "28px"};
  line-height: ${props => props.sizeLeft ? `${props.sizeLeft}px` : "28px"};
  font-size: ${props => props.otherprops.fontSizeLeft ? `${props.otherprops.fontSizeLeft}px !important` : "11px !important"};
  margin-right: 10px;
  margin-left: ${props => props.otherprops.isRevert ? "10px" : ""};

  & .ant-avatar-string {
    transform: unset !important;
    font-weight: bold;
    position: static;
  }

`;

export const AvatarNoneCustom = styled(Avatar)`
  width: ${props => props.sizeLeft ? `${props.sizeLeft}px` : "28px"};
  height: ${props => props.sizeLeft ? `${props.sizeLeft}px` : "28px"};
  line-height: ${props => props.sizeLeft ? `${props.sizeLeft}px` : "28px"};
  font-size: ${props => props.otherprops.fontSizeLeft ? `${props.otherprops.fontSizeLeft}px !important` : "11px !important"};
  background: none !important;
  margin-right: 10px;

  & .ant-avatar-string {
    transform: unset !important;
    font-weight: bold;
  }
`;

export const TooltipCustom = styled(Tooltip)`
  & .ant-tooltip-inner {
    background-color: ${props => props.otherprops.color};
  }

  & .ant-tooltip-arrow-content {
    background-color: ${props => props.otherprops.color};
  }
`;
