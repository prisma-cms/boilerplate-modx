

import { Component } from "react";

import {App as PrismaApp} from "@prisma-cms/front";

import Renderer from "./components/Renderer";

import * as queryFragments from "./schema/generated/api.fragments";

export default class App extends PrismaApp {

  static defaultProps = {
    ...PrismaApp.defaultProps,
    Renderer,
    queryFragments,
  }

}
