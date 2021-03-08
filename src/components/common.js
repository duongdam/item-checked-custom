import styled from "styled-components";
import { Avatar, Tooltip } from "antd";
import { ReactComponent as TickSvg } from "../tick.svg";

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
  width: 80%;

  & h1 {
    display: flex;
    justify-content: left;
    margin-bottom: unset !important;
  }
`;

export const AvatarCustom = styled(Avatar)`
  width: 20px;
  height: 20px;
  font-size: 13px;
  margin-right: 10px;
  margin-left: ${props => props.otherprops.isRevert ? "10px" : ""};
`;

export const AvatarNoneCustom = styled(Avatar)`
  width: 20px;
  height: 20px;
  font-size: 13px;
  background: none !important;
  margin-right: 10px;
`;

export const TooltipCustom = styled(Tooltip)`

`;
