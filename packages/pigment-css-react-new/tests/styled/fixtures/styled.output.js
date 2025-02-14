import {
  css as _css,
  styled as _styled,
  styled as _styled2,
  styled as _styled3,
  styled as _styled4,
  styled as _styled5,
  styled as _styled6,
  styled as _styled7,
  styled as _styled8,
} from '@pigment-css/react-new/runtime';
import { TestComponent } from './dummy-component.fixture';
export const rotateKeyframe = 'rotate';
const _exp4 = /*#__PURE__*/ () => TestComponent;
const StyledTest = /*#__PURE__*/ _styled(_exp4())({
  classes: 'StyledTest',
  variants: [
    {
      $$cls: 'StyledTest-size-small',
      props: {
        size: 'small',
      },
    },
    {
      $$cls: 'StyledTest-size-medium',
      props: {
        size: 'medium',
      },
    },
    {
      $$cls: 'StyledTest-size-large',
      props: {
        size: 'large',
      },
    },
  ],
  vars: {
    '--StyledTest-1': [
      (props) => {
        return props.size === 'small' ? 'red' : 'blue';
      },
      0,
    ],
  },
});
export const SliderRail3 = /*#__PURE__*/ _styled2('span')({
  classes: 's4ekdda',
});
export const SliderRail = /*#__PURE__*/ _styled3('span')({
  classes: 'sqpzee',
});
const SliderRail5 = /*#__PURE__*/ _styled4('span')({
  classes: 's1o48m17',
});
const Component = /*#__PURE__*/ _styled5('div')({
  classes: 'c13e7k7c',
});
const SliderRail2 = /*#__PURE__*/ _styled6('span')({
  classes: 'sqzgjb7',
});
const SliderRail4 = /*#__PURE__*/ _styled7('span')({
  classes: 'sxcjuwu',
});
const _exp14 = /*#__PURE__*/ () => SliderRail4;
const ViewPort = /*#__PURE__*/ _styled8(_exp14())({
  classes: 'v1x90zfp',
});
export function App() {
  return (
    <Component>
      <SliderRail />
      <SliderRail2 />
    </Component>
  );
}
App.displayName = 'App';
