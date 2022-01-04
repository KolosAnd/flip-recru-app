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
                    <li className={mainClass.card_info_item} key={key}>
                        <span className={mainClass.card_info_name}>{key}</span>
                        <span className={mainClass.card_info_value}>{value}</span>
                    </li>
                )
            } else if (!value.length) {
                item = null;
            } else {
                item = (
                    <li className={mainClass.card_info_item} key={key}>
                        <span className={mainClass.card_info_name}>{key} : </span>
                        <ol className={mainClass.card_info_list}>
                            {
                                value?.map(oneItem => <li key={key}>
                                    <a target='_blank' rel="noreferrer" href={oneItem}>{oneItem}</a>
                                </li>)
                            }
                        </ol>
                    </li>
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