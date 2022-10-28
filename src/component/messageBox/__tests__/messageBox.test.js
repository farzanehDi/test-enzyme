import  {shallow} from 'enzyme';
import MessageBox from "../index";
import {findByDataTest,checkProps} from "../../../utils/test";


test('message box is exist', async () => {
    const wrapper = shallow(<MessageBox display={true}/>)
    const component =await findByDataTest(wrapper,'messageBox');
    expect(component.length).toBe(1);
    // expect(component.text().length).not.toBe(0);
});
test('message box is not exist', async () => {
    const wrapper = shallow(<MessageBox display={false}/>)
    const component =await findByDataTest(wrapper,'messageBox');
    expect(component.length).toBe(0);
});
test('check props type',()=>{
    const expectedProps={display:false};
    const checkPropsValue=checkProps(MessageBox,expectedProps);
    expect(checkPropsValue).toBeUndefined();
});