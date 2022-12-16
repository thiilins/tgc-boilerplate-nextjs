import Head from 'next/head'
import * as S from '@styles/pages/home'
import { DefaultImage } from '@components/DefaultImage'
interface IProps {
  title?: string
}
export default function Home({
  title = 'Boilerplate - NextJs/Typescript'
}: IProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <S.Wrapper>
        <DefaultImage
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
        <DefaultImage
          src="/img/hero-illustration.svg"
          alt="Um desenvolvedor de frente para uma tela com código."
          placeholder="blur"
          blurDataURL="data:..."
          width={300}
          height={300}
        />
      </S.Wrapper>
    </>
  )
}
