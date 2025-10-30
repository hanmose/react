import GUserInfo from "./GUserInfo";

const reload = [
    {
        name: "this",
        img: "아씨 알아"
    }
]

function GComment(){
    return(
        <GUserInfo user={reload[0]}/>
    )
}
export default GComment;