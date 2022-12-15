import { type NextPage } from "next"
import Head from "next/head"
import Navbar from "./components/_navbar"
import Card from "./components/_card"
import Text from "./components/_text"
import Container from "./components/_container"
import Article from "./components/_article"
import Img from "./components/_img"
import Content from "./components/_content"
import { useState } from "react"

const Editorial: NextPage = () => {
    const [article, setArticle] = useState(0)
    return (
        <>
            <Head>
                <title>The Times - Editorials</title>
            </Head>
            <main className="overflow-x-hidden">
                <Container>
                    <Navbar></Navbar>
                    <div className={article !== 0 ? "hidden" : "flex flex-col items-center"}>
                        <h1 className="text-7xl mt-5">Editorials</h1>
                        <Content className="w-[90%]">
                            <Card title="Opinion: The Trade Should Have Never Happened" action={
                                <button className="btn" onClick={() => { setArticle(1) }}>Read Article</button>
                            } src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-12/221208-Brittney-Griner-nevada-an-3c64a1.jpg">
                                This op-ed analyzes the pros and cons of Viktor Bout's trade for Britney Griner.
                            </Card>
                            <Card title="Opinion: Iran Should be Overthrown" action={
                                <button className="btn" onClick={() => { setArticle(2) }}>Read Article</button>
                            } src="https://media.cnn.com/api/v1/images/stellar/prod/221208011208-iran-tehran-protests-file.jpg?c=16x9&q=h_720,w_1280,c_fill">
                                Protests spark in Iran as protestors get brutally suppressed when protesting for more rights.
                            </Card>
                        </Content>
                    </div>
                    <div className={article !== 1 ? "hidden" : ""}>
                        <Article title="Britney Griner's Trade">
                            <Content>
                                <Img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-12/221208-Brittney-Griner-nevada-an-3c64a1.jpg" />
                                <Text className="mt-10">
                                    In recent months, Iran has had and currently does have a lot of protests going around over the death of Mahsa and the execution of Shekari. These recent protests are a start of something great that can finally change how the regime of Iran looks at its people. 
                                </Text>
                                <Text className="mt-5">
                                    Many people in Iran have been outraged due to the death of one Mahsa for wearing her hijab incorrectly and the first execution of a person due to protesting. These reasons give them all the right to protests and this isn’t including the many deaths that have happened in between. This is supported even more by the fact Shekari did not get due process or even a lawyer. 
                                </Text>
                                <Text className="mt-5">
                                    Even European officials have even criticized that Iran is abusing the power they have over the country by not treating them fair or equally. The past president even stated that they should be more cooperative and listen to the protesters. The way Iran uses its power is seen by everyone and is under investigations.They should be found guilty of human rights violations and be replaced with a much better regime over the country to balance it.
                                </Text>
                                <button className="btn w-full mt-10" onClick={() => { setArticle(0) }}>Return to News Page</button>
                                <div className="h-6"></div>
                            </Content>
                        </Article>
                    </div>
                    <div className={article !== 2 ? "hidden" : ""}>
                        <Article title="Protests in Iran">
                            <Content>
                                <Img src="https://media.cnn.com/api/v1/images/stellar/prod/221208011208-iran-tehran-protests-file.jpg?c=16x9&q=h_720,w_1280,c_fill" />
                                <Text className="mt-10">
                                    Protests in Iran spark again and again as the government tries to suppress the protests with brutal methods. A man named Shekari stabbed a paramilitary force member in the capital, Tehran, and one month later, he was executed by hanging. The first death from execution due to the recent protests.
                                </Text>
                                <Text className="mt-5">
                                    European governments respond with heavy criticism after learning that the execution wasn’t fair due to Shekari not getting a lawyer and without due process. Many people around the world were outraged by this act, including the former President of Iran himself who told the government to be more lenient towards the protesters.
                                </Text>
                                <Text className="mt-5">
                                    Many more people are wanted for execution and many have already died from the regime's abuse of power, this includes Mahsa who was killed for wearing her hijab incorrectly. Iran is currently wanted for an investigation for violations against human rights and many want the regime to be overthrown and replaced with a better one.
                                </Text>
                                <button className="btn w-full mt-10" onClick={() => { setArticle(0) }}>Return to News Page</button>
                                <div className="h-6"></div>
                            </Content>
                        </Article>
                    </div>
                </Container>
            </main>
        </>
    )
}

export default Editorial