import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { VideoComponent } from './video.component';

export default {
  title: 'VideoComponent',
  component: VideoComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  argTypes: {
    info: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
} as Meta<VideoComponent>;

const Template: Story<VideoComponent> = (args: VideoComponent) => ({
  component: VideoComponent,
  props: args,
});


export const Primary: Story<VideoComponent> = Template.bind({});
Primary.args = {
  info: 'null',
};
