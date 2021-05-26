import { Switch } from 'react-native-gesture-handler'
import styled from '@emotion/native'

export const Title = styled.Text((props) => ({
  fontSize: 24,
  fontWeight: 'bold',
  color: props.theme.text,
}))

export const ThemeToggle = styled(Switch)(() => ({
  marginVertical: 16,
}))

export const ThemeDescription = styled.Text((props) => ({
  color: props.theme.text,
  paddingHorizontal: 24,
  fontSize: 14,
  marginVertical: 16,
  textAlign: 'center',
}))
