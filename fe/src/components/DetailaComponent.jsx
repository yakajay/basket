import axios from "axios";
import { useState } from "react";
import { productUrl } from "../repo/api_path";
import { imageUrl } from "../repo/api_path";
import { useEffect } from "react";

const DetailaComponent = () => {
    const { id } = usePrarama()
    const [product, setProduct] = useState(" ")

    const singleHander = async () => {
        try {
            const res = await axios.get(`${productUrl}/${id}`)
            console.log(res.data);
            console.log(res.data.record.image);
            setProduct(res.data.record);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        singleHander()
    }, []);

    return (
        <div>
            <div className="detailSection">
                <div className="imgCont">
                    <img className="singleImage" src={`${imageUrl}${product.image}`} alt="" />
                </div>
                <div className="singleDetails">
                    <div className="singleName">
                        {product.name}
                    </div>
                    <div className="singlePrice">
                        Price: {product.price}
                    </div>
                    <div className="singleDesc">
                        Description: {product.desc}
                    </div>
                    <div className="singleBtn">
                        <button className="singleCartBrn">Add to Cart</button>
                        <button className="singleLaterBrn">Save for Later</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailaComponent
