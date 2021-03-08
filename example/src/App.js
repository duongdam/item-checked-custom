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
        id={'1'}
      />

      With border radius
      <ItemCheckedCustom
        name={"ClassFunc checked"}
        border={"1px"}
        borderRadius={"10px"}
        checked={checked}
        onClick={onClick}
        margin={"10px"}
        id={'2'}
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
        id={'3'}
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
        id={'4'}
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
        id={'5'}
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
        id={'6'}
      />

      Width disable
      <ItemCheckedCustom
        border={"1px"}
        margin={"10px"}
        checked={checked}
        onClick={onClick}
        isRevert={true}
        disabled={true}
        id={'7'}
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
        id={"8"}
      />
    </div>
  );

};

export default App;
