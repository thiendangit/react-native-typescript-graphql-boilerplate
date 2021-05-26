import styled from '@emotion/native'

const Container = styled.SafeAreaView((props) => ({
  flex: 1,
  backgroundColor: props.theme.background,
  alignItems: 'center',
  justifyContent: 'center',
}))

export default Container
