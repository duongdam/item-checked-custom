import React from "react";
import { v4 as uuidv4 } from "uuid";
import "antd/dist/antd.css";
import {
  AvatarCustom, AvatarNoneCustom,
  DivBox,
  DivItems, DivName,
  DivNested, TickCustom, TitleStyled,
  TooltipCustom
} from "./components/common";

export const ItemCheckedCustom = ({
                                    id = uuidv4(),
                                    width = "100%",
                                    height = "40px",
                                    borderRadius = "0px",
                                    name = "ClassFunc checked",
                                    color = "#1790FF",
                                    borderColor = "#1790FF",
                                    border = null,
                                    borderType = "solid",
                                    onClick = function() {

                                    },
                                    isLeft = false,
                                    leftNumber = null,
                                    checked = false,
                                    isRevert = false,
                                    disabled = false,
                                    hiddenAvatar = false,
                                    isTextColor = false,
                                    isBold = false,
                                    offTooltip = false,
                                    tooltipPlacement = "top",
                                    margin = "5px",
                                    padding = "unset"
                                  }) => {

  const onClickAction = () => {
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <DivItems id={id} key={id} otherprops={{
      width,
      height,
      borderRadius,
      borderColor,
      color,
      border,
      borderType,
      margin,
      padding
    }}>
      <TooltipCustom
        title={offTooltip ? null : name}
        placement={tooltipPlacement}
        arrowPointAtCenter
        getPopupContainer={() => document.getElementById(id)}
      >
        <DivNested
          otherprops={{ isRevert }}
          onClick={onClickAction}
        >
          <DivBox color={color}>
            {
              checked &&
              <TickCustom alt="" />
            }
          </DivBox>
          <DivName>
            <TitleStyled isTextColor={isTextColor} isBold={isBold}
                         color={color}>
              {name}
            </TitleStyled>
          </DivName>
          {
            hiddenAvatar ? null :
              isLeft ?
                <AvatarCustom size={20} otherprops={{isRevert}}> {leftNumber}</AvatarCustom>
                : <AvatarNoneCustom size={20} />
          }
        </DivNested>
      </TooltipCustom>
    </DivItems>
  );
};
