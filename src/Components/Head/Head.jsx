import "./HeadStyle.css"

const Head = ({headInfo, headBtns}) => {
    return (
        <div className="head-1">
            <div className="info">
                {headInfo.map((info) => (<><i className={info.icon} key={info.id}></i><p className="para" key={info.id}>{info.text}</p></>))}
            </div>
            <div className="btns">
                {headBtns.map((btn) => (<><i className={btn.icon} key={btn.id}></i><button className="btn" key={btn.id}>{btn.text}</button></>))}
            </div>
        </div>
    )
}

export default Head