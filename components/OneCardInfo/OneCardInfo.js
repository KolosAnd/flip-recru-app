import mainClass from "./OneCardInfo.module.css";


function OneCardInfo (cardInfo) {

    const getItems = () => {
        let arr = [];
        let isArr = false;
        let item;
        for (const [key, value] of Object.entries(cardInfo.cardInfo)) {
            if(Array.isArray(value)) isArr = true;

            if(!isArr){
                item = (
                    <li className={mainClass.card_info_item}>
                        <span className={mainClass.card_info_name}>{key}</span>
                        <span className={mainClass.card_info_value}>{value}</span>
                    </li>
                )
            }else {
                item = (
                    <div className={mainClass.card_info_item}>
                        <span className={mainClass.card_info_name}>{key} : </span>
                        <ol className={mainClass.card_info_list}>
                            {
                                value?.map(oneItem => <li>
                                    <a target='_blank' href={oneItem}>{oneItem}</a>
                                </li>)
                            }
                        </ol>
                    </div>
                )
            }

            arr.push(item)
            isArr = false;
        }
        return arr;
    }

    return (
            <ul className={mainClass.card_info_block}>
                {
                    getItems()
                }
            </ul>
    )
}

export default OneCardInfo;