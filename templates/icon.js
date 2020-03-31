import React from 'react'
import { createSvgIcon } from './base'

export const <%= iconName%> = createSvgIcon(({ color }) => (
  <% if (fragment) { %> <React.Fragment> <% } %>
  <%= icon %>
  <% if (fragment) { %> </React.Fragment> <% } %>
))

<%= iconName %>.displayName = "<%= iconName %>"
