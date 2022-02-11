import TopItem from "./TopItem";

function CommentatorsTop(props) {
    const {names} = props;

    return (
        <ul className="list">
            <h2 className="second-title CommentatorsTop-title">Список комментаторов</h2>

            {names.map((name, i) => {
                return <TopItem
                    key={i}
                    userName={name.userName}
                />
            })}
        </ul>
    )
}

export default CommentatorsTop;