# item-checked-custom

> Classfunc item checked custom used antd and styled component

[![NPM](https://img.shields.io/npm/v/item-checked-custom.svg)](https://www.npmjs.com/package/item-checked-custom) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

https://duongdam.github.io/item-checked-custom/

## Install

```bash
npm install --save item-checked-custom

yarn add item-checked-custom
```

## Usage

```js
import React from "react";

import { ItemCheckedCustom } from "item-checked-custom";

const App = () => {
  const [checked, setChecked] = React.useState(true);

  const onClick = () => {
    setChecked(!checked);
  };

  return (
    <div style={{
      width: "100%",
      maxWidth: "500px",
      margin: "auto",
      marginTop: "100px",
      textAlign: "center"
    }}>

      Default
      <ItemCheckedCustom
        width={"250px"}
        checked={checked}
        onClick={onClick}
        margin={"10px"}
        id={1}
      />

      With border radius
      <ItemCheckedCustom
        name={"ClassFunc checked"}
        border={"1px"}
        borderRadius={"10px"}
        checked={checked}
        onClick={onClick}
        margin={"10px"}
        id={2}
      />

      With border radius text color
      <ItemCheckedCustom
        name={"ClassFunc checked"}
        border={"1px"}
        borderRadius={"10px"}
        checked={checked}
        onClick={onClick}
        margin={"10px"}
        isTextColor={true}
        id={3}
      />

      With change color
      <ItemCheckedCustom
        name={"ClassFunc checked"}
        border={"1px"}
        borderRadius={"10px"}
        color={"#690003"}
        borderColor={"#690003"}
        checked={checked}
        onClick={onClick}
        margin={"10px"}
        isTextColor={true}
        id={4}
      />

      With left number
      <ItemCheckedCustom
        border={"1px"}
        borderRadius={"10px"}
        checked={checked}
        onClick={onClick}
        margin={"10px"}
        isLeft={true}
        leftNumber={10}
        id={5}
      />

      Width revert
      <ItemCheckedCustom
        border={"1px"}
        margin={"10px"}
        checked={checked}
        onClick={onClick}
        isRevert={true}
        isLeft={true}
        leftNumber={10}
        id={6}
      />

      Width disable
      <ItemCheckedCustom
        border={"1px"}
        margin={"10px"}
        checked={checked}
        onClick={onClick}
        isRevert={true}
        disabled={true}
        id={7}
      />

      With off tooltip & disable
      <ItemCheckedCustom
        border={"1px"}
        margin={"10px"}
        checked={checked}
        onClick={onClick}
        isRevert={true}
        offTooltip={true}
        disabled={true}
        id={8}
      />
    </div>
  );

};

export default App;

```

## Props type:

```text
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
  callBack: PropType.func,
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
```

## Default props

```text
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
  callBack: null,
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
```

## License

MIT © [duongdam](https://github.com/duongdam)
