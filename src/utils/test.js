import checkPropTypes from "check-prop-types";

export const findByDataTest=(component,val)=>{
    return component.find(`[data-test="${val}"]`)
}

export const checkProps=(component,templateProps)=>{
    return checkPropTypes(component.propTypes,templateProps,'prop',component.name);
}