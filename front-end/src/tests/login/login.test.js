import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import {cleanup, fireEvent, render} from '@testing-library/react';

import Login from "./../../componets/login/index";
import store from "./../../store/index";

//   let usrType = 1;
//   // manually trigger the callback
//   tree.props.setUserType(usrType)
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

test("Verificar la ausencia de cambios inesperados en el GUI", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[1].children[0].children[1].children[0].children[2].children[0].children[1].children[0].props.onChange();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[1].children[0].children[1].children[0].children[2].children[0].children[2].children[0].props.onChange();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[1].children[0].children[1].children[0].children[2].children[0].children[0].children[0].props.onChange();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

afterEach(cleanup);

it('Actualizar solo 1 elemento en checkbox', () => {
  const {queryByLabelText, getByLabelText} = render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
expect(queryByLabelText("Estudiante").checked).toBeTruthy();
expect(queryByLabelText("Profesor").checked).toBeFalsy();
expect(queryByLabelText("Administrador").checked).toBeFalsy();

fireEvent.click(getByLabelText("Profesor"));

expect(queryByLabelText("Estudiante").checked).toBeFalsy();
expect(queryByLabelText("Profesor").checked).toBeTruthy();
expect(queryByLabelText("Administrador").checked).toBeFalsy();

fireEvent.click(getByLabelText("Administrador"));

expect(queryByLabelText("Estudiante").checked).toBeFalsy();
expect(queryByLabelText("Profesor").checked).toBeFalsy();
expect(queryByLabelText("Administrador").checked).toBeTruthy();
});
