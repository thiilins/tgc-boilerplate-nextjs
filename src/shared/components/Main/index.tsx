import Image from 'next/image'
import * as S from './styles'
const Main = () => (
  <S.Wrapper>
    <Image
      alt=""
      src="/img/icon_192.png "
      placeholder="blur"
      width={50}
      height={50}
      blurDataURL="data:..."
    />
    <S.Title>Boilerplate Next + Typescript</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <Image
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
      placeholder="blur"
      blurDataURL="data:..."
      width={300}
      height={300}
    />
  </S.Wrapper>
)

export default Main
