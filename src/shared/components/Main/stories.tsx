import { ComponentMeta, ComponentStory } from '@storybook/react'
import Main from '.'
type ComponentType = typeof Main
export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: { control: 'text' },
    description: {
      control: 'text'
    }
  }
} as ComponentMeta<ComponentType>
export const Basic: ComponentStory<ComponentType> = args => {
  return <Main {...args} />
}
