import styled from "styled-components";

export const Icon = styled.svg`
  width: 32px;
  height: 32px;
`

export type IconThemeProps = {
  isDisplayed: boolean
}

export const IconTheme = styled(Icon)<IconThemeProps>`
  display: ${({isDisplayed}) => isDisplayed ? "none" : "inline"}
`
