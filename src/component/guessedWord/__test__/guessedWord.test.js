import {shallow} from "enzyme";
import GuessedWord from "../index";
import {checkProps, findByDataTest} from "../../../utils/test";

const defaultProps={
    guessedWords:[{word:'guess word',matchCount:3}]
};

const setupWrapper=(props)=>{
    return shallow(<GuessedWord {...props} />)
}

test('check prop types',()=>{
    const checkedProps=checkProps(GuessedWord,defaultProps);
    expect(checkedProps).toBeUndefined();
})

describe('if props is not exist',()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper=setupWrapper({guessedWords:[]});
    })
    test('render component without error',async ()=>{
        const component=await findByDataTest(wrapper,'container-guessed-words');
        expect(component.length).toBe(1);
    })
    test('text info to user that start guess word',async ()=>{
        const textComponent=await findByDataTest(wrapper,'info');
        expect(textComponent.length).toBe(1);
    });
})

describe('if props is exist',()=>{

    let wrapper;
    const array=[
        {word:'farzaneh',matchCount:0},
        {word:'afsaneh',matchCount:5},
        {word:'ahmad',matchCount:2},
    ]
    beforeEach(()=>{
        wrapper=setupWrapper({guessedWords:array});
    })

    test('render component without error',async ()=>{
        const component=await findByDataTest(wrapper,'container-guessed-words');
        expect(component.length).toBe(1);
    })

    test('text info to user that start guess word',async ()=>{
        const textComponent=await findByDataTest(wrapper,'wordItem');
        expect(textComponent.length).toBe(array.length);
    });
})