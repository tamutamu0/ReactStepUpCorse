import { memo,useEffect } from "react";

const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki",
}

export const ChildArea = memo((props) => {
    const { open,text,onClickClose } = props;
    const data = [...Array(2000).keys()];

    useEffect(()=>{
        data.forEach(()=>{
            console.log("...");
        })
    },[text]);

    return (
        <>
            {open ? (
                <div style={style}>
                    <p>{text}</p>
                    <button onClick={onClickClose}>閉じる</button>
                </div>
            ) : (null)}
        </>

    )
});