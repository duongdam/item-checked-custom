import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  AvatarCustom,
  AvatarNoneCustom,
  DivBox,
  DivItems,
  DivName,
  DivNested,
  TickCustom,
  TitleStyled,
  TooltipCustom
} from "./common";
import PropType from "prop-types";

const ItemCheckedCustom = ({
                             onClick,
                             disabled,
                             ...rest
                           }) => {
  const onClickAction = (event) => {
    if (disabled) {
      return;
    }
    if (onClick && typeof onClick === "function") {
      return onClick(event);
    }
  };

  return (
    <DivItems id={rest.id} key={rest.id} otherprops={{
      width: rest.width,
      height: rest.height,
      borderRadius: rest.borderRadius,
      borderColor: rest.borderColor,
      color: rest.color,
      border: rest.border,
      borderType: rest.borderType,
      margin: rest.margin,
      padding: rest.padding,
      maxWidth: rest.maxWidth,
      hoverChangeColor: rest.hoverChangeColor
    }} {...rest}>
      <TooltipCustom
        title={rest.offTooltip ? null : rest.name}
        placement={rest.tooltipPlacement}
        arrowPointAtCenter
        getPopupContainer={() => document.getElementById(rest.id)}
        otherprops={{
          color: rest.color
        }}
        destroyTooltipOnHide={{ keepParent: false }}
      >
        <DivNested
          otherprops={{ isRevert: rest.isRevert }}
          onClick={onClickAction}
        >
          <DivBox color={rest.color}
                  otherprops={{ iconMargin: rest.iconMargin }}
          >
            {
              rest.checked &&
              <TickCustom alt="" />
            }
          </DivBox>
          <DivName isWidth={rest.hiddenAvatar}>
            <TitleStyled isTextColor={rest.isTextColor} isBold={rest.isBold}
                         color={rest.color}>
              {rest.name}
            </TitleStyled>
          </DivName>
          {
            rest.hiddenAvatar ? null :
              rest.isLeft ?
                <AvatarCustom size={rest.sizeLeft} otherprops={{
                  isRevert: rest.isRevert,
                  fontSizeLeft: rest.fontSizeLeft
                }}> {rest.leftNumber}</AvatarCustom>
                : <AvatarNoneCustom size={rest.sizeLeft} otherprops={{ fontSizeLeft: rest.fontSizeLeft }} />
          }
        </DivNested>
      </TooltipCustom>
    </DivItems>
  );
};

ItemCheckedCustom.propTypes = {
  id: PropType.oneOfType([PropType.string, PropType.number]),
  width: PropType.string,
  maxWidth: PropType.string,
  height: PropType.string,
  borderRadius: PropType.string,
  name: PropType.oneOfType([PropType.string, PropType.element, PropType.elementType]),
  color: PropType.string,
  borderColor: PropType.string,
  border: PropType.string,
  borderType: PropType.oneOf(["solid", "none", "dotted"]),
  onClick: PropType.func,
  isLeft: PropType.bool,
  leftNumber: PropType.number,
  checked: PropType.bool,
  isRevert: PropType.bool,
  disabled: PropType.bool,
  hiddenAvatar: PropType.bool,
  isTextColor: PropType.bool,
  isBold: PropType.bool,
  offTooltip: PropType.bool,
  tooltipPlacement: PropType.string,
  margin: PropType.string,
  padding: PropType.string,
  iconMargin: PropType.string,
  sizeLeft: PropType.number,
  fontSizeLeft: PropType.number,
  hoverChangeColor: PropType.bool
};

ItemCheckedCustom.defaultProps = {
  id: uuidv4(),
  width: "100%",
  maxWidth: "350px",
  height: "40px",
  borderRadius: "0px",
  name: "ClassFunc checked",
  color: "#1790FF",
  borderColor: "#1790FF",
  border: null,
  borderType: "solid",
  onClick: null,
  isLeft: false,
  leftNumber: null,
  checked: false,
  isRevert: false,
  disabled: false,
  hiddenAvatar: false,
  isTextColor: false,
  isBold: false,
  offTooltip: false,
  tooltipPlacement: "top",
  margin: "5px",
  padding: "unset",
  iconMargin: "0px 3px",
  sizeLeft: 28,
  fontSizeLeft: 11,
  hoverChangeColor: true
};

export default ItemCheckedCustom;
