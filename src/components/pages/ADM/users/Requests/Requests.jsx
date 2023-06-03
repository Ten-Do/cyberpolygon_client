import { Request } from "../../uiComponents/Request";


export const Requests = (props) => {
    let RequestElements = props.data
        .map(d => <Request data={d} key={d.id} />);
    return (
        <div className="request">
            <div className="request_tittle">Заявки</div>
            <div className="user_block">
                {RequestElements}
            </div>
        </div>
    );
}