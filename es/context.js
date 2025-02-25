"use strict";

import _extends from "@babel/runtime/helpers/esm/extends";
import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { createContext, forwardRef, useContext } from 'react';
var leafletContext = /*#__PURE__*/createContext({});
export var useLeaflet = function useLeaflet() {
  return useContext(leafletContext);
};
export var LeafletConsumer = leafletContext.Consumer;
export var LeafletProvider = leafletContext.Provider;
export var withLeaflet = function withLeaflet(WrappedComponent) {
  var WithLeafletComponent = function WithLeafletComponent(props, ref) {
    return /*#__PURE__*/React.createElement(LeafletConsumer, null, function (leaflet) {
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, {
        leaflet: leaflet,
        ref: ref
      }));
    });
  };

  var name = // flowlint-next-line sketchy-null-string:off
  WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithLeafletComponent.displayName = "Leaflet(" + name + ")";
  var LeafletComponent = /*#__PURE__*/forwardRef(WithLeafletComponent);
  hoistNonReactStatics(LeafletComponent, WrappedComponent);
  return LeafletComponent;
};