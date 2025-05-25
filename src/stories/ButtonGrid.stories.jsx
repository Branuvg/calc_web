import ButtonGrid from '../components/ButtonGrid'

export default {
  title: 'Components/ButtonGrid',
  component: ButtonGrid
}

export const Default = {
  args: {
    onButtonClick: (value) => alert(`Pressed ${value}`)
  }
}
