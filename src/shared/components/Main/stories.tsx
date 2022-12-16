import { withKnobs, text } from '@storybook/addon-knobs'
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
  },
  decorators: [withKnobs]
} as ComponentMeta<ComponentType>
export const Basic: ComponentStory<ComponentType> = ({
  title,
  description
}) => {
  return (
    <Main
      title={title || text('title', 'Boilerplate Next + Typescript')}
      description={
        description ||
        text('description', 'TypeScript, ReactJS, NextJS e Styled Components')
      }
    />
  )
}
