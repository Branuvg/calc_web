import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button
}

export const Digit = {
  args: {
    label: '7',
    onClick: () => alert('Clicked 7')
  }
}

export const Operator = {
  args: {
    label: '+',
    onClick: () => alert('Clicked +')
  }
}
