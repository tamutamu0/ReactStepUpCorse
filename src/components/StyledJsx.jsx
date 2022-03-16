export const StyledJsx = () => {
    return (
        <>
            <div className="container">
                <p className="title">- Styled JSX -</p>
                <button className="button">FIGHT!</button>
            </div>

            {/* Styled Jsx */}
            {/* JSXの中でstyleを記述 */}
            {/* 通常のCSSの記法で書ける */}
            {/* デフォルトでは疑似要素非対応 */}
            <style jsx="true">{`
                .container{
                    width:150px;
                    border:solid 2px #392eff;
                    border-radius:20px;
                    padding:8px;
                    margin:8px;
                    display:frex;
                    justify-content:space-around;
                    align-items:center;
                }
                .title{
                    margin:0;
                    color:#3d84a8;
                }
                .button{
                    background-color:#abedd8;
                    border:none;
                    padding:8px;
                    border-radius:8px;
                }
            `}</style>
        </>
    );
}