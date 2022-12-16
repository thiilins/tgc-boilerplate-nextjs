import Head from 'next/head'
import { Description, Title, Wrapper } from '@styles/pages/home'
import Image from 'next/image'
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
      <Wrapper>
        <Image
          alt=""
          src="/img/icon_192.png "
          placeholder="blur"
          width={50}
          height={50}
          blurDataURL="data:..."
        />
        <Title>Boilerplate Next + Typescript</Title>
        <Description>
          TypeScript, ReactJS, NextJS e Styled Components
        </Description>
        <Image
          src="/img/hero-illustration.svg"
          alt="Um desenvolvedor de frente para uma tela com código."
          placeholder="blur"
          blurDataURL="data:..."
          width={300}
          height={300}
        />
      </Wrapper>
    </>
  )
}
