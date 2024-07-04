import oimg1 from './assets/oimg1.png'
import oimg2 from './assets/oimg2.png'
import oimg3 from './assets/oimg3.png'
import oimg4 from './assets/oimg4.png'
import oimg5 from './assets/oimg5.png'
interface OfferingData{
    id:number,
    heading:string,
    img:string,
    text:string
}

const data: OfferingData[]=[
    {
        id:1,
        heading: "Product Development & Delivery",
        img: oimg1,
        text: "Product ideation and development,Product testing & maintenance, Product Design, Product Management Services,Product Usage Analytics,UX /UI design and Audit."
    },
    {
        id:2,
        heading: "Marketing & Growth",
        img: oimg2,
        text: "Market segmentation and TAM identification,Traffic & User behavioural analysis,Go-to-Market strategy & Growth targets,Periodic surveys & Feedback loop,Customer success & benchmarking."
    },
    {
        id:3,
        heading: "Hiring & Training",
        img: oimg3,
        text: "Team Hiring across technology, product, design and marketingInfrastructure offshoringTraining, certifications and upskilling Hiring and training for deep tech including blockchain, metaverse and web3.0"
    },
    {
        id:4,
        heading: "Investment & Fundraise",
        img: oimg4,
        text: "Investor pitches &  pitch decks,Platform evaluation & roadmapping,Costing and budgeting,Access to vibrant and robust Indian startup ecosystem,Helped 650+ start ups for investments so far."
    },
    {
        id:5,
        heading: "Technology Services",
        img: oimg5,
        text:"Dev Ops, Infra and SRE management Architecture setup, audit and management Development lifecycle setup and process management Engineering offshoring and offset development capacity"
    },
    {
        id:6,
        heading: "Process Optimization",
        img: oimg5,
        text:"Optimize technical or business processes to align with -Business revenue targets -Product success metrics -Internal team KRAs -To make effective baseline -Due diligence of business and product"
    }
]

export default data