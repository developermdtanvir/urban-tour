import { useParams } from "react-router-dom";


export const DetailPricing = ({ children, ...rest }) => {

    const { id } = useParams();
    return (
        <div>
            <h1>Hello  World</h1>
        </div>
    )
}
