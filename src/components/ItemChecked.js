import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  AvatarCustom, AvatarNoneCustom,
  DivBox,
  DivItems, DivName,
  DivNested, TickCustom, TitleStyled,
  TooltipCustom
} from "./common";
import PropType from "prop-types";

const ItemCheckedCustom = ({
                             onClick,
                             disabled,
                             ...rest
                           }) => {

  const onClickAction = () => {
    if (disabled) {
      return;
    }
    if (onClick && typeof onClick === "function") {
      return onClick();
    }
  };

  console.log(rest.id);
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
      maxWidth: rest.maxWidth
    }} {...rest}>
      <TooltipCustom
        title={rest.offTooltip ? null : rest.name}
        placement={rest.tooltipPlacement}
        arrowPointAtCenter
        getPopupContainer={() => document.getElementById(rest.id)}
        otherprops={{
          color: rest.color
        }}
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
          <DivName>
            <TitleStyled isTextColor={rest.isTextColor} isBold={rest.isBold}
                         color={rest.color}>
              {rest.name}
            </TitleStyled>
          </DivName>
          {
            rest.hiddenAvatar ? null :
              rest.isLeft ?
                <AvatarCustom size={20}
                              otherprops={{ isRevert: rest.isRevert }}> {rest.leftNumber}</AvatarCustom>
                : <AvatarNoneCustom size={20} />
          }
        </DivNested>
      </TooltipCustom>
    </DivItems>
  );
};

ItemCheckedCustom.propTypes = {
  id: PropType.string,
  width: PropType.string,
  maxWidth: PropType.string,
  height: PropType.string,
  borderRadius: PropType.string,
  name: PropType.string,
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
  iconMargin: PropType.string
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
  iconMargin: "0px 3px"
};

export default ItemCheckedCustom;
