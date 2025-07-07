
import Screen from "../components/Screen"

export default {
  title: "Components/Screen",
  component: Screen,
}

const Template = (args) => <Screen {...args} />

export const Default = Template.bind({})
Default.args = {
  calc: {
    firstOperand: "1234",
    secondOperand: "5678",
    operator: "+",
  },
  format: (value) => {
    if (!value) return ""
    const [intPart, decimalPart] = value.toString().split(".")
    const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return decimalPart ? `${withCommas}.${decimalPart}` : withCommas
  },
}

export const OnlySecondOperand = Template.bind({})
OnlySecondOperand.args = {
  calc: {
    firstOperand: null,
    secondOperand: "1234567",
    operator: "+",
  },
  format: (value) => value,
}
