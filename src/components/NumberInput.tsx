import * as React from "react";
import { Button, Input, InputNumber } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import clx from "classnames";
import _ from "lodash";
import { InputNumberProps } from "antd/lib/input-number";
import { ButtonProps } from "antd/lib/button";

interface Props extends InputNumberProps {
  step?: number;
  onChange?: (value?: number) => void;
  decrementBtnProps: ButtonProps;
  incrementBtnProps: ButtonProps;
}
const NumberInput: React.FC<Props> = props => {
  const {
    className,
    min,
    max,
    disabled,
    precision = 0,
    step = 1,
    onChange,
    size,
    style,
    value: propsValue,
    decrementBtnProps,
    incrementBtnProps,
    ...rest
  } = props;
  const [value, setValue] = React.useState(propsValue);
  const updateValue = val => {
    if (val != null) {
      const newVal = _.clamp(val, min ?? val, max ?? val);
      if (newVal !== value) {
        setValue(newVal);
        onChange?.(newVal);
      }
    }
  };
  return (
    <Input.Group
      className="full-width"
      compact
      style={{ display: "flex" }}
      size={size}
    >
      <Button
        {...decrementBtnProps}
        disabled={disabled || value === min}
        onClick={e => {
          if (value != null) {
            updateValue(value - step);
          }
          decrementBtnProps?.onClick?.(e);
        }}
        style={{ ...(decrementBtnProps?.style || {}), alignItems: "center" }}
      >
        <MinusOutlined />
      </Button>
      <InputNumber
        {...rest}
        className={clx("hide-arrows", className)}
        disabled={disabled}
        value={value}
        min={min}
        max={max}
        onBlur={e => {
          const parsedVal = parseInt(e.target.value, 10);
          if (!isNaN(parsedVal)) {
            updateValue(parsedVal);
          }
        }}
        precision={precision}
        step={step}
        inputMode={precision === 0 ? "decimal" : "numeric"}
      />
      <Button
        {...incrementBtnProps}
        disabled={disabled || value === max}
        onClick={e => {
          if (value != null) {
            updateValue(value + step);
          }
          incrementBtnProps?.onClick?.(e);
        }}
        style={{ ...(incrementBtnProps?.style || {}), alignItems: "center" }}
      >
        <PlusOutlined />
      </Button>
    </Input.Group>
  );
};

export default NumberInput;
